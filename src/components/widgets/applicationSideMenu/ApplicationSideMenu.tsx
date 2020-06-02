import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Drawer }                               from '@material-ui/core';
import ApplicationMenuFactory                   from "./ApplicationMenuFactory";
import MenuHierachicalList                      from "../../ui/menuHierachicalList/MenuHierachicalList";
import React                                    from 'react';

interface IProperties {
    isOpen: boolean;
}

const ApplicationSideDrawer: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    const menu = ApplicationMenuFactory.getApplicationMenu();

    return (
        <Drawer className={classStyles.drawer}
            variant="persistent"
            anchor="left"
            open={props.isOpen}
            classes={{
                paper: classStyles.drawerPaper,
            }}>
            
            <MenuHierachicalList rootMenuItem = {menu}/>

        </Drawer>
    )
}

export default ApplicationSideDrawer