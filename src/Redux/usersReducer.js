const SET_USERS = 'SET_USERS';

let initialState = [];

const usersReducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_USERS:
            return [
                ...state, 
                ...action.newUsers
            ]

        default:
            return state;
    } 
}

export const setUsersAC = (data) => {
    return { 
        type: SET_USERS, 
        newUsers: data 
    }
}

export default usersReducer;