const UPDATE_PAYMENT = 'UPDATE_PAYMENT';
const UPDATE_PAYMENT_DATA = 'UPDATE_PAYMENT_DATA';

let initialState = {
    formName: "Payment",
    inputMark: {
        Point: "",
        Customer: "",
        Payment: "",
        Month: ""
    },
    headTable: ["Naber", "Point", "Customer", "Payment", "Month"],
    data: [
        ["1", "Mart1", "LLC MART1", 75000, "January"],
        ["2", "Mart2", "LLC MART2", 90000, "January"],
        ["3", "GasStation1", "LLC GAS", 75000, "January"],
        ["4", "GasStation2", "LLC GAS", 60000, "January"],
        ["5", "Mart1", "LLC MART1", 79000, "March"],
        ["6", "Mart2", "LLC MART2", 100000, "March"],
        ["7", "GasStation1", "LLC GAS", 57000, "March"],
        ["8", "GasStation2", "LLC GAS", 85000, "March"],
        ["9", "Mart1", "LLC MART1", 79000, "May"],
        ["10", "Mart2", "LLC MART2", 100000, "May"],
        ["11", "GasStation1", "LLC GAS", 57000, "May"]
    ],
    dataChart: [
        ["Month", "Payment"],
        ["January", 330000],
        ["February", 274000],
        ["March", 270000],
        ["April", 465000],
        ["May", 468000],
        ["June", 501000],
        ["July", 330000],
        ["August", 330000],
        ["September", 250000],
        ["October", 450000],
        ["November", 400000],
        ["December", 350000],
    ],
    options: {
        title: "Company Payments",
        hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
        vAxis: { minValue: 0 },
        chartArea: { width: "80%", height: "70%" }
    }

};

const section3Reducer = (state = initialState, action) => {
    // let obj = state.inputMark;
    // let val = state.data;

    switch (action.type) {
        case UPDATE_PAYMENT:
            // for (let i in obj) {
            //     if (i === action.nameMark) {
            //         obj[i] = action.textMark;
            //     }
            // }
            // state.inputMark = obj
            return {
                ...state,
                inputMark:{ ...state.inputMark, [action.nameMark]: action.textMark}
            };
        case UPDATE_PAYMENT_DATA:
            return {
                ...state,
                data: [...state.data, [state.data.length + 1, state.inputMark.Point, state.inputMark.Customer, state.inputMark.Payment, state.inputMark.Month]],
                inputMark: {
                    Point: "",
                    Customer: "",
                    Payment: "",
                    Month: ""
                }
            };
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