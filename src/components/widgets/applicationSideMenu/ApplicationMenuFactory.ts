import { EnumDevelopmentRoutes }                from '../../routes/Development/DevelopmentRouteConstants';
import { EnumTopLevelRoutes }                   from '../../routes/TopLevel/TopLevelRouteConstants';
import AddCircleOutlineIcon                     from '@material-ui/icons/AddCircleOutline';
import AppsOutlinedIcon                         from '@material-ui/icons/AppsOutlined';
import BuildOutlinedIcon                        from '@material-ui/icons/BuildOutlined';
import CropOriginalOutlinedIcon                 from '@material-ui/icons/CropOriginalOutlined';
import HomeOutlinedIcon                         from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon                         from '@material-ui/icons/InfoOutlined';
import ListAltIcon                              from '@material-ui/icons/ListAlt';
import MenuIcon                                 from '@material-ui/icons/Menu';
import MenuItemModel                            from '../../ui/menuList/MenuItemModel';
import MenuItemRootModel                        from '../../ui/menuList/MenuItemRootModel';
import React                                    from 'react';
import SettingsOutlinedIcon                     from '@material-ui/icons/SettingsOutlined';
import ShoppingCartOutlinedIcon                 from '@material-ui/icons/ShoppingCartOutlined';
import WallpaperIcon                            from '@material-ui/icons/Wallpaper';

export default class ApplicationMenuFactory {

    static getApplicationMenu(): MenuItemRootModel {

        const rootMenu = new MenuItemRootModel("Application");
        rootMenu.add(new MenuItemModel('test', '1', "Home", EnumTopLevelRoutes.HomePage, React.createElement(HomeOutlinedIcon)));
        rootMenu.add(new MenuItemModel('test', '2', "Till", EnumTopLevelRoutes.TillPage, React.createElement(ShoppingCartOutlinedIcon)));
        rootMenu.add(new MenuItemModel('test', '3', "System", EnumTopLevelRoutes.SystemPage, React.createElement(SettingsOutlinedIcon)));
        rootMenu.add(this.getDevelopmentMenu());
        rootMenu.add(new MenuItemModel('test', '5', "About", EnumTopLevelRoutes.AboutPage, React.createElement(InfoOutlinedIcon)));
        return rootMenu;
    }

    private static getDevelopmentMenu(): MenuItemModel {

        var item = new MenuItemModel('test', '4', "Development", "", React.createElement(BuildOutlinedIcon));
        item.add(new MenuItemModel('test', '4:1', "Menu List", EnumDevelopmentRoutes.MenuList, React.createElement(MenuIcon)));
        item.add(new MenuItemModel('test', '4:2', "Menu Hierachical List", EnumDevelopmentRoutes.MenuhierarchicalList, React.createElement(MenuIcon)));
        item.add(new MenuItemModel('test', '4:11', "Menu Category Product Picker", EnumDevelopmentRoutes.MenuCategoryMenuPicker, React.createElement(AppsOutlinedIcon)));
        item.add(new MenuItemModel('test', '4:12', "Menu Slider", EnumDevelopmentRoutes.MenuSliderMechanism, React.createElement(BuildOutlinedIcon)));
        item.add(new MenuItemModel('test', '4:13', "Product Info", EnumDevelopmentRoutes.ProductInfo, React.createElement(InfoOutlinedIcon)));
        item.add(this.getProductOptionsMenu());
        item.add(new MenuItemModel('test', '4:4', "Cup Thumbnail", EnumDevelopmentRoutes.CupSizeThumbnail, React.createElement(CropOriginalOutlinedIcon)));
        item.add(new MenuItemModel('test', '4:5', "Item List", EnumDevelopmentRoutes.ItemList, React.createElement(ListAltIcon)));
        item.add(new MenuItemModel('test', '4:6', "Item Quantity", EnumDevelopmentRoutes.ItemQuantity, React.createElement(AddCircleOutlineIcon)));
        item.add(new MenuItemModel('test', '4:7', "Shot Quantity", EnumDevelopmentRoutes.ShotCount, React.createElement(AddCircleOutlineIcon)));
        item.add(new MenuItemModel('test', '4:8', "App Background", EnumDevelopmentRoutes.AppBackground, React.createElement(WallpaperIcon)));
        item.add(new MenuItemModel('test', '4:9', "Frosted Glass", EnumDevelopmentRoutes.FrostedGlass, React.createElement(WallpaperIcon)));
        item.add(new MenuItemModel('test', '4:10', "Muted Images", EnumDevelopmentRoutes.Muted, React.createElement(WallpaperIcon)));
        return item;
    }

    private static getProductOptionsMenu(): MenuItemModel {
        var item = new MenuItemModel('test', '5', "Product Options", "", React.createElement(BuildOutlinedIcon));

        item.add(new MenuItemModel('test', '5:01', 'AddIn', EnumDevelopmentRoutes.OptionAddIn, React.createElement(InfoOutlinedIcon)));
        item.add(new MenuItemModel('test', '5:02', 'Blended', EnumDevelopmentRoutes.OptionBlended, React.createElement(InfoOutlinedIcon)));
        item.add(new MenuItemModel('test', '5:03', 'ButterAndSpreads', EnumDevelopmentRoutes.OptionButterAndSpreads, React.createElement(InfoOutlinedIcon)));
        item.add(new MenuItemModel('test', '5:04', 'DiaryAlternatives', EnumDevelopmentRoutes.OptionDiaryAlternatives, React.createElement(InfoOutlinedIcon)));
        item.add(new MenuItemModel('test', '5:05', 'Flavours', EnumDevelopmentRoutes.OptionFlavours, React.createElement(InfoOutlinedIcon)));
        item.add(new MenuItemModel('test', '5:06', 'Sandwich', EnumDevelopmentRoutes.OptionSandwich, React.createElement(InfoOutlinedIcon)));
        item.add(new MenuItemModel('test', '5:07', 'Shots', EnumDevelopmentRoutes.OptionShots, React.createElement(InfoOutlinedIcon)));
        item.add(new MenuItemModel('test', '5:08', 'Tea', EnumDevelopmentRoutes.OptionTea, React.createElement(InfoOutlinedIcon)));
        item.add(new MenuItemModel('test', '5:09', 'Toppings', EnumDevelopmentRoutes.OptionToppings, React.createElement(InfoOutlinedIcon)));
        item.add(new MenuItemModel('test', '5:10', 'Warming', EnumDevelopmentRoutes.OptionWarming, React.createElement(InfoOutlinedIcon)));

        return item;
    }
}