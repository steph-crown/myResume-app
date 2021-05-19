import React from 'react'

export default function ColorBox(props) {
    const colorList = [
        "#FD4345",
        "#F8E71C",
        "#138b23",
        "#DD2466",
        "#24DDD2",
        "#5D43FD"
    ];

    const colorJsx = colorList.map(color => (
        <div className="color" key={color} style={{backgroundColor: color}} onClick={()=>props.changeColor(color)}></div>
    ))
    return (
        <div className="color-box">
            {colorJsx}
        </div>
    )
}
