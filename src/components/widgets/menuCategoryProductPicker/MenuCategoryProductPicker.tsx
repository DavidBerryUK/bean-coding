import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import MenuCategoryModel                        from "../../../repository/categoryRepository/models/MenuCategoryModel";
import MenuCategoryRepository                   from '../../../repository/categoryRepository/MenuCategoryRepository';
import MenuHelperForCategories                  from "../../../Services/menuHelpers/MenuHelperForCategories";
import MenuHierachicalList                      from '../../ui/menuHierachicalList/MenuHierachicalList';
import MenuItemModel                            from "../../ui/menuList/MenuItemModel";
import ProductModel                             from "../../../repository/productRepository/models/ProductModel";
import ProductRepository                        from "../../../repository/productRepository/ProductRepository";
import React                                    from 'react';

interface IProperties {
    onCategorySelected?: (category: MenuCategoryModel) => void;
    onProductSelected?: (product: ProductModel) => void;
}

const MenuCategoryProductPicker: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    const [menuCategoriesState, setMenuCategoriesState] = useState<MenuItemModel>(new MenuItemModel('root','root', 'root', ''));    

    useMemo(() => {
        // Get Menu and convert to menu items        
        const menuCategoryRepository = new MenuCategoryRepository();
        const categories = menuCategoryRepository.getAll();
        const menuCategories = MenuHelperForCategories.toMenuObjects(categories);
        setMenuCategoriesState(menuCategories);
    }, [])

    const handleMenuItemSelected = (menuItem: MenuItemModel) => {
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
                    onMenuItemSelected={(menuItem: MenuItemModel) => { handleMenuItemSelected(menuItem) }} />
            </div>           
        </>
    );
}

export default MenuCategoryProductPicker;