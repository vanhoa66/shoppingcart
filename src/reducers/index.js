import { combineReducers } from 'redux'

import products from './products'
import carts from './carts'
import notify from './notify'

const rootReducer = combineReducers({
    products,
    carts,
    notify
})

export default rootReducer