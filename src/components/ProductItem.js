import React, { Component } from 'react';

import showMoney from './../libs/Helper'
import { NOTIFY_ADD,NOTIFY_VALIDATE} from './../constants/NotifyTypes'

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 1 };

    }
    checkValide(input) {
        if (input > 0 && !isNaN(input)) return 1
        return -1
    }
    handleChange = (event) => {
        this.setState({ quantity: event.target.value });
    }

    handleClick = (quantity) => {
        if (this.checkValide(quantity) === 1) {
            this.props.onClickAddCart(quantity);
            this.setState({ quantity: 1 })
            this.props.onClickAddNotify(NOTIFY_ADD);
        } else {
            this.props.onClickAddNotify(NOTIFY_VALIDATE);
        }

    }

    render() {
        const { product } = this.props;
        let { quantity } = this.state;
        return (
            <div className="media product">
                <div className="media-left">
                    <a >
                        <img className="media-object" src={`images/${product.image}`} alt={product.image} />
                    </a>
                </div>
                {this.showElementProduct(product, quantity)}
            </div>
        );
    }
    showElementProduct(product, quantity) {
        let xhmtl = null;
        if (product.canBuy) {
            xhmtl = (
                <div className="media-body">
                    <h4 className="media-heading">{product.name}</h4>
                    <p>{product.desc}</p>
                    <input name="quantity" type="number" value={quantity} onChange={this.handleChange} min={1} />
                    <a onClick={() => this.handleClick(+quantity)} data-product={1} className="price"> {showMoney(product.price, "VND", "right")} </a>
                </div>
            )
        } else {
            xhmtl = (
                <div className="media-body">
                    <h4 className="media-heading">{product.name}</h4>
                    <p>{product.desc}</p>
                    <a data-product={1} className="price"> {showMoney(product.price, "VND", "right")}  </a>
                </div>
            )
        }
        return xhmtl;
    }
}

export default ProductItem
