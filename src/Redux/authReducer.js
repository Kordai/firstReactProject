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
        // case SET_USER_PROFILE_INFO:
        //     return {
        //         ...state,
        //         userProfileInfo: action.userProfileInfo
        //     }
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

// export const toggleBeForm = (activeForm) => {
//     return {
//         type: TOGGLE_BE_FORM,
//         activeForm
//     }
// }

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
//authUser

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

// export const getUserProfileInfo = (id) => {
//     return (dispatch) => {
//         dispatch(toggleIsFetching(true));        
//         ConnectToServer.getUser(id).then(data => {
//             if (data.success === 1) {
//                 dispatch(setUserProfileInfo(data.user))
//                 dispatch(toggleIsFetching(false))
//             }
//         });
//     }
// }

// export const updateUser = (user) => {
//     return (dispatch) => {
//         ConnectToServer.putUser(user).then(data => {
//             if (data.success === 1) {
//                 dispatch(getUserProfileInfo(user.id))
//                 dispatch(toggleBeForm(false))
//             }
//         });
//     }
// }

// export const deleteUser = (id) => {
//     return (dispatch) => {
//         dispatch(toggleIsFetching(true));        
//         ConnectToServer.deleteUser(id).then(data => {
//             if (data.success === 1) {      
//                 dispatch(getUsers())           
//                 dispatch(toggleIsFetching(false))
//             }
//         });
//     }
// }

export default authReducer;