import React, { Component } from 'react';

import Notify from './Notify';
import FooterCart from './FooterCart';

class CartList extends Component {

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div className="card text-white bg-info mb-3" style={{ maxWidth: '48rem' }}>
                    <div className="card-header">List Products</div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th width="4%">#</th>
                                    <th>Pokemon</th>
                                    <th width="16%">Price</th>
                                    <th width="3%">Quantity</th>
                                    <th width="20%">Subtotal</th>
                                    <th width="25%">Action</th>
                                </tr>
                            </thead>
                            <tbody id="my-cart-body">
                              {this.props.children}
                            </tbody>
                            <FooterCart carts={this.props.carts}/>
                        </table>
                    </div>
                </div>
                <Notify notify={this.props.notify} />
            </div >
        );
    }
}



export default CartList
