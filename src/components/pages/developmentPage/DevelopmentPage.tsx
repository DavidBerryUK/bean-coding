import { Box }                                  from '@material-ui/core';
import { BrowserRouter }                        from 'react-router-dom';
import { Button }                               from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { EnumDevelopmentRoutes }                from '../../routes/Development/DevelopmentRouteConstants';
import { Link }                                 from '@material-ui/core';
import { Link as RouterLink }                   from 'react-router-dom';
import { Typography }                           from '@material-ui/core';
import { useState }                             from 'react';
import DevelopmentRoutes                        from '../../routes/Development/DevelopmentRoutes';
import React                                    from 'react';

const DevelopmentPage: React.FC = (props) => {

    const classStyles = ClassStyleDefinition();

    const [pageState, setPageState] = useState<EnumDevelopmentRoutes>();
    const pageList = [        
        { name: 'Cup Thumbnail', route: EnumDevelopmentRoutes.DevelopmentCupSizeThumbnail },                
        { name: 'Item List', route: EnumDevelopmentRoutes.DevelopmentItemList },
        { name: 'Item Qty', route: EnumDevelopmentRoutes.DevelopmentItemQuantity },        
        { name: 'App Background', route: EnumDevelopmentRoutes.DevelopmentAppBackground },
        { name: 'Frosted Glass', route: EnumDevelopmentRoutes.DevelopmentFrostedGlass },
        { name: 'Muted Image', route: EnumDevelopmentRoutes.DevelopmentMuted },
    ]

    const handlepress = (page: EnumDevelopmentRoutes) => {
        setPageState(page);
    }

    return (
        <Box p={3}>
            <BrowserRouter >
                <Typography variant="h4" component="h4">Component Development Page</Typography>
                <Typography variant="body1" >This page is used to preview components under development in isolation</Typography>

                {pageList.map((item) => (
                    <Link key={item.route} component={RouterLink} to={item.route} color="inherit" variant="inherit" underline="none">
                        <Button
                        className = {classStyles.linkButton}
                            color={item.route === pageState ? "primary" : "default"}
                            variant="contained"
                            onClick={() => { handlepress(item.route) }}>{item.name}</Button>
                    </Link>
                ))}

                <Box pt={3}>
                    <DevelopmentRoutes />
                </Box>
            </BrowserRouter>

        </Box>
    );
}

export default DevelopmentPage;
