import ConnectToServer from "../APIConnect/ConnectToServer";

//Action type
const UPDATE_APPLICATION = 'DELIVERY/UPDATE_APPLICATION';
const UPDATE_APPLICATION_DATA = 'DELIVERY/UPDATE_APPLICATION_DATA';
const SET_APPLICATIONS = 'DELIVERY/SET_APPLICATIONS';
const SET_DELIVERY_INFO = 'DELIVERY/SET_DELIVERY_INFO';
const TOGGLE_IS_FETCHING = 'DELIVERY/TOGGLE_IS_FETCHING';
const TOGGLE_BE_FORM = 'DELIVERY/TOGGLE_BE_FORM';
const SET_INITIAL_VALUES_FORM = 'DELIVERY/SET_INITIAL_VALUES_FORM';
const SET_ACTION_FORM = 'DELIVERY/SET_ACTION_FORM';

//Started props
let initialState = {
    isFetching: false,
    initialValuesForm: {},
    nameFormAction: "",
    activeForm: false,
    data: [],
    deliveryInfo: [
        { name: 'January', Coffee: 400, Milk: 1400, Cups: 400, Sugar: 1400 },
        { name: 'February', Coffee: 300, Milk: 1600, Cups: 400, Sugar: 1400 },
        { name: 'March', Coffee: 250, Milk: 1800, Cups: 400, Sugar: 1400 },
        { name: 'April', Coffee: 600, Milk: 2000, Cups: 400, Sugar: 1400 },
        { name: 'May', Coffee: 550, Milk: 2200, Cups: 400, Sugar: 1400 },
        { name: 'June', Coffee: 500, Milk: 2400, Cups: 400, Sugar: 1400 },
        { name: 'July', Coffee: 400, Milk: 1400, Cups: 400, Sugar: 1400 },
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
        case SET_ACTION_FORM:
            return {
                ...state,
                nameFormAction: action.nameFormAction
            }
        case TOGGLE_BE_FORM:
            return {
                ...state,
                activeForm: action.activeForm
            };
        case SET_DELIVERY_INFO:
            return {
                ...state,
                deliveryInfo: action.deliveryInfo
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_INITIAL_VALUES_FORM:
            return {
                ...state,
                initialValuesForm: action.initialValuesForm
            }
        default:
            return state;
    }
}

//Action Creators functions
const setinitialValues = (initialValuesForm) => {
    return { type: SET_INITIAL_VALUES_FORM, initialValuesForm }
}

const setNameFormAction = (nameFormAction) => {
    return { type: SET_ACTION_FORM, nameFormAction }
}

export const toggleBeForm = (activeForm) => {
    return {
        type: TOGGLE_BE_FORM,
        activeForm
    }
}

export const addUpdate = (name, value) => {
    return {
        type: UPDATE_APPLICATION,
        nameMark: name,
        textMark: value
    }
}

const setDeliveryInfo = (deliveryInfo) => {
    return { type: SET_DELIVERY_INFO, deliveryInfo }
}

const setApplication = (applications) => {
    return { type: SET_APPLICATIONS, applications }
}

const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}

//Thunk functions
export const onSubmitForm = (formData) => {
    return async (dispatch) => {
        const data = await ConnectToServer.addNewDelivery(formData)
        if (data.success === 1) {
            dispatch(getApplicationsRequest())
        }
        dispatch(toggleBeForm(false))
    }
}


export const onUdateDelivery = (formData) => {
    return async (dispatch) => {
        const data = await ConnectToServer.putApplication(formData)
        if (data.success === 1) {
            dispatch(getApplicationsRequest())
        }
        dispatch(toggleBeForm(false))
    }
}

export const onUdateDeliveryAction = (formData) => {
    return async (dispatch) => {
        const data = await ConnectToServer.putApplicationAction(formData)
        if (data.success === 1) {
            dispatch(getApplicationsRequest())
        }
        dispatch(toggleBeForm(false))
    }
}

export const openEditForm = (obj) => {
    return (dispatch) => {
        dispatch(setNameFormAction("Edit"))
        dispatch(setinitialValues(obj))
        dispatch(toggleBeForm(true))
    }
}

export const openNewForm = () => {
    return (dispatch) => {
        let initialValues = {
            id: "",
            point: "",
            coffee: "",
            milk: "",
            caps350: "",
            sugar: ""
        }
        dispatch(setNameFormAction("New"))
        dispatch(setinitialValues(initialValues))
        dispatch(toggleBeForm(true))
    }
}

export const getApplicationsRequest = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await ConnectToServer.getApplications()
        dispatch(setApplication(data.applications))
        dispatch(toggleIsFetching(false))
    }
}

export const deleteApplications = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await ConnectToServer.deleteApplication(id)
        if (data.success === 1) {
            dispatch(getApplicationsRequest())
        }
        dispatch(toggleIsFetching(false))
    }
}

export const mapArray = (array, name) => {
    return (dispatch) => {
        let obj = {
            name,
            Coffee: 0,
            Milk: 0,
            Cups: 0,
            Sugar: 0
        }
        array.map(val => {
            obj.Coffee += parseFloat(val.coffee)
            obj.Milk += parseFloat(val.milk)
            obj.Cups += parseInt(val.caps350) / 100
            obj.Sugar += parseFloat(val.sugar)
            return val
        })
        return obj
    }
}

export const getDeliveryInfo = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await ConnectToServer.getApplications()
        let deliveryInfo = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ].map((val, index) => dispatch(mapArray(data.applications.filter((f) => { return parseInt(f.month) === index + 1 }), val)))
        dispatch(setDeliveryInfo(deliveryInfo))
        dispatch(toggleIsFetching(false))
    }
}

export default applicationsReducer;