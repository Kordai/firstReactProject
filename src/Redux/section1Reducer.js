const SET_SEC1 = 'SET_SEC1';

let initialState = [];

const section1Reducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_SEC1:
            return [
                ...state, 
                ...action.newSec1
            ]

        default:
            return state;
    } 
}

export const setSec1 = (newSec) => {
    return { 
        type: SET_SEC1, 
        newSec1: newSec 
    }
}

export default section1Reducer;