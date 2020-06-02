import AcUnitIcon                               from '@material-ui/icons/AcUnit';
import BathtubOutlinedIcon                      from '@material-ui/icons/BathtubOutlined';
import CakeOutlinedIcon                         from '@material-ui/icons/CakeOutlined';
import ChildCareOutlinedIcon                    from '@material-ui/icons/ChildCareOutlined';
import EcoOutlinedIcon                          from '@material-ui/icons/EcoOutlined';
import EmojiFoodBeverageOutlinedIcon            from '@material-ui/icons/EmojiFoodBeverageOutlined';
import HomeOutlinedIcon                         from '@material-ui/icons/HomeOutlined';
import MenuItemModel                            from "../../ui/menuList/MenuItemModel";
import MenuItemRootModel                        from "../../ui/menuList/MenuItemRootModel";
import PetsOutlinedIcon                         from '@material-ui/icons/PetsOutlined';
import React                                    from 'react';
import ShoppingBasketOutlinedIcon               from '@material-ui/icons/ShoppingBasketOutlined';
import SpaOutlinedIcon                          from '@material-ui/icons/SpaOutlined';
import SportsEsportsOutlinedIcon                from '@material-ui/icons/SportsEsportsOutlined';

export default class DemoMenuFactory {


    static getMenuWithChildren(): MenuItemRootModel {

        const rootMenu = new MenuItemRootModel("Supermarket");
        rootMenu.add( this.getFreshFoods() );
        rootMenu.add(this.getChilledFoods() );
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
        item.add(this.getFruit());
        item.add(new MenuItemModel('1:m', "meat", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('1:s', "salad", "", React.createElement(EcoOutlinedIcon)));
        item.add(new MenuItemModel('1:v', "vegetable", "", React.createElement(ShoppingBasketOutlinedIcon)));
        return item
    }

    private static  getFruit() : MenuItemModel {
        const item = new MenuItemModel('3', "Fruit", "", React.createElement(ShoppingBasketOutlinedIcon));
        item.add(new MenuItemModel('3:a', "Apples", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('3:pr', "Pears & Rhubarb", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('3:b', "Bananas", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('3:g', "Grapes", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('3:bc', "Berries & Cherries", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('3:o', "Oranges", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('3:l', "Lemons, Limes & Grapefruit", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('3:m', "Melon & Pineapples", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('3:mk', "Mango & Kiwi", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('3:pp', "Peaches & Plums", "", React.createElement(ShoppingBasketOutlinedIcon)));        
        return item
    }

    private static  getChilledFoods() : MenuItemModel {
        const item = new MenuItemModel('2', "Chilled Foods", "", React.createElement(ShoppingBasketOutlinedIcon));
        item.add(new MenuItemModel('2:mbce', "Milk Butter, Cream & Eggs ", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(this.getCheese());
        item.add(new MenuItemModel('2:m', "Cooked Meat", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('2:yd', "Yogerts & Desserts", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('2:j', "Chilled Juice & Smoothies", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(this.getPizzaPasta());
        item.add(new MenuItemModel('2:p', "Pizza, Pasta & Garlic Bread", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('2:pf', "Party Food, Pies, Salads & Dips", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('2:sd', "Snacks & Drinks", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('2:bq', "BBQ", "", React.createElement(ShoppingBasketOutlinedIcon)));                        
        return item
    }

    private static  getPizzaPasta() : MenuItemModel {
        const item = new MenuItemModel('6', "Pizza & Pasta", "", React.createElement(ShoppingBasketOutlinedIcon));        
        item.add(new MenuItemModel('6:fp', "Fresh Pizza", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('6:ps', "Pasta & Sauce", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('6:gb', "Garlic Bread", "", React.createElement(ShoppingBasketOutlinedIcon)));                
        return item;
    }

    private static  getCheese() : MenuItemModel {
        const item = new MenuItemModel('4', "Cheese", "", React.createElement(ShoppingBasketOutlinedIcon));
        item.add(this.getRegionalCheese());
        item.add(new MenuItemModel('4:g', "Grated & Sliced Cheese", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('4:s', "Soft & Cottage Cheese", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('4:df', "Dairy Free", "", React.createElement(ShoppingBasketOutlinedIcon)));        
        return item;
    }

    private static  getRegionalCheese() : MenuItemModel {
        const item = new MenuItemModel('5', "Regional Cheese", "", React.createElement(ShoppingBasketOutlinedIcon));
        item.add(new MenuItemModel('5:mc', "Mature Cheese", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('5:mi', "Mild & Medium Cheese", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('5:ex', "Extra Mature Cheese", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('5:v', "Vintage Cheese", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('5:r', "Red Leicester & Gloucester", "", React.createElement(ShoppingBasketOutlinedIcon)));
        item.add(new MenuItemModel('5:w', "White Regional Cheesse", "", React.createElement(ShoppingBasketOutlinedIcon)));                
        return item;
    }
}