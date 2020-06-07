import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';
import React                                    from 'react';

interface IProperties {
    option: ProductOptionModel
}

const ProductOptionTypeUnknown: React.FC<IProperties> = (props) => {

    return (
        <>
            <ElementNameTag size={EnumLabelSize.medium} name="ProductOption"/>
            <h4>Product Option</h4>
            <div>name:{props.option.name}</div>
            <div>formCode:{props.option.formCode}</div>
            <div>children:{props.option.children.length}</div>
            <div>products:{props.option.products.length}</div>

        </>
    )
}

export default ProductOptionTypeUnknown;