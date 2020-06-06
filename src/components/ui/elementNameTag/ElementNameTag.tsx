import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import React                                    from 'react';

export enum EnumLabelSize {
    small = "small",
    medium = "medium",
    large = "large"
}

interface IProperties {
    name: string
    size: EnumLabelSize
}

const ElementNameTag: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    return (
        <span className={`${classStyles.label} ${props.size}`}>
             &lt;{props.name}&gt;
        </span>
    )
}

export default ElementNameTag
