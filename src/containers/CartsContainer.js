import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CartItem from './../components/CartItem'
import CartList from './../components/CartList'
import { deleteCart, updateCart, addNotify } from './../actions'

const CartsContainer = ({ carts, notify, deleteCart, updateCart, addNotify }) => (
  <CartList carts={carts} notify={notify}>
    {carts.map((item, index) =>
      <CartItem
        key={index + "-" + item.quantity}
        index={index}
        item={item}
        onClickUpdateCart={(id, quantity) => updateCart(id, quantity)}
        onClickDeleteCart={(id) => deleteCart(id)}
        onClickNotify={(notify) => addNotify(notify)}
 
      />
    )}
  </CartList>
)

// ProductsContainer.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     desc: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     canBuy: PropTypes.bool.isRequired
//   })).isRequired,
// }

const mapStateToProps = state => ({
  carts: state.carts,
  notify: state.notify
})

export default connect(mapStateToProps, { updateCart, deleteCart, addNotify })(CartsContainer)
