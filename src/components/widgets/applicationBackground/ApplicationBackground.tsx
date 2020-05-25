import React                                    from 'react';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";

interface IProperties {
    imageUrl: string | undefined,
    isBlured? :boolean,
    isMuted? :boolean,
    isSaturated?: boolean,
}

const ApplicationBackground: React.FC<IProperties> = (props) => {
    
    const classStyles = ClassStyleDefinition();

    const dynamicClass = () : {} => {

        const classStyles : any = {
            backgroundImage: `url(${props.imageUrl})`,
        }   

        let filter='';

        if ( props.isBlured) 
        {
            filter = `${filter} blur(20px) `;
        }

        if ( props.isMuted) 
        {
            filter = `${filter} contrast(0.7) brightness(0.7) `;
        }

        if ( props.isSaturated) 
        {
            filter = `${filter} saturate(50%) `;
        }

        classStyles.transition = '1s filter linear, 0.25s linear';

        classStyles.filter = filter;

        return classStyles;
    }



    return (
        <div style={  dynamicClass()} className={classStyles.root}/>    
    )
}

export default ApplicationBackground
