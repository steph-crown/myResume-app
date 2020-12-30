import React, { Component } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Highlights from './Highlights';
import StepByStep from './StepByStep'
import Reviews from './Reviews'

class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Banner />
                <Highlights />
                <StepByStep />
                <Reviews />
            </div>
        );
    }
}

export default index;
