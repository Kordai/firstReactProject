const UPDATE_PAYMENT = 'UPDATE_PAYMENT';
const UPDATE_PAYMENT_DATA = 'UPDATE_PAYMENT_DATA';

const section3Reducer = (state, action) => {
    let obj = state.inputMark;
    let val = state.data;

    switch (action.type) {
        case UPDATE_PAYMENT:
            for (let i in obj) {
                if (i === action.nameMark) {
                    obj[i] = action.textMark;
                }
            }
            state.inputMark = obj
            return state;
        case UPDATE_PAYMENT_DATA:
            val.push([val.length + 1, obj.Point, obj.Customer, obj.Payment, obj.Month]);
            state.data = val;
            state.inputMark = {
                Point: "",
                Customer: "",
                Payment: "",
                Month: ""
            };
            return state;
        default:
            return state;
    }
}

export const uPActionCreator = (name, value) => {
    return {
        type: UPDATE_PAYMENT,
        nameMark: name,
        textMark: value
    }
}

export const uPDActionCreator = () => {
    return { type: UPDATE_PAYMENT_DATA }
}

export default section3Reducer;