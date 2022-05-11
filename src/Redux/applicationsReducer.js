const UPDATE_APPLICATION = 'UPDATE_APPLICATION';
const UPDATE_APPLICATION_DATA = 'UPDATE_APPLICATION_DATA';
const SET_APPLICATIONS = 'SET_APPLICATIONS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    isFetching: false,
    formName: "Application",
    inputMark: {
        Point: "",
        Coffee: "",
        Milk: "",
        Cups: "",
        Sugar: "",
        Data: ""
    },
    headTable: ["Naber", "Point", "Coffee", "Milk", "Cups", "Sugar", "Data"],
    data: []
};

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

export const addUpdate = (name, value) => {
    return {
        type: UPDATE_APPLICATION,
        nameMark: name,
        textMark: value
    }
}

export const addUpdateText = () => {
    return { type: UPDATE_APPLICATION_DATA }
}

export const setApplication = (newApplications) => {
    return { type: SET_APPLICATIONS, applications: newApplications }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export default applicationsReducer;