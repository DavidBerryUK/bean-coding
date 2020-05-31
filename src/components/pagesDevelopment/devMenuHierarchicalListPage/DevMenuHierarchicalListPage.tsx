// import { useContext }                           from 'react';
// import CommandAddToAudit                        from '../../context/developerContext/actions/CommandAddToAudit';
// import DemoMenuFactory                          from './DemoMenuFactory';
// import DeveloperContext                         from '../../context/developerContext/DeveloperContext';
// import MenuItemModel                            from "../../ui/menuList/MenuItemModel";
import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import { useState }                             from 'react';
import clsx                                     from 'clsx';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import FormControlLabel                         from '@material-ui/core/FormControlLabel';
import MenuHierachical                          from '../../ui/menuHierachical/MenuHierachical';
import React                                    from 'react';
import Switch                                   from '@material-ui/core/Switch';


const DevMenuHierarchicalListPage: React.FC = () => {

    const classStyles = ClassStyleDefinition();

    // const dispatch = useContext(DeveloperContext).dispatch;

    const [constrainMenuState, setConstrainMenuState] = useState(true)
    const [solidBackgroundState, setSolidBackgroundState] = useState(true)

    // const handleMenuItemSelected = (menuItem: MenuItemModel) => {
    //     dispatch(new CommandAddToAudit(`Item Selected [id:${menuItem.id}] ${menuItem.name}`));
    // }

    const handleConstrainMenuChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConstrainMenuState(e.target.checked);
    }

    const handleSolidBackgroundChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSolidBackgroundState(e.target.checked);
    }

    // const rootMenu = DemoMenuFactory.getMenuWithChildren();

    return (
        <DevelopmentMasterPageWrapper
            title="Menu Hierarchical List"
            description="UI Component present a consistent menu list, an array of MenuItemModel objects are provided as a property, the menu will either auto navigate if a route is provided, or raise a onMenuItemSelected event. The menu will also automatically drill down to child menus"
            headerElement={
                <Paper>
                    <Box m={2} p={2}>
                        <FormControlLabel
                            label="Constrain Menu"
                            labelPlacement="start"
                            control={<Switch checked={constrainMenuState} onChange={handleConstrainMenuChanged} />} />
                        <FormControlLabel
                            label="Solid Background"
                            labelPlacement="start"
                            control={<Switch checked={solidBackgroundState} onChange={handleSolidBackgroundChanged} />} />
                        <Box>
                            <Typography variant="caption" color="textSecondary">Note that parameters are for demo only</Typography>
                        </Box>
                    </Box>
                </Paper>
            }
        >
            <div className={clsx({
                [classStyles.menuContainer]: true,
                [classStyles.solidBackground]: solidBackgroundState,
                [classStyles.constrainMenu]: constrainMenuState
            })}>
                <MenuHierachical/>
            </div>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevMenuHierarchicalListPage;