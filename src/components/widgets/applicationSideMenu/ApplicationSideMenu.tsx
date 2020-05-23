import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Drawer }                               from '@material-ui/core';
import { EnumTopLevelRoutes }                   from "../../routes/TopLevelRouteConstants";
import { Link }                                 from '@material-ui/core';
import { Link as RouterLink }                   from 'react-router-dom';
import { List }                                 from '@material-ui/core';
import { ListItem }                             from '@material-ui/core';
import { ListItemIcon }                         from '@material-ui/core';
import { ListItemText }                         from '@material-ui/core';
import HomeOutlinedIcon                         from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon                         from '@material-ui/icons/InfoOutlined';
import MenuModel                                from "./MenuModel";
import React                                    from 'react';
import SettingsOutlinedIcon                     from '@material-ui/icons/SettingsOutlined';
import ShoppingCartOutlinedIcon                 from '@material-ui/icons/ShoppingCartOutlined';

interface IProperties {
    isOpen: boolean;
}

const ApplicationSideDrawer: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    const menuItems: Array<MenuModel> = [
        new MenuModel(1, 'Home', <HomeOutlinedIcon />, EnumTopLevelRoutes.HomePage),
        new MenuModel(2, 'Till', <ShoppingCartOutlinedIcon />, EnumTopLevelRoutes.TillPage),
        new MenuModel(3, 'System', <SettingsOutlinedIcon />, EnumTopLevelRoutes.SystemPage),
        new MenuModel(4, 'About', <InfoOutlinedIcon />, EnumTopLevelRoutes.AboutPage),
    ]

    return (
        <Drawer className={classStyles.drawer}
            variant="persistent"
            anchor="left"
            open={props.isOpen}
            classes={{
                paper: classStyles.drawerPaper,
            }}>
            
            <List>
                {menuItems.map((item) => (
                    <Link key={item.id} component={RouterLink} to={item.route} color="inherit" variant="inherit" underline="none">
                        <ListItem button>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>            
        </Drawer>
    )
}

export default ApplicationSideDrawer