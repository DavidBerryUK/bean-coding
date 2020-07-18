import AppsOutlinedIcon                         from '@material-ui/icons/AppsOutlined';
import InfoOutlinedIcon                         from '@material-ui/icons/InfoOutlined';
import MenuCategoryModel                        from "../../repository/categoryRepository/models/MenuCategoryModel";
import MenuItemModel                            from "../../components/ui/menuList/MenuItemModel";
import ProductModel                             from '../../repository/productRepository/models/ProductModel';
import React                                    from 'react';

export default class MenuHelperForCategories {

    public static toMenuObjects(rootCategory: MenuCategoryModel): MenuItemModel {
        const root = this.convert(rootCategory);
        return root;
    }

    private static convert(category: MenuCategoryModel) {

        const menuCategory = new MenuItemModel(
            "category",
            category.categoryId,
            category.name,
            "",
            React.createElement(AppsOutlinedIcon));

        category.products.forEach((product: ProductModel) => {

            const menuProduct = new MenuItemModel (
                "product",
                `${product.ProductId}`,
                product.name,
                "",
                React.createElement(InfoOutlinedIcon));

            menuCategory.children.push(menuProduct);
            
        });

        category.categories.forEach((childCategory) => {

            console.log(`** adding category ${childCategory.name}`);
            menuCategory.children.push(this.convert(childCategory));

        })
        return menuCategory;
    }
}