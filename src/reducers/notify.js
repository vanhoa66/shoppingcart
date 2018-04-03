
import { ADD_NOTIFY } from './../constants/ActionTypes';

const initialState = "Ready cart"

const Notify = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTIFY:
            console.log(action);
            state = action.notify;
            return state
        default:
            return state
    }
}

export default Notify