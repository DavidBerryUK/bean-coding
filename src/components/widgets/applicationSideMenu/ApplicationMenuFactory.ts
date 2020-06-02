import { EnumDevelopmentRoutes }                from '../../routes/Development/DevelopmentRouteConstants';
import { EnumTopLevelRoutes }                   from '../../routes/TopLevel/TopLevelRouteConstants';
import AddCircleOutlineIcon                     from '@material-ui/icons/AddCircleOutline';
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
        rootMenu.add(new MenuItemModel('1', "Home", EnumTopLevelRoutes.HomePage, React.createElement(HomeOutlinedIcon)));
        rootMenu.add(new MenuItemModel('2', "Till", EnumTopLevelRoutes.TillPage, React.createElement(ShoppingCartOutlinedIcon)));
        rootMenu.add(new MenuItemModel('3', "System", EnumTopLevelRoutes.SystemPage, React.createElement(SettingsOutlinedIcon)));
        rootMenu.add(this.getDevelopmentMenu());
        rootMenu.add(new MenuItemModel('5', "About", EnumTopLevelRoutes.AboutPage, React.createElement(InfoOutlinedIcon)));        
        return rootMenu;
    }

    private static getDevelopmentMenu() : MenuItemModel {

        var item =  new MenuItemModel('4', "Development", "", React.createElement(BuildOutlinedIcon));
        item.add(new MenuItemModel('4:1', "Menu List", EnumDevelopmentRoutes.MenuList, React.createElement(MenuIcon)));
        item.add(new MenuItemModel('4:2', "Menu Hierachical List", EnumDevelopmentRoutes.MenuhierarchicalList, React.createElement(MenuIcon)));
        item.add(new MenuItemModel('4:3', "Menu Slider", EnumDevelopmentRoutes.MenuSliderMechanism, React.createElement(BuildOutlinedIcon)));
        item.add(new MenuItemModel('4:4', "Cup Thumbnail", EnumDevelopmentRoutes.CupSizeThumbnail, React.createElement(CropOriginalOutlinedIcon)));
        item.add(new MenuItemModel('4:5', "Item List", EnumDevelopmentRoutes.ItemList, React.createElement(ListAltIcon)));
        item.add(new MenuItemModel('4:6', "Item Quantity", EnumDevelopmentRoutes.ItemQuantity, React.createElement(AddCircleOutlineIcon)));
        item.add(new MenuItemModel('4:7', "Shot Quantity", EnumDevelopmentRoutes.ShotCount, React.createElement(AddCircleOutlineIcon)));
        item.add(new MenuItemModel('4:8', "App Background", EnumDevelopmentRoutes.AppBackground, React.createElement(WallpaperIcon)));
        item.add(new MenuItemModel('4:9', "Frosted Glass", EnumDevelopmentRoutes.FrostedGlass, React.createElement(WallpaperIcon)));
        item.add(new MenuItemModel('4:10', "Muted Images", EnumDevelopmentRoutes.Muted, React.createElement(WallpaperIcon)));
        return item;
    }
}