import React, { Component } from 'react';

class ProductsList extends Component {

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="card text-white bg-info mb-3" style={{ maxWidth: '48rem' }}>
                    <div className="card-header">List Products</div>
                    <div className="card-body">
                        {this.props.children}
                    </div>
                </div>
            </div >
        );
    }
}

export default ProductsList
