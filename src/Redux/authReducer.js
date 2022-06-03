import ConnectToServer from "../APIConnect/ConnectToServer";

const SET_USER = 'SET_USER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_ID = 'SET_USER_ID';

//Started props
let initialState = {
    userId: null,
    user: {
        id: null,
        photo: null,
        login: null,
        firstName: null,
        lastName: null
    },
    isFetching: false
};

//Reducers functions
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_ID:
            return {
                ...state,
                userId: action.userId
            }
        default:
            return state;
    }
}

//Action Creators functions
const setAuthUser = (data) => {
    return {
        type: SET_USER,
        user: data
    }
}

const setUserId = (userId) => {
    return {
        type: SET_USER_ID,
        userId
    }
}

const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

//Thunk functions
export const getAuthUser = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        ConnectToServer.getUser(id).then(data => {
            dispatch(setAuthUser(data.user))
            dispatch(toggleIsFetching(false))
        });
    }
}

export const authUser = (login) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        ConnectToServer.authUser(login).then(data => {
            if (data.success === 1) {
                dispatch(setUserId(data.user.id))
                dispatch(getAuthUser(data.user.id))
                dispatch(toggleIsFetching(false))
            }
        });
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch(setUserId(null))
        dispatch(setAuthUser({
            id: null,
            photo: null,
            login: null,
            firstName: null,
            lastName: null
        }))
    }
}

export default authReducer;