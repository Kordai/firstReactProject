import ConnectToServer from "../APIConnect/ConnectToServer";

const SET_PAYMENT = 'SET_PAYMENT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAYMENTS_COUNT = 'SET_TOTAL_PAYMENTS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_BE_FORM = 'TOGGLE_BE_FORM';
const TOGGLE_BE_NAME_FORM = 'TOGGLE_BE_NAME_FORM';
const SET_INITIAL_VALUES_PAYMENT_FORM = 'SET_INITIAL_VALUES_PAYMENT_FORM';

//Started props
let initialState = {
    initialValuesPaymentForm: {
        Id: "",
        Customer: "",
        Date: "",
        Payment: "",
        Point: ""
    },
    nameFormAction: "",
    activeForm: false,
    isFetching: false,
    pagesCount: 5,
    pageSize: 10,
    totalPaymentsCount: 0,
    currentPage: 1,
    formName: "Payment",
    headTable: ["Namber", "Point", "Customer", "Payment", "Date"],
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
    switch (action.type) {

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
            };
        case TOGGLE_BE_NAME_FORM:
            return {
                ...state,
                nameFormAction: action.nameFormAction
            }
        case TOGGLE_BE_FORM:
            return {
                ...state,
                activeForm: action.activeForm
            };
        case SET_INITIAL_VALUES_PAYMENT_FORM:
            return {
                ...state,
                initialValuesPaymentForm: action.initialValuesPaymentForm
            }
        default:
            return state;
    }
}

//Action Creators functions

const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage }
}

const setinitialValues = (initialValuesPaymentForm) => {
    return { type: SET_INITIAL_VALUES_PAYMENT_FORM, initialValuesPaymentForm }
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

const toggleBeNameForm = (nameFormAction) => {
    return {
        type: TOGGLE_BE_NAME_FORM,
        nameFormAction
    }
}

export const toggleBeForm = (activeForm) => {
    return {
        type: TOGGLE_BE_FORM,
        activeForm
    }
}


//Thunk functions
export const getPayments = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        ConnectToServer.getPayments(currentPage, pageSize)
            .then(data => {
                dispatch(setPayments(data.payments));
                dispatch(setTotalPaymentsCount(data.total));
                dispatch(toggleIsFetching(false));
            });
    }
}

export const openEditForm = (obj) => {
    return (dispatch) => {
        let initialValues = {
            Id: obj[0],
            Point: obj[1],
            Customer: obj[2],
            Payment: obj[3],
            Date: obj[4]
        }
        dispatch(setinitialValues(initialValues))
        dispatch(toggleBeNameForm("Edit"))
        dispatch(toggleBeForm(true))
    }
}

export const onSubmitForm = (formData) => {
    return (dispatch) => {
        let newPayment = {
            Customer: "0",
            Date: "0",
            Payment: 0,
            Point: "0"
        }

        newPayment = { ...newPayment, ...formData }
        
        ConnectToServer.addNewPayment(newPayment).then(data => {
            if (data.success === 1) {
                dispatch(getPayments(1, 10))
            }
        })
        let initialValues = {
            Id: "",
            Point: "",
            Customer: "",
            Payment: "",
            Date: ""
        }
        dispatch(setinitialValues(initialValues)) 
        dispatch(toggleBeForm(false))
    }
}

export const openAddForm = () => {
    return (dispatch) => {
        let initialValues = {
            Id: "",
            Point: "",
            Customer: "",
            Payment: "",
            Date: ""
        }
        dispatch(setinitialValues(initialValues))      
        dispatch(toggleBeNameForm("Add"))
        dispatch(toggleBeForm(true))
    }
}

export const onUdatePayment = () => {
    return (dispatch) => {

    }
}

export const onDeletePayment = (id) => {
    return (dispatch) => {        
        ConnectToServer.deletePayment(id)
    }
}

export default section3Reducer;