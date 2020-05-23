import { Box }                                  from '@material-ui/core';
import React                                    from 'react';
import './Styles.scss';

interface IProperties {
    isOpen: boolean;
}

const ApplicationContentWrapper: React.FC<IProperties> = (props) => {

    const containerStyle = () => {
        return `application-container ${props.isOpen ? ' draw-open' : 'draw-closed'}`;
    }

    return (
        <Box className={containerStyle()} >    
            {props.children}
        </Box>
    )
}

export default ApplicationContentWrapper
