import ConnectToServer from "../APIConnect/ConnectToServer";

const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_BE_FORM = 'TOGGLE_BE_FORM';
const SET_USER_PROFILE_INFO = 'SET_USER_PROFILE_INFO';

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
    return {
        type: SET_USERS,
        users: data
    }
}

const setUserProfileInfo = (userProfileInfo) => {
    return {
        type: SET_USER_PROFILE_INFO,
        userProfileInfo
    }
}

const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleBeForm = (activeForm) => {
    return {
        type: TOGGLE_BE_FORM,
        activeForm
    }
}

//Thunk functions
export const getUsersRequst = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        ConnectToServer.getUsers().then(data => {
            dispatch(setNewUsers(data.users))
            dispatch(toggleIsFetching(false))
        });
    }
}

export const newUser = (user) => {
    return (dispatch) => {
        ConnectToServer.addNewUser(user).then(data => {
            if (data.success === 1) {
                dispatch(getUsersRequst())
                dispatch(toggleBeForm(false))
            }
        });
    }
}

export const getUserProfileInfo = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));   
        ConnectToServer.getUser(id).then(data => {
            if (data.success === 1) {
                dispatch(setUserProfileInfo(data.user))
                dispatch(toggleIsFetching(false))
            }
        });
    }
}

export const updateUser = (user) => {
    return (dispatch) => {
        ConnectToServer.putUser(user).then(data => {
            if (data.success === 1) {
                dispatch(getUserProfileInfo(user.id))
                dispatch(toggleBeForm(false))
            }
        });
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));        
        ConnectToServer.deleteUser(id).then(data => {
            if (data.success === 1) {      
                dispatch(getUsersRequst())           
                dispatch(toggleIsFetching(false))
            }
        });
    }
}

export default usersReducer;