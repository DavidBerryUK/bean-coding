import MenuItemModel                            from "../../components/ui/menuList/MenuItemModel";
import ProductModel                             from '../../repository/productRepository/models/ProductModel';
import InfoOutlinedIcon                         from '@material-ui/icons/InfoOutlined';
import React                                    from 'react';

export default class MenuHelperForProducts {

    public static toMenuObjects(products: Array<ProductModel>): MenuItemModel {
        const root = new MenuItemModel('root','root','root','')

        products.forEach((product) => {
            root.children.push( new MenuItemModel('product',`${product.ProductId}`,product.name,'',React.createElement(InfoOutlinedIcon)));
        });

        return root;
    }    
}