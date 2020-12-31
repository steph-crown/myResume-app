import React, { Component } from 'react';
import './../../css/HomePage/Highlights.css';
import Box from './Box'
import highlight from './../../db/highlights';
import { ReactComponent as Misc } from "./../Svgs/miscellaneous/misc2.svg";
import { ReactComponent as Misc2 } from "./../Svgs/miscellaneous/misc3.svg";




class Highlights extends Component {
    render() {
        let highlights = highlight.map(x => <Box icon={x.icon} header={x.header} text={x.text} key={x.header} />)
        return (
            <div className="highlights">
                <Misc className="bg-svg one"/>
                <Misc2 className="bg-svg two"/>
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
