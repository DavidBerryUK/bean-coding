import { Box }                                  from '@material-ui/core';
import { DeveloperContextProvider }             from '../../context/developerContext/DeveloperContext';
import DevelopmentAuditLog                      from '../../widgets/developmentAuditTable/DevelopmentAuditTable';
import DevelopmentRoutes                        from '../../routes/Development/DevelopmentRoutes';
import React                                    from 'react';

const DevelopmentPage: React.FC = (props) => {    

    return (
        <Box p={3}>
            <DeveloperContextProvider>
                <DevelopmentRoutes />                    
                <DevelopmentAuditLog />
            </DeveloperContextProvider>
        </Box>
    );
}

export default DevelopmentPage;
