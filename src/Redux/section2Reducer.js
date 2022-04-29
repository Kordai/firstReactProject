const SET_SEC2 = 'SET_SEC2';

let initialState = [];

const section2Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEC2:
            return [
                ...state, 
                ...action.newSec2
            ]

        default:
            return state;
    } 
}

export const setSec2AC = (newSec) => {
    return { 
        type: SET_SEC2, 
        newSec2: newSec 
    }
}

export default section2Reducer;