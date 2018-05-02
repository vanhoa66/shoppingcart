import React, { Component } from 'react';

import showMoney from './../libs/Helper'

class FooterCart extends Component {

    showFooter(totalItem, totalMoney) {
        let xhtml = null;
        if (totalItem === 0) {
            xhtml = <tr><th colSpan={6}>Empty product in your cart</th></tr>
        } else {
            xhtml = <tr>
                <td colSpan={4}>There are <b>{totalItem}</b> items in your shopping cart.</td>
                <td colSpan={2} className="total-price text-left">{showMoney(totalMoney, "$", "right")} </td>
            </tr>
        }
        return xhtml
    }

    render() {
        let totalItem = 0;
        let totalMoney = 0;
        this.props.carts.forEach(item => {
            totalItem += item.quantity;
            totalMoney += item.quantity * item.product.price;
        })
        return (
            <tfoot id="my-cart-footer">
                {this.showFooter(totalItem, totalMoney)}
            </tfoot>
        );
    }
}

export default FooterCart

