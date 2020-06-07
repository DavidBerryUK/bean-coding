import { Box }                                      from '@material-ui/core';
import { EnumLabelSize }                            from '../../ui/elementNameTag/ElementNameTag';
import { Typography }                               from '@material-ui/core';
import ElementNameTag                               from '../../ui/elementNameTag/ElementNameTag';
import ProductOptionModel                           from '../../../repository/productRepository/models/ProductOptionModel';
import React                                        from 'react';

interface IProperties {
    option: ProductOptionModel
}

const ProductOptionListFormCodeQuantity: React.FC<IProperties> = (props) => {

    return (
        <Box color="orange" border={4}>
            <ElementNameTag size={EnumLabelSize.medium} name="ProductOptionListFormCodeQuantity" />
            <Typography variant="h3">{props.option.name}</Typography>
            {props.option.products.map((product: ProductOptionModel) => (
                <div key={product.name}>
                    <Typography variant="h4">Quantity Picker required for :{product.name}</Typography>                                      
                </div>
            ))}
        </Box>
    )
}

export default ProductOptionListFormCodeQuantity
