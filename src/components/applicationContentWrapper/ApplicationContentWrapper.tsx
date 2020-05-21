import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import React                                    from 'react';

interface IProperties {
    isOpen: boolean;
}

const ApplicationContentWrapper: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    return (
        <Box className={props.isOpen ? classStyles.contentDrawOpen : classStyles.contentDrawClosed} mt={8} width={1}>    
            {props.children}
        </Box>
    )
}

export default ApplicationContentWrapper
