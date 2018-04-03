import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ProductItem from './../components/ProductItem'
import ProductsList from './../components/ProductsList'
import { addCart, addNotify } from './../actions'

const ProductsContainer = ({ products, addCart, addNotify }) => (
  <ProductsList >
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onClickAddCart={(quantity) => addCart(product, quantity)}
        onClickAddNotify={(notify) => addNotify(notify)}
      />
    )}
  </ProductsList>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    canBuy: PropTypes.bool.isRequired
  })).isRequired,
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps, { addCart, addNotify })(ProductsContainer)
