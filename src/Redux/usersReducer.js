import ConnectToServer from "../APIConnect/ConnectToServer";

const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_BE_FORM = 'TOGGLE_BE_FORM';

//Started props
let initialState = {
    users: [],
    isFetching: false,
    activeForm: false
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
export const getUsers = () => {
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
                dispatch(getUsers())
                dispatch(toggleBeForm(false))
            }
        });
    }
}

export default usersReducer;