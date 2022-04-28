const SET_SEC1 = 'SET_SEC1';

let initialState = [];

const section1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEC1:
            return {
                ...state, 
                section1: [...state.section1, ...action.newSec1]
            }

        default:
            return state;
    } 
}

export const setSec1AC = (newSec1) => {
    return { type: SET_SEC1, newSec1: newSec1 }
}

export default section1Reducer;