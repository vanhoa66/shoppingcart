import React, { Component } from 'react';

class Notify extends Component {

    render() {
        return (
            <div className="alert alert-success" role="alert" id="mnotification"><b>{this.props.notify}</b></div>
        );
    }
}


export default Notify
