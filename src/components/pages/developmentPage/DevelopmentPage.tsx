import { Box }                                  from '@material-ui/core';
import { BrowserRouter }                        from 'react-router-dom';
import { Button }                               from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { DeveloperContextProvider }             from '../../context/developerContext/DeveloperContext';
import { EnumDevelopmentRoutes }                from '../../routes/Development/DevelopmentRouteConstants';
import { Link }                                 from '@material-ui/core';
import { Link as RouterLink }                   from 'react-router-dom';
import { Typography }                           from '@material-ui/core';
import { useState }                             from 'react';
import DevelopmentAuditLog                      from '../../widgets/developmentAuditTable/DevelopmentAuditTable';
import DevelopmentRoutes                        from '../../routes/Development/DevelopmentRoutes';
import React                                    from 'react';

const DevelopmentPage: React.FC = (props) => {

    const classStyles = ClassStyleDefinition();

    const [pageState, setPageState] = useState<EnumDevelopmentRoutes>();
    const pageList = [
        { name: 'Menu List', route: EnumDevelopmentRoutes.MenuList },
        { name: 'Menu Hierarchical List', route: EnumDevelopmentRoutes.MenuhierarchicalList },
        { name: 'Menu Slider Mechanism', route: EnumDevelopmentRoutes.MenuSliderMechanism },
        { name: 'Cup Thumbnail', route: EnumDevelopmentRoutes.CupSizeThumbnail },
        { name: 'Item List', route: EnumDevelopmentRoutes.ItemList },
        { name: 'Item Qty', route: EnumDevelopmentRoutes.ItemQuantity },
        { name: 'Shot Qty', route: EnumDevelopmentRoutes.ShotCount },
        { name: 'App Background', route: EnumDevelopmentRoutes.AppBackground },
        { name: 'Frosted Glass', route: EnumDevelopmentRoutes.FrostedGlass },
        { name: 'Muted Image', route: EnumDevelopmentRoutes.Muted },
        
    ]

    const handlepress = (page: EnumDevelopmentRoutes) => {
        setPageState(page);
    }

    return (
        <Box p={3}>
            <DeveloperContextProvider>
                <BrowserRouter >
                    <Typography variant="h4" component="h4">Component Development Page</Typography>
                    <Typography variant="body1" >This page is used to preview components under development in isolation</Typography>

                    {pageList.map((item) => (
                        <Link key={item.route} component={RouterLink} to={item.route} color="inherit" variant="inherit" underline="none">
                            <Button
                                className={classStyles.linkButton}
                                color={item.route === pageState ? "primary" : "default"}
                                variant="contained"
                                onClick={() => { handlepress(item.route) }}>{item.name}</Button>
                        </Link>
                    ))}                    
                    <DevelopmentRoutes />                    
                </BrowserRouter>
                <DevelopmentAuditLog />
            </DeveloperContextProvider>
        </Box>
    );
}

export default DevelopmentPage;
