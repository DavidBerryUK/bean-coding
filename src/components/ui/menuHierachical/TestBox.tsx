import "./TestBox.scss";

import React                                    from 'react';

interface IProperties {
    backgroundNo : number,
    className: string,    
}

const TestBox: React.FC<IProperties> = (props) => {

    return (
        <div className={`text-box-container background-${props.backgroundNo} ${props.className}`}>
            <div className='number-container'>
                <div className='number'>{props.backgroundNo}</div>
            </div>
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
                <li>four</li>
                <li>five</li>
                <li>six</li>
                <li>seven</li>
                <li>eight</li>
                <li>nine</li>
                <li>ten</li>
                <li>eleven</li>
                <li>twelve</li>
                <li>thirteen</li>
                <li>fourteen</li>
                <li>fifteen</li>
                <li>sixteen</li>
                <li>seventeen</li>
                <li>eighteen</li>
                <li>nineteen</li>
                <li>twenty</li>
            </ul>
        </div>
    )
}


export default TestBox