import React, { Component } from 'react';

import showMoney from './../libs/Helper'
import Validate from './../libs/Validate';
import { NOTIFY_UPDATE, NOTIFY_DELETE } from './../constants/NotifyTypes'

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 1 };

    }
    componentWillMount() {
        let { quantity } = this.props.item;
        this.setState({ quantity });
    }
    handleChange = (event) => {
        let { value } = event.target;
        if (Validate.checkQuantity(+value)) {
            this.setState({ quantity: value });
        }
    }
    handleUpdate = (id, quantity) => {
        this.props.onClickUpdateCart(id, quantity)
        this.props.onClickNotify(NOTIFY_UPDATE);
    }
    handleDelete = (id) => {
        this.props.onClickDeleteCart(id)
        this.props.onClickNotify(NOTIFY_DELETE);
    }

    render() {
        const { item, index } = this.props;
        let { product } = item;
        let { quantity } = this.state;
        let { price } = product;
        let total = price * quantity;
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{showMoney(price, "$", "right")}</td>
                <td><input name="quantity" type="number" value={quantity} onChange={this.handleChange} min={1} /></td>
                <td><strong>{showMoney(total, "$", "right")}</strong></td>
                <td>
                    <a onClick={() => this.handleUpdate(product.id, +quantity)} className="label label-info update-cart-item" >Update</a>
                    <a onClick={() => this.handleDelete(product.id)} className="label label-danger delete-cart-item" >Delete</a>
                </td>
            </tr>
        );
    }
}

export default CartItem

