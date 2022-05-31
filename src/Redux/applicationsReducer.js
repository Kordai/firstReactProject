import ConnectToServer from "../APIConnect/ConnectToServer";

const UPDATE_APPLICATION = 'UPDATE_APPLICATION';
const UPDATE_APPLICATION_DATA = 'UPDATE_APPLICATION_DATA';
const SET_APPLICATIONS = 'SET_APPLICATIONS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

//Started props
let initialState = {
    isFetching: false,
    formName: "Application",
    data: [],
    deliveryInfo: [
        { name: 'January', Coffee: 400, Milk: 1400, Cups: 400, Sugar: 1400},
        { name: 'February', Coffee: 300, Milk: 1600, Cups: 400, Sugar: 1400 },
        { name: 'March', Coffee: 250, Milk: 1800, Cups: 400, Sugar: 1400 },
        { name: 'April', Coffee: 600, Milk: 2000, Cups: 400, Sugar: 1400 },
        { name: 'May', Coffee: 550, Milk: 2200, Cups: 400, Sugar: 1400 },
        { name: 'June', Coffee: 500, Milk: 2400, Cups: 400, Sugar: 1400 },
        { name: 'July', Coffee: 400, Milk: 1400, Cups: 400, Sugar: 1400},
        { name: 'August', Coffee: 300, Milk: 1600, Cups: 400, Sugar: 1400 },
        { name: 'September', Coffee: 250, Milk: 1800, Cups: 400, Sugar: 1400 },
        { name: 'October', Coffee: 600, Milk: 2000, Cups: 400, Sugar: 1400 },
        { name: 'November', Coffee: 550, Milk: 2200, Cups: 400, Sugar: 1400 },
        { name: 'December', Coffee: 500, Milk: 2400, Cups: 400, Sugar: 1400 }
    ]
};

//Reducers functions
const applicationsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_APPLICATION:
            return {
                ...state,
                inputMark: { ...state.inputMark, [action.nameMark]: action.textMark }
            };
        case UPDATE_APPLICATION_DATA:
            return {
                ...state,
                data: [...state.data, [state.data.length + 1,
                state.inputMark.Point,
                state.inputMark.Coffee,
                state.inputMark.Milk,
                state.inputMark.Cups,
                state.inputMark.Sugar,
                state.inputMark.Data]],
                inputMark: {
                    Point: "",
                    Coffee: "",
                    Milk: "",
                    Cups: "",
                    Sugar: "",
                    Data: ""
                }
            };
        case SET_APPLICATIONS:
            return {
                ...state,
                data: action.applications
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
export const addUpdate = (name, value) => {
    return {
        type: UPDATE_APPLICATION,
        nameMark: name,
        textMark: value
    }
}

// export const addUpdateText = () => {
//     return { type: UPDATE_APPLICATION_DATA }
// }

const setApplication = (newApplications) => {
    return { type: SET_APPLICATIONS, applications: newApplications }
}

const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

//Thunk functions
export const getApplications = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        ConnectToServer.getApplications().then(data => {
            dispatch(setApplication(data.applications))
            dispatch(toggleIsFetching(false))
        });
    }
}

export default applicationsReducer;