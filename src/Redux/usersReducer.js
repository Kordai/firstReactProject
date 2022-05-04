const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    isFetching: true
};

const usersReducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_USERS:
            return {
                ...state, 
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    } 
}

export const setNewUsers = (data) => {
    return { 
        type: SET_USERS, 
        users: data 
    }
}

export default usersReducer;