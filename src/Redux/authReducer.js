import ConnectToServer from "../APIConnect/ConnectToServer";

const SET_USER = 'SET_USER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
    isFetching: false,
    userProfileInfo: {}
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
        // case TOGGLE_BE_FORM:
        //     return {
        //         ...state,
        //         activeForm: action.activeForm
        //     }
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

// const setUserProfileInfo = (userProfileInfo) => {
//     return {
//         type: SET_USER_PROFILE_INFO,
//         userProfileInfo
//     }
// }

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
export const getAuthUser = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        ConnectToServer.getUser(initialState.userId).then(data => {
            dispatch(setAuthUser(data.user))
            dispatch(toggleIsFetching(false))
        });
    }
}

// export const newUser = (user) => {
//     return (dispatch) => {
//         ConnectToServer.addNewUser(user).then(data => {
//             if (data.success === 1) {
//                 dispatch(getUsers())
//                 dispatch(toggleBeForm(false))
//             }
//         });
//     }
// }

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