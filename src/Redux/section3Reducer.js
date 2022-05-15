import ConnectToServer from "../APIConnect/ConnectToServer";

const SET_PAYMENT = 'SET_PAYMENT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAYMENTS_COUNT = 'SET_TOTAL_PAYMENTS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

//Started props
let initialState = {
    isFetching: false,
    pagesCount: 5,
    pageSize: 10,
    totalPaymentsCount: 0,
    currentPage: 1,
    formName: "Payment",
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

//Reducers functions
const section3Reducer = (state = initialState, action) => {
    switch (action.type){
            
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

//Action Creators functions

export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage }
}

const setTotalPaymentsCount = (totalPaymentsCount) => {
    return { type: SET_TOTAL_PAYMENTS_COUNT, totalPaymentsCount }
}

const setPayments = (payments) => {
    return { type: SET_PAYMENT, payments }
}

const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

//Thunk functions
export const getPayments = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        ConnectToServer.getPayments(currentPage, pageSize)
            .then(data => {
                dispatch(setPayments(data.payments));
                dispatch(setTotalPaymentsCount(data.total));
                dispatch(toggleIsFetching(false));
            });
    }
}

export default section3Reducer;