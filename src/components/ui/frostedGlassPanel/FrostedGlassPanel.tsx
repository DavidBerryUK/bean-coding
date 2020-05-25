import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import React                                    from 'react';
import clsx                                     from 'clsx';


interface IProperties {
    className: string,    
}

const FrostedGlassPanel: React.FC<IProperties> = (props) => {
   
    const classStyles = ClassStyleDefinition();

    return (
        <div className={ clsx( props.className , classStyles.root )}>
            {props.children}            
        </div>
    )
}

export default FrostedGlassPanel
