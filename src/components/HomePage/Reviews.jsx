import React, {Component} from 'react';
import './../../css/HomePage/Reviews.css'
import ReviewBox from './ReviewBox';

import reviews from './../../db/reviews';
import chunkArray from './../../utilities/chunkArray'

// Carousel Component
import Carousel from './Carousel'
import { Slide } from "pure-react-carousel";

import {ReactComponent as Misc5} from './../Svgs/miscellaneous/misc4.svg';
import {ReactComponent as Misc6} from './../Svgs/miscellaneous/misc6.svg';



class Reviews extends Component {
    // Different carousel grouping for different screen sizes
    // >1024
    reviewL = chunkArray(reviews, 3).map((arr, index) => {
        return (<Slide className="diva" index={index} key={index.toString()}>
            {arr.map(x => <ReviewBox prop={x} />)}
        </Slide>)
    })

    // >600 && <1024
    reviewMed = chunkArray(reviews, 2).map((arr, index) => {
        return (<Slide className="diva-after" index={index} key={index.toString()}>
                {arr.map(x => <ReviewBox prop={x} />)}
        </Slide>)
    })

    // <600s
    reviewSm = chunkArray(reviews, 1).map((arr, index) => {
        return (<Slide className="diva" index={index} key={index.toString()}>
            {arr.map(x => <ReviewBox prop={x} />)}
        </Slide>)
    })

    render () {
        return (
            <div className="reviews-section">
                <Misc5 className="bg-svg five" />
                <Misc6 className="bg-svg six" />
                <Misc6 className="bg-svg seven" />
                <div className="tag">Reviews</div>
                <h2>What Our Users Say</h2>
                <section className="reviews">
                    
                    <div className="writings">
                        <div className="large">
                            <Carousel arr={this.reviewL} height={40} />
                        </div>
                        <div className="med">
                        <Carousel arr={this.reviewMed} height={65} />
                        </div>
                        <div className="small">
                        <Carousel arr={this.reviewSm} height={80} />
                        </div>
                        
                        <div className="smallest">
                        <Carousel arr={this.reviewSm} height={150} />
                        </div>
                    </div>
                </section>
            </div>
    
        );
    }
    
}

export default Reviews;
