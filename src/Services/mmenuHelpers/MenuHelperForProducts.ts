import MenuItemModel                            from "../../components/ui/menuList/MenuItemModel";
import ProductModel                             from '../../repository/productRepository/models/ProductModel';
import RadioButtonUncheckedOutlinedIcon         from '@material-ui/icons/RadioButtonUncheckedOutlined';
import React                                    from 'react';

export default class MenuHelperForProducts {

    public static toMenuObjects(products: Array<ProductModel>): MenuItemModel {
        const root = new MenuItemModel('root','root','')

        products.forEach((product) => {
            root.children.push( new MenuItemModel(`${product.productNumber}`,product.name,'',React.createElement(RadioButtonUncheckedOutlinedIcon)));
        });

        return root;
    }    
}