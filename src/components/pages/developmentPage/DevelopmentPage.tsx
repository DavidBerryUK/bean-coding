import { Box }                                  from '@material-ui/core';
import { DeveloperContextProvider }             from '../../context/developerContext/DeveloperContext';
import { Typography }                           from '@material-ui/core';
import DevelopmentAuditLog                      from '../../widgets/developmentAuditTable/DevelopmentAuditTable';
import DevelopmentRoutes                        from '../../routes/Development/DevelopmentRoutes';
import React                                    from 'react';

const DevelopmentPage: React.FC = (props) => {    

    return (
        <Box p={3}>
            <DeveloperContextProvider>
                    <Typography variant="h4" component="h4">Component Development Page</Typography>
                    <Typography variant="body1" >This page is used to preview components under development in isolation</Typography>                    
                    <DevelopmentRoutes />                    
                <DevelopmentAuditLog />
            </DeveloperContextProvider>
        </Box>
    );
}

export default DevelopmentPage;
