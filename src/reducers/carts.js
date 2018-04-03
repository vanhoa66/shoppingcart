
import { ADD_CART, DELETE_CART, UPDATE_CART } from './../constants/ActionTypes';

let carts = JSON.parse(localStorage.getItem("carts"));
const initialState = (carts !== null) ? carts : [];

let getPosition = (carts, id) => {
    let total = carts.length;
    for (let i = 0; i < total; i++) {
        if (carts[i].product.id === id) return i;
    }
    return -1;
}

const Carts = (state = initialState, action) => {
    let { product, quantity, id } = action;
    let position = null;
    switch (action.type) {
        case ADD_CART:
            position = getPosition(state, product.id);
            if (position === -1) { //addnewItem
                state.push({ product, quantity })
            } else { //addQuanlity
                state[position].quantity += quantity;
            }
            localStorage.setItem("carts", JSON.stringify(state));
            return [...state]
        case UPDATE_CART:
            position = getPosition(state, id);
            state[position].quantity = action.quantity;
            localStorage.setItem("carts", JSON.stringify(state));
            return [...state]
        case DELETE_CART:
            state = state.filter(item => item.product.id !== id)
            localStorage.setItem("carts", JSON.stringify(state));
            return [...state]
        default:
            return state
    }
}

export default Carts