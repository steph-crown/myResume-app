import React, { Component } from 'react';
import Banner from './Banner';
import Highlights from './Highlights';
import StepByStep from './StepByStep';
import Reviews from './Reviews';
import Footer from './Footer';
import NavBar from './NavBar';

class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
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
