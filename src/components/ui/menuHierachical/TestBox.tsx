import "./TestBox.scss";

import React                                    from 'react';

interface IProperties {
    backgroundNo : number,
    className: string,    
}

const TestBox: React.FC<IProperties> = (props) => {

    return (
        <div className={`text-box-container background-${props.backgroundNo} ${props.className}`}>
            <h3>{props.backgroundNo}</h3>
        </div>
    )
}


export default TestBox