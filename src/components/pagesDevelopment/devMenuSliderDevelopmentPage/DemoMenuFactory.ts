import AcUnitIcon                               from '@material-ui/icons/AcUnit';
import BathtubOutlinedIcon                      from '@material-ui/icons/BathtubOutlined';
import CakeOutlinedIcon                         from '@material-ui/icons/CakeOutlined';
import ChildCareOutlinedIcon                    from '@material-ui/icons/ChildCareOutlined';
import EcoOutlinedIcon                          from '@material-ui/icons/EcoOutlined';
import EmojiFoodBeverageOutlinedIcon            from '@material-ui/icons/EmojiFoodBeverageOutlined';
import FastfoodIcon                             from '@material-ui/icons/Fastfood';
import HomeOutlinedIcon                         from '@material-ui/icons/HomeOutlined';
import KitchenOutlinedIcon                      from '@material-ui/icons/KitchenOutlined';
import MenuItemModel                            from "../../ui/menuList/MenuItemModel";
import MenuItemRootModel                        from "../../ui/menuList/MenuItemRootModel";
import PetsOutlinedIcon                         from '@material-ui/icons/PetsOutlined';
import React                                    from 'react';
import ShoppingBasketOutlinedIcon               from '@material-ui/icons/ShoppingBasketOutlined';
import SpaOutlinedIcon                          from '@material-ui/icons/SpaOutlined';
import SportsEsportsOutlinedIcon                from '@material-ui/icons/SportsEsportsOutlined';

export default class DemoMenuFactory {

    static getMenu(): MenuItemRootModel {

        const rootMenu = new MenuItemRootModel();
        rootMenu.add(new MenuItemModel('1', "Fresh Food", "", React.createElement(FastfoodIcon)));
        rootMenu.add(new MenuItemModel('2', "Chilled Food", "", React.createElement(KitchenOutlinedIcon)));
        rootMenu.add(new MenuItemModel('3', "Frozen Food", "", React.createElement(AcUnitIcon)));
        rootMenu.add(new MenuItemModel('4', "Vegan", "", React.createElement(SpaOutlinedIcon)));
        rootMenu.add(new MenuItemModel('5', "Drinks", "", React.createElement(EmojiFoodBeverageOutlinedIcon)));
        rootMenu.add(new MenuItemModel('6', "Health & Beauty", "", React.createElement(BathtubOutlinedIcon)));
        rootMenu.add(new MenuItemModel('7', "Laundry & Household", "", React.createElement(HomeOutlinedIcon)));
        rootMenu.add(new MenuItemModel('8', "Pets", "", React.createElement(PetsOutlinedIcon)));
        rootMenu.add(new MenuItemModel('9', "Entertainment", "", React.createElement(SportsEsportsOutlinedIcon)));
        rootMenu.add(new MenuItemModel('10', "Baby", "", React.createElement(ChildCareOutlinedIcon)));

        return rootMenu;
    }

    static getMenuWithChildren(): MenuItemRootModel {

        const rootMenu = new MenuItemRootModel();
        rootMenu.add( this.getFreshFoods() );
        rootMenu.add(new MenuItemModel('2', "Chilled Food", "", React.createElement(AcUnitIcon)));
        rootMenu.add(new MenuItemModel('3', "Frozen Food", "", React.createElement(AcUnitIcon)));
        rootMenu.add(new MenuItemModel('4', "Vegan", "", React.createElement(SpaOutlinedIcon)));
        rootMenu.add(new MenuItemModel('5', "Drinks", "", React.createElement(EmojiFoodBeverageOutlinedIcon)));
        rootMenu.add(new MenuItemModel('6', "Health & Beauty", "", React.createElement(BathtubOutlinedIcon)));
        rootMenu.add(new MenuItemModel('7', "Laundry & Household", "", React.createElement(HomeOutlinedIcon)));
        rootMenu.add(new MenuItemModel('8', "Pets", "", React.createElement(PetsOutlinedIcon)));
        rootMenu.add(new MenuItemModel('9', "Entertainment", "", React.createElement(SportsEsportsOutlinedIcon)));
        rootMenu.add(new MenuItemModel('10', "Baby", "", React.createElement(ChildCareOutlinedIcon)));
        return rootMenu;
    }

    private static  getFreshFoods() : MenuItemModel {
        const item = new MenuItemModel('1', "Fresh Food", "", React.createElement(ShoppingBasketOutlinedIcon));
        item.add(new MenuItemModel('1:b', "bakery", "", React.createElement(CakeOutlinedIcon)));
        item.add(new MenuItemModel('1:f', "fruit", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('1:m', "meat", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('1:s', "salad", "", React.createElement(EcoOutlinedIcon)));
        item.add(new MenuItemModel('1:v', "vegetable", "", React.createElement(ShoppingBasketOutlinedIcon)));
        return item
    }

}