const UPDATE_APPLICATION = 'UPDATE_APPLICATION';
const UPDATE_APPLICATION_DATA = 'UPDATE_APPLICATION_DATA';

let initialState = {
    formName: "Application",
    inputMark: {
        Point: "",
        Coffee: "",
        Milk: "",
        Cups: "",
        Sugar: "",
        Data: ""
    },
    headTable: ["Naber", "Point", "Coffee", "Milk", "Cups", "Sugar", "Data"],
    data: [
        ["1", "Mart1", 1, 2, 200, 2, "12-10-2021"],
        ["2", "Mart2", 1, 2, 300, 2, "13-10-2021"],
        ["3", "GasStation1", 1, 2, 100, 2, "13-10-2021"],
        ["4", "GasStation2", 1, 2, 100, 2, "14-10-2021"],
        ["5", "Mart1", 1, 2, 100, 2, "15-10-2021"],
        ["6", "Mart2", 1, 2, 100, 2, "16-10-2021"],
        ["7", "GasStation1", 1, 2, 50, 2, "16-10-2021"],
        ["8", "GasStation2", 1, 2, 50, 2, "18-10-2021"],
        ["9", "Mart1", 1, 2, 200, 2, "01-11-2021"],
        ["10", "Mart2", 1, 2, 200, 2, "12-11-2021"],
        ["11", "GasStation1", 1, 2, 200, 2, "13-11-2021"],
        ["12", "GasStation2", 1, 2, 50, 2, "18-12-2021"],
        ["13", "Mart1", 1, 2, 200, 2, "01-01-2022"],
        ["14", "Mart2", 1, 2, 200, 2, "12-01-2022"],
        ["15", "GasStation1", 1, 2, 200, 2, "13-01-2022"]
    ]
};

const applicationsReducer = (state = initialState, action) => {

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