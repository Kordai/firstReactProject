const UPDATE_PAYMENT = 'UPDATE_PAYMENT';
const UPDATE_PAYMENT_DATA = 'UPDATE_PAYMENT_DATA';

const section3Reducer = (state, action) => {

    if (action.type === UPDATE_PAYMENT) {
        let obj = state.inputMark;
        for (let i in obj) {
            if (i === action.nameMark) {
                obj[i] = action.textMark;
            }
        }
        state.inputMark = obj;

    } else if (action.type === UPDATE_PAYMENT_DATA) {
        let val = state.data;
        let obj = state.inputMark;
        val.push([val.length + 1, obj.Point, obj.Customer, obj.Payment, obj.Month]);
        state.data = val;
        state.inputMark = {
            Point: "",
            Customer: "",
            Payment: "",
            Month: ""
        }
    }

    return state;
}

export default section3Reducer;