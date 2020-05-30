import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import { useContext }                           from 'react';
import { useState }                             from 'react';
import AcUnitIcon                               from '@material-ui/icons/AcUnit';
import BathtubOutlinedIcon                      from '@material-ui/icons/BathtubOutlined';
import ChildCareOutlinedIcon                    from '@material-ui/icons/ChildCareOutlined';
import clsx                                     from 'clsx';
import CommandAddToAudit                        from '../../context/developerContext/actions/CommandAddToAudit';
import DeveloperContext                         from '../../context/developerContext/DeveloperContext';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import EmojiFoodBeverageOutlinedIcon            from '@material-ui/icons/EmojiFoodBeverageOutlined';
import FastfoodIcon                             from '@material-ui/icons/Fastfood';
import FormControlLabel                         from '@material-ui/core/FormControlLabel';
import HomeOutlinedIcon                         from '@material-ui/icons/HomeOutlined';
import MenuItemModel                            from "../../ui/menuList/MenuItemModel";
import MenuItemRootModel                        from "../../ui/menuList/MenuItemRootModel";
import MenuList                                 from '../../ui/menuList/MenuList';
import PetsOutlinedIcon                         from '@material-ui/icons/PetsOutlined';
import React                                    from 'react';
import SpaOutlinedIcon                          from '@material-ui/icons/SpaOutlined';
import SportsEsportsOutlinedIcon                from '@material-ui/icons/SportsEsportsOutlined';
import Switch                                   from '@material-ui/core/Switch';

const DevMenuListPage: React.FC = () => {

    const classStyles = ClassStyleDefinition();

    const dispatch = useContext(DeveloperContext).dispatch;

    const [constrainMenuState, setConstrainMenuState] = useState(false)
    const [solidBackgroundState, setSolidBackgroundState] = useState(false)

    const rootMenu = new MenuItemRootModel();
    rootMenu.add(new MenuItemModel('1', "Fresh Food", "", <FastfoodIcon />));
    rootMenu.add(new MenuItemModel('2', "Chilled Food", "", <AcUnitIcon />));
    rootMenu.add(new MenuItemModel('3', "Frozen Food", "", <AcUnitIcon />));
    rootMenu.add(new MenuItemModel('4', "Vegan", "", <SpaOutlinedIcon />));
    rootMenu.add(new MenuItemModel('5', "Drinks", "", <EmojiFoodBeverageOutlinedIcon />));
    rootMenu.add(new MenuItemModel('6', "Health & Beauty", "", <BathtubOutlinedIcon />));
    rootMenu.add(new MenuItemModel('7', "Laundry & Household", "", <HomeOutlinedIcon />));
    rootMenu.add(new MenuItemModel('8', "Pets", "", <PetsOutlinedIcon />));
    rootMenu.add(new MenuItemModel('9', "Entertainment", "", <SportsEsportsOutlinedIcon />));
    rootMenu.add(new MenuItemModel('10', "Baby", "", <ChildCareOutlinedIcon />));

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
                <MenuList rootMenuItem={rootMenu} onMenuItemSelected={(menuItem: MenuItemModel) => { handleMenuItemSelected(menuItem) }} />
            </div>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevMenuListPage;
