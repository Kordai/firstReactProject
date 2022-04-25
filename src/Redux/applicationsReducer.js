const UPDATE_APPLICATION = 'UPDATE_APPLICATION';
const UPDATE_APPLICATION_DATA = 'UPDATE_APPLICATION_DATA';

const applicationsReducer = (state, action) => {

    if (action.type === UPDATE_APPLICATION) {
        let obj = state.inputMark;
        for (let i in obj) {
            if (i === action.nameMark) {
                obj[i] = action.textMark;
            }
        }
        state.inputMark = obj;
    } else if (action.type === UPDATE_APPLICATION_DATA) {
        let val = state.data;
        let obj = state.inputMark;
        val.push([val.length + 1, obj.Point, obj.Coffee, obj.Milk, obj.Cups, obj.Sugar, obj.Data]);
        state.data = val;
        state.inputMark = {
            Point: "",
            Coffee: "",
            Milk: "",
            Cups: "",
            Sugar: "",
            Data: ""
        }
    }

    return state;
}

export default applicationsReducer;