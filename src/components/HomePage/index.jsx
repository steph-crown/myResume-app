import React, { Component } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Highlights from './Highlights';
import StepByStep from './StepByStep'

class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Banner />
                <Highlights />
                <StepByStep />
            </div>
        );
    }
}

export default index;
