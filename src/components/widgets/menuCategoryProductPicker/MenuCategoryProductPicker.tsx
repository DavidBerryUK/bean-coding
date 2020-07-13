import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from "@material-ui/core";
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import MenuCategoryRepository                   from '../../../repository/categoryRepository/MenuCategoryRepository';
import MenuHelperForCategories                  from "../../../Services/menuHelpers/MenuHelperForCategories";
import MenuHelperForProducts                    from "../../../Services/menuHelpers/MenuHelperForProducts";
import MenuHierachicalList                      from '../../ui/menuHierachicalList/MenuHierachicalList';
import MenuItemModel                            from "../../ui/menuList/MenuItemModel";
import MenuList                                 from "../../ui/menuList/MenuList";
import ProductRepository                        from "../../../repository/productRepository/ProductRepository";
import ProductModel                             from "../../../repository/productRepository/models/ProductModel";
import React                                    from 'react';
import MenuCategoryModel                        from "../../../repository/categoryRepository/models/MenuCategoryModel";


interface IProperties {
    onCategorySelected?: (category: MenuCategoryModel) => void;
    onProductSelected?: (product: ProductModel) => void;
}

const MenuCategoryProductPicker: React.FC<IProperties> = (props) => {

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
        const menuCategoryRepository = new MenuCategoryRepository();
        const selectedCategory = menuCategoryRepository.getCategoryById(menuItem.id);
        if (selectedCategory === null) {
            return;
        }
        const menuProducts = MenuHelperForProducts.toMenuObjects(selectedCategory!.products);
        setMenuProductsState(menuProducts);
        if (props.onCategorySelected) {
            props.onCategorySelected(selectedCategory);
        }
    }

    const handleProductMenuItemSelected = (menuItem: MenuItemModel) => {
        const productRepository = new ProductRepository();
        const selectedProduct = productRepository.getProductbyId(Number(menuItem.id));
        if (props.onProductSelected && selectedProduct !== null) {
            props.onProductSelected(selectedProduct)
        }
    }

    return (
        <>
            <div className={classStyles.menuContainer}>
                <MenuHierachicalList
                    rootMenuItem={menuCategoriesState}
                    onMenuItemSelected={(menuItem: MenuItemModel) => { handleCategoryMenuItemSelected(menuItem) }} />
            </div>
            <Paper className={classStyles.menuContainerProducts}>
                <MenuList
                    rootMenuItem={menuProductsState}
                    onMenuItemSelected={(menuItem: MenuItemModel) => { handleProductMenuItemSelected(menuItem) }} />
            </Paper>
        </>
    );
}

export default MenuCategoryProductPicker;
