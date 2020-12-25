import React, { Component } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Highlights from './Highlights';

class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Banner />
                <Highlights />
            </div>
        );
    }
}

export default index;
