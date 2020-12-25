import React, { Component } from 'react';
import './../../css/HomePage/Highlights.css';
import Box from './Box'
import { ReactComponent as Smart} from '../Svgs/Smart.svg';
import { ReactComponent as Download} from '../Svgs/Download.svg';
import { ReactComponent as Free} from '../Svgs/Free.svg';
import { ReactComponent as Padlock} from '../Svgs/Padlock.svg';
import { ReactComponent as Profile} from '../Svgs/Profile.svg';
import { ReactComponent as Template} from '../Svgs/Template.svg';



let highlights = [
    {
        icon: Smart,
        header: 'Smart',
        text: 'This tool saves you time and guides you to creating the best version of your resume.'
    },
    {
        icon: Padlock,
        header: 'Privacy Friendly',
        text: 'We don’t store any of your data except you want to save progress.'
    },
    {
        icon: Free,
        header: '100% Free',
        text: 'Use every feature for free without any hidden charge or limitations.'
    },
    {
        icon: Template,
        header: 'Multiple Templates',
        text: 'There are multiple resume and cover letter templates for you to choose from.'
    },
    {
        icon: Profile,
        header: 'Multiple Profiles',
        text: 'You can save your progress and create multiple profiles with different resumes.'
    },
    {
        icon: Download,
        header: 'Save Downloads',
        text: 'After downloading your resume, you can save it for future downloads'
    },
    
]



class Highlights extends Component {
    render() {
        highlights = highlights.map(x => <Box icon={x.icon} header={x.header} text={x.text} key={x.header} />)
        return (
            <div className="highlights">
                <div className="tag">Highlights</div>
                <h2>Features You Love</h2>
                <section className="box-container">
                    {highlights}
                </section>
            </div>
        );
    }
}

export default Highlights;
