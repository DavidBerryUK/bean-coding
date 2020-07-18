import AcUnitIcon                               from '@material-ui/icons/AcUnit';
import BathtubOutlinedIcon                      from '@material-ui/icons/BathtubOutlined';
import ChildCareOutlinedIcon                    from '@material-ui/icons/ChildCareOutlined';
import EmojiFoodBeverageOutlinedIcon            from '@material-ui/icons/EmojiFoodBeverageOutlined';
import FastfoodIcon                             from '@material-ui/icons/Fastfood';
import HomeOutlinedIcon                         from '@material-ui/icons/HomeOutlined';
import KitchenOutlinedIcon                      from '@material-ui/icons/KitchenOutlined';
import MenuItemModel                            from "../../ui/menuList/MenuItemModel";
import MenuItemRootModel                        from "../../ui/menuList/MenuItemRootModel";
import PetsOutlinedIcon                         from '@material-ui/icons/PetsOutlined';
import React                                    from 'react';
import SpaOutlinedIcon                          from '@material-ui/icons/SpaOutlined';
import SportsEsportsOutlinedIcon                from '@material-ui/icons/SportsEsportsOutlined';

export default class DemoMenuFactory {

    static getMenu(): MenuItemRootModel {

        const rootMenu = new MenuItemRootModel("Supermarket");
        rootMenu.add(new MenuItemModel('category','1', "Fresh Food", "", React.createElement(FastfoodIcon)));
        rootMenu.add(new MenuItemModel('category','2', "Chilled Food", "", React.createElement(KitchenOutlinedIcon)));
        rootMenu.add(new MenuItemModel('category','3', "Frozen Food", "", React.createElement(AcUnitIcon)));
        rootMenu.add(new MenuItemModel('category','4', "Vegan", "", React.createElement(SpaOutlinedIcon)));
        rootMenu.add(new MenuItemModel('category','5', "Drinks", "", React.createElement(EmojiFoodBeverageOutlinedIcon)));
        rootMenu.add(new MenuItemModel('category','6', "Health & Beauty", "", React.createElement(BathtubOutlinedIcon)));
        rootMenu.add(new MenuItemModel('category','7', "Laundry & Household", "", React.createElement(HomeOutlinedIcon)));
        rootMenu.add(new MenuItemModel('category','8', "Pets", "", React.createElement(PetsOutlinedIcon)));
        rootMenu.add(new MenuItemModel('category','9', "Entertainment", "", React.createElement(SportsEsportsOutlinedIcon)));
        rootMenu.add(new MenuItemModel('category','10', "Baby", "", React.createElement(ChildCareOutlinedIcon)));

        return rootMenu;
    }
}