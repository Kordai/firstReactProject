import ConnectToServer from "../APIConnect/ConnectToServer";

//Action type
const SET_USERS = 'USERS/SET_USERS';
const TOGGLE_IS_FETCHING = 'USERS/TOGGLE_IS_FETCHING';
const TOGGLE_BE_FORM = 'USERS/TOGGLE_BE_FORM';
const SET_USER_PROFILE_INFO = 'USERS/SET_USER_PROFILE_INFO';

//Started props
let initialState = {
    users: [],
    isFetching: false,
    activeForm: false,
    userProfileInfo: {}
};

//Reducers functions
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_BE_FORM:
            return {
                ...state,
                activeForm: action.activeForm
            }
        case SET_USER_PROFILE_INFO:
            return {
                ...state,
                userProfileInfo: action.userProfileInfo
            }
        default:
            return state;
    }
}

//Action Creators functions
const setNewUsers = (data) => {
    return { type: SET_USERS, users: data }
}

const setUserProfileInfo = (userProfileInfo) => {
    return { type: SET_USER_PROFILE_INFO, userProfileInfo }
}

const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}

export const toggleBeForm = (activeForm) => {
    return { type: TOGGLE_BE_FORM, activeForm }
}

//Thunk functions
export const getUsersRequst = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await ConnectToServer.getUsers()
        dispatch(setNewUsers(data.users))
        dispatch(toggleIsFetching(false))
    }
}

export const newUser = (user) => {
    return async (dispatch) => {
        const data = await ConnectToServer.addNewUser(user)
        if (data.success === 1) {
            dispatch(getUsersRequst())
            dispatch(toggleBeForm(false))
        }
    }
}

export const getUserProfileInfo = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await ConnectToServer.getUser(id)
        if (data.success === 1) {
            dispatch(setUserProfileInfo(data.user))
            dispatch(toggleIsFetching(false))
        }
    }
}

export const updateUser = (user) => {
    return async (dispatch) => {
        const data = await ConnectToServer.putUser(user)
        if (data.success === 1) {
            dispatch(getUsersRequst())
            dispatch(getUserProfileInfo(user.id))
            dispatch(toggleBeForm(false))
        }
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await ConnectToServer.deleteUser(id)
        if (data.success === 1) {
            dispatch(getUsersRequst())
            dispatch(toggleIsFetching(false))
        }
    }
}

export default usersReducer;