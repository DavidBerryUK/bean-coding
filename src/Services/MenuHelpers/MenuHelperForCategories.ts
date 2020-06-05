import AppsOutlinedIcon                         from '@material-ui/icons/AppsOutlined';
import MenuCategoryModel                        from "../../repository/categoryRepository/models/MenuCategoryModel";
import MenuItemModel                            from "../../components/ui/menuList/MenuItemModel";
import React                                    from 'react';

export default class MenuHelperForCategories {

    public static toMenuObjects(rootCategory: MenuCategoryModel): MenuItemModel {
        const root = this.convert(rootCategory);
        return root;
    }

    private static convert(category: MenuCategoryModel) {
        const menu = new MenuItemModel(category.categoryId, category.name, "", React.createElement(AppsOutlinedIcon));

        category.categories.forEach((child) => {
            menu.children.push(this.convert(child));
        })
        return menu;
    }
}