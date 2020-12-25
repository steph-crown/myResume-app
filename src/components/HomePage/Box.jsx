import React, { Component } from 'react';
import NavBar from './NavBar'


class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverState: false
        };
    }

    render() {
        return (
            <div className="box">
                <this.props.icon fill="#2a1173"/>
                <h5>{this.props.header}</h5>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Box;
