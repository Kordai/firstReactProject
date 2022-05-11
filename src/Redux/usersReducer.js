import ConnectToServer from "../APIConnect/ConnectToServer";

const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

//Started props
let initialState = {
    users: [],
    isFetching: false
};

//Reducers functions
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}

//Action Creators functions
export const setNewUsers = (data) => {
    return {
        type: SET_USERS,
        users: data
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
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


export default usersReducer;