import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import MenuCategoryRepository                   from '../../../repository/categoryRepository/MenuCategoryRepository';
import MenuHelperForCategories                  from "../../../Services/MenuHelpers/MenuHelperForCategories";
import MenuHierachicalList                      from '../../ui/menuHierachicalList/MenuHierachicalList';
import MenuItemModel                            from "../../ui/menuList/MenuItemModel";
import React                                    from 'react';
import MenuHelperForProducts                    from "../../../Services/MenuHelpers/MenuHelperForProducts";
import MenuList                                 from "../../ui/menuList/MenuList";


const DevMenuCategoriesPage: React.FC = () => {

    const classStyles = ClassStyleDefinition();

    const [menuCategoriesState, setMenuCategoriesState] = useState<MenuItemModel>(new MenuItemModel('root', 'root', ''));
    const [menuProductsState, setMenuProductsState] = useState<MenuItemModel>(new MenuItemModel('root', 'root', ''));

    useMemo(() => {
        // Get Menu and convert to menu items        
        const menuCategoryRepository = new MenuCategoryRepository();
        const categories = menuCategoryRepository.getAll();
        const menuCategories = MenuHelperForCategories.toMenuObjects(categories);
        setMenuCategoriesState(menuCategories);
    }, [])

    const handleCategoryMenuItemSelected = (menuItem: MenuItemModel) => {
        // get category for given code
        // get products in category
        // convert products to menu items
        // display menu
        const menuCategoryRepository = new MenuCategoryRepository();
        const selectedCategory = menuCategoryRepository.getCategoryById(menuItem.id);
        const menuProducts = MenuHelperForProducts.toMenuObjects(selectedCategory!.products);
        setMenuProductsState(menuProducts);

    }

    return (
        <DevelopmentMasterPageWrapper
            title="Show Menu Categories"
            description='Show Menu Categories in a drill down menu, created to facilitate testing of other components'
            componentName="<????/>">
            <div className={classStyles.menuContainer}>
                <MenuHierachicalList rootMenuItem={menuCategoriesState} onMenuItemSelected={(menuItem: MenuItemModel) => { handleCategoryMenuItemSelected(menuItem) }} />
            </div>
            <div className={classStyles.menuContainer}>
                <MenuList rootMenuItem={menuProductsState} />
            </div>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevMenuCategoriesPage;
