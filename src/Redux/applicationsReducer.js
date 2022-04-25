const UPDATE_APPLICATION = 'UPDATE_APPLICATION';
const UPDATE_APPLICATION_DATA = 'UPDATE_APPLICATION_DATA';

const applicationsReducer = (state, action) => {

    let obj = state.inputMark;
    let val = state.data;

    switch (action.type) {
        case UPDATE_APPLICATION:
            for (let i in obj) {
                if (i === action.nameMark) {
                    obj[i] = action.textMark;
                }
            }
            state.inputMark = obj;
            return state;
        case UPDATE_APPLICATION_DATA:
            val.push([val.length + 1, obj.Point, obj.Coffee, obj.Milk, obj.Cups, obj.Sugar, obj.Data]);
            state.data = val;
            state.inputMark = {
                Point: "",
                Coffee: "",
                Milk: "",
                Cups: "",
                Sugar: "",
                Data: ""
            };
            return state;
        default:
            return state;
    }
}

export const uAActionCreator = (name, value) => {
    return {
        type: UPDATE_APPLICATION,
        nameMark: name,
        textMark: value
    }
}

export const uADActionCreator = () => {
    return { type: UPDATE_APPLICATION_DATA }
}

export default applicationsReducer;