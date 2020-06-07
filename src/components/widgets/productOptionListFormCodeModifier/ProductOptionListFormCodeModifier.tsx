import { Box, Typography }                                  from '@material-ui/core';
import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';
import React                                    from 'react';
import ProductOptionsList from '../productOptionsList/ProductOptionsList';
import ProductOptionSizeList from '../productOptionSizeList/ProductOptionSizeList';

interface IProperties {
    product: ProductModel,
    option: ProductOptionModel,
}

const ProductOptionListFormCodeModifier: React.FC<IProperties> = (props) => {    

    return (
        <Box color="purple" border={8} borderRadius={8}>
            <ElementNameTag size={EnumLabelSize.medium} name="ProductOptionListFormCodeModifier" />
            <Typography variant="h4">{props.option.name}</Typography>
            {/* <table>
                <tbody>
                    <tr>
                        <td>Name</td><td>{props.option.name}</td>
                    </tr>
                    <tr>
                        <td>Form Code</td><td>{props.option.formCode}</td>
                    </tr>
                    <tr>
                        <td>sizes</td><td>{props.option.sizes.length}</td>
                    </tr>
                    <tr>
                        <td>options</td><td>{props.option.children.length}</td>
                    </tr>
                    <tr>
                        <td>Products</td><td>{props.option.products.length}</td>
                    </tr>
                </tbody>
            </table>             */}

            {props.option.products.length > 0 &&  <ProductOptionsList product={props.product} options={props.option.products}/>}
            {props.option.sizes.length > 0 &&  <ProductOptionSizeList product={props.product} sizes={props.option.sizes}/>}

        </Box>
    )
}

export default ProductOptionListFormCodeModifier
