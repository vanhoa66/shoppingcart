import * as types from './../constants/ActionTypes'

// export const listProduct = (product) => ({ type: LIST_PRODUCT, product })
export const addCart = (product, quantity) => ({ type: types.ADD_CART, product, quantity })
export const updateCart = (id, quantity) => ({ type: types.UPDATE_CART, id, quantity})
export const deleteCart = (id) => ({ type: types.DELETE_CART, id})
export const addNotify = (notify) => ({ type: types.ADD_NOTIFY, notify })
// export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
// export const editTodo = (item) => ({ type: types.EDIT_TODO, item })
