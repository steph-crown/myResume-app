import React, { Component } from 'react';
import Banner from './Banner';
import Highlights from './Highlights';
import StepByStep from './StepByStep';
import Reviews from './Reviews';
import Footer from './Footer'

class index extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Highlights />
                <StepByStep />
                <Reviews />
                <Footer />
            </div>
        );
    }
}

export default index;
