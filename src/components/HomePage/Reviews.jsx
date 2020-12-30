import React, {Component} from 'react';
import './../../css/HomePage/Reviews.css'
import { ReactComponent as Line } from "./../Svgs/Line.svg";
import ReviewBox from './ReviewBox';

import reviews from './../../db/reviews';
import chunkArray from './../../utilities/chunkArray'

// Carousel Component
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Reviews extends Component {
    // Different carousel grouping for different screen sizes
    // >1024
    reviewL = chunkArray(reviews, 3).map((arr, index) => {
        return (<Slide className="diva" index={index}>
            {arr.map(x => <ReviewBox prop={x} />)}
        </Slide>)
    })

    // >600 && <1024
    reviewMed = chunkArray(reviews, 2).map((arr, index) => {
        return (<Slide className="diva-after" index={index}>
                {arr.map(x => <ReviewBox prop={x} />)}
        </Slide>)
    })

    // <600s
    reviewSm = chunkArray(reviews, 1).map((arr, index) => {
        return (<Slide className="diva" index={index}>
            {arr.map(x => <ReviewBox prop={x} />)}
        </Slide>)
    })

    render () {
        return (
            <div className="reviews-section">
                <div className="tag">Reviews</div>
                <h2>What Our Users Say</h2>
                <section className="reviews">
                    
                    <div className="writings">
                        <div className="large">
                            <CarouselProvider
                                naturalSlideWidth={100}
                                naturalSlideHeight={40}
                                totalSlides={this.reviewL.length}
                                step={1}
                                className="carousel"
                             >
                                <Slider>
                                    {this.reviewL}
                                </Slider>
                                 <ButtonBack className="line-button"><Line stroke="#F28B0C" className="line" strokeWidth={24} /></ButtonBack>
                                <ButtonNext className="line-button"><Line stroke="#aaaB0C" className="line" strokeWidth={24} /></ButtonNext>
                             </CarouselProvider>
                            
                        </div>
                        <div className="med">
                            {/* {reviewMed} */}
                        </div>
                        <div className="small">
                            {/* {reviewSm} */}
                        </div>
                        
                    </div>
                </section>
            </div>
    
        );
    }
    
}

export default Reviews;
