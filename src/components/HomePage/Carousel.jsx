import React from 'react';
import { CarouselProvider, Slider, ButtonBack, ButtonNext, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ReactComponent as Line } from "./../Svgs/Line.svg";


const Carousel = (props) => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={props.height}
            totalSlides={props.arr.length}
            step={1}
            className="carousel"
            isPlaying={true}
            interval={10000}
        >
            <Slider>
                {props.arr}
            </Slider>
                <ButtonBack className="line-button"><Line stroke=" #F2E205" className="line" strokeWidth={24} /></ButtonBack>
                <ButtonNext className="line-button"><Line stroke=" #F2E205" className="line" strokeWidth={24} /></ButtonNext>
        </CarouselProvider>
    );
}

export default Carousel;
