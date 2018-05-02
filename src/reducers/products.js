
// import { LIST_PRODUCT } from './../constants/ActionTypes';

const initialState = [
    {
        id: "aplusautomation",
        name: "aplusautomation",
        image: "aplusautomation.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing eliti!",
        price: 12,
        canBuy: true
    },
    {
        id: "aplus-media",
        name: "aplus-media",
        image: "aplus-media.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing eliti!",
        price: 24,
        canBuy: true
    },
    {
        id: "target-leap-frog",
        name: "target-leap-frog",
        image: "target-leap-frog.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing eliti!",
        price: 26,
        canBuy: true
    },
    {
        id: "robo_fig_combo",
        name: "robo_fig_combo",
        image: "robo_fig_combo.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing eliti!",
        price: 48,
        canBuy: false
    }
];

const Product = (state = initialState, action) => {
    switch (action.type) {
    //     case LIST_PRODUCT:
    //         return [...state]

        default:
            return state
    }
}

export default Product