const UPDATE_PAYMENT = 'UPDATE_PAYMENT';
const UPDATE_PAYMENT_DATA = 'UPDATE_PAYMENT_DATA';
const SET_PAYMENT = 'SET_PAYMENT';

let initialState = {};

const section3Reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PAYMENT:
            return {
                ...state,
                inputMark: { ...state.inputMark, [action.nameMark]: action.textMark }
            };
        case UPDATE_PAYMENT_DATA:
            return {
                ...state,
                data: [...state.data, [state.data.length + 1,
                state.inputMark.Point,
                state.inputMark.Customer,
                state.inputMark.Payment,
                state.inputMark.Month]],
                inputMark: {
                    Point: "",
                    Customer: "",
                    Payment: "",
                    Month: ""
                }
            };
        case SET_PAYMENT:
            return {
                ...state, 
                ...action.payments
            }
        default:
            return state;
    }
}

export const addUpdate = (name, value) => {
    return {
        type: UPDATE_PAYMENT,
        nameMark: name,
        textMark: value
    }
}

export const addUpdateText = () => {
    return { type: UPDATE_PAYMENT_DATA }
}

export const setPayment = (payments) => {   
    return { type: SET_PAYMENT, payments}
}

export default section3Reducer;