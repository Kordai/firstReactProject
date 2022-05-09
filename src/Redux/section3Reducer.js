const UPDATE_PAYMENT = 'UPDATE_PAYMENT';
const UPDATE_PAYMENT_DATA = 'UPDATE_PAYMENT_DATA';
const SET_PAYMENT = 'SET_PAYMENT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAYMENTS_COUNT = 'SET_TOTAL_PAYMENTS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

// [
//     ["1", "Mart1", "LLC MART1", 75000, "January"],
//     ["2", "Mart2", "LLC MART2", 90000, "January"],
//     ["3", "GasStation1", "LLC GAS", 75000, "January"],
//     ["4", "GasStation2", "LLC GAS", 60000, "January"],
//     ["5", "Mart1", "LLC MART1", 79000, "March"],
//     ["6", "Mart2", "LLC MART2", 100000, "March"],
//     ["7", "GasStation1", "LLC GAS", 57000, "March"],
//     ["8", "GasStation2", "LLC GAS", 85000, "March"],
//     ["9", "Mart1", "LLC MART1", 79000, "May"],
//     ["10", "Mart2", "LLC MART2", 100000, "May"],
//     ["11", "GasStation1", "LLC GAS", 57000, "May"]
//   ],

let initialState = {
    isFetching: false,
    pagesCount: 5,
    pageSize: 10,
    totalPaymentsCount: 0,
    currentPage: 1,
    formName: "Payment",
    inputMark: {
        Point: "",
        Customer: "",
        Payment: "",
        Data: ""
    },
    headTable: ["Namber", "Point", "Customer", "Payment", "Data"],
    data: [],
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
                state.inputMark.Data]],
                inputMark: {
                    Point: "",
                    Customer: "",
                    Payment: "",
                    Data: ""
                }
            };
        case SET_PAYMENT:
            return {
                ...state,
                data: action.payments
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_PAYMENTS_COUNT:
            return {
                ...state,
                totalPaymentsCount: action.totalPaymentsCount
            };
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
        type: UPDATE_PAYMENT,
        nameMark: name,
        textMark: value
    }
}

export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage }
}

export const setTotalPaymentsCount = (totalPaymentsCount) => {
    return { type: SET_TOTAL_PAYMENTS_COUNT, totalPaymentsCount }
}

export const addUpdateText = () => {
    return { type: UPDATE_PAYMENT_DATA }
}

export const setPayments = (payments) => {
    return { type: SET_PAYMENT, payments }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export default section3Reducer;