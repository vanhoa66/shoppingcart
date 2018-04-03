import React, { Component } from 'react';

import showMoney from './../libs/Helper'
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
        this.setState({ quantity: event.target.value });
    }
    handleUpdate = (id, quantity) => {
        this.props.onClickUpdateCart(id, quantity)
        this.props.onClickNotify(NOTIFY_UPDATE);
    }
    handleDelete = (id) => {
        this.props.onClickDeleteCart(id)
        this.props.onClickNotify(NOTIFY_DELETE);
    }

    // showInfo(info, loai, kieu){
    //     if(kieu==="right")
    //     return info + ' ' + loai;
    //     return loai + ' ' + info
    // }

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
                <td>{showMoney(price, "VND", "right")}</td>
                <td><input name="quantity" type="number" value={quantity} onChange={this.handleChange} min={1} /></td>
                    <td><strong>{showMoney(total, "VND", "right")}</strong></td>
                    <td>
                        <a onClick={() => this.handleUpdate(product.id, +quantity)} className="label btn-primary update-cart-item" data-product>Update</a>
                        <a onClick={() => this.handleDelete(product.id)} className="label btn-danger delete-cart-item" data-product>Delete</a>
                    </td>
            </tr>
                );
            }
        }
        
        export default CartItem
        
