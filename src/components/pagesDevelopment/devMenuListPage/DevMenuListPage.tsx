import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import { useContext }                           from 'react';
import { useState }                             from 'react';
import clsx                                     from 'clsx';
import CommandAddToAudit                        from '../../context/developerContext/actions/CommandAddToAudit';
import DemoMenuFactory                          from './DemoMenuFactory';
import DeveloperContext                         from '../../context/developerContext/DeveloperContext';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import FormControlLabel                         from '@material-ui/core/FormControlLabel';
import MenuItemModel                            from "../../ui/menuList/MenuItemModel";
import MenuList                                 from '../../ui/menuList/MenuList';
import React                                    from 'react';
import Switch                                   from '@material-ui/core/Switch';

const DevMenuListPage: React.FC = () => {

    const classStyles = ClassStyleDefinition();

    const dispatch = useContext(DeveloperContext).dispatch;

    const [constrainMenuState, setConstrainMenuState] = useState(false)
    const [solidBackgroundState, setSolidBackgroundState] = useState(false)

    const rootMenu = DemoMenuFactory.getMenu();
    
    const handleMenuItemSelected = (menuItem: MenuItemModel) => {
        dispatch(new CommandAddToAudit(`Item Selected [id:${menuItem.id}] ${menuItem.name}`));
    }

    const handleConstrainMenuChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConstrainMenuState(e.target.checked);
    }

    const handleSolidBackgroundChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSolidBackgroundState(e.target.checked);
    }

    return (
        <DevelopmentMasterPageWrapper
            title="Menu List"
            description= 'UI Component present a consistent menu list, an array of MenuItemModel objects are provided as a property, the menu will either auto navigate if a route is provided, or raise a onMenuItemSelected event.'
            componentName="MenuList"
            footerElement={
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
                <MenuList rootMenuItem={rootMenu} onMenuItemSelected={(menuItem: MenuItemModel) => { handleMenuItemSelected(menuItem) }} />
            </div>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevMenuListPage;
