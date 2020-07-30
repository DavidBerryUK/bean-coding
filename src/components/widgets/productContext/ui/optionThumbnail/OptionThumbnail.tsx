import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Typography }                           from '@material-ui/core';
import React                                    from 'react';

export interface IProperties {
    text: string,
    icon: React.ReactElement
}

const OptionThumbnail: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    return (
        <div className={classStyles.root}>
            <div className={classStyles.iconContainer}>
                {props.icon}
            </div>
            <Typography variant="subtitle1" color="textPrimary" className={classStyles.title}> {props.text}</Typography>
        </div>
    )
}

export default OptionThumbnail
