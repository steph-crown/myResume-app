import React from 'react';
import './../../css/HomePage/StepByStep.css';
import {ReactComponent as Step1} from './../Svgs/Step1-illustration.svg';
import {ReactComponent as Step2} from './../Svgs/Step2-illustration.svg';
import {ReactComponent as Step3} from './../Svgs/Step3-illustration.svg';

const StepByStep = () => {
    return (
        <div className="step-by-step">
            <div className="tag">Step By Step</div>
            <h2>Just In 3 Ways</h2>
            <section className="steps">
                <div>
                    <div className="illustration">
                        <Step1 className="step1"/>
                    </div>
                    <div className="texts">
                        <h4>Supply your details</h4>
                        <h6>Fill the form correctly with details about you and your work experience. We provide you with examples to make sure you use best industry practices.</h6>
                    </div>
                </div>

                <div>
                    <div className="illustration">
                        <Step2 className="step2"/>
                    </div>
                    <div className="texts">
                        <h4>Choose a template</h4>
                        <h6>Make your selection from a full list of resume templates to build your amazing resume.</h6>
                    </div>
                </div>

                <div>
                    <div className="illustration">
                        <Step3 className="step3"/>
                    </div>
                    <div className="texts">
                        <h4>Download</h4>
                        <h6>And in less than 5 minutes!, you have successfully created your mind-blowing resume. You can now download it.</h6>
                    </div>
                </div>
            </section>
            <h4>Woah, This looks interesting</h4>
            <a href="#">Get Started Already</a>
        </div>
    );
}

export default StepByStep;
