import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';
import React                                    from 'react';

interface IProperties {
    option: ProductOptionModel
}

const ProductOptionTypeQuantity: React.FC<IProperties> = (props) => {

    return (
        <>
            <ElementNameTag size={EnumLabelSize.medium} name="ProductOptionTypeQuantity"/>
            { props.option.products.map((item: ProductOptionModel) => (
                <div key={item.name}>
                    {item.name}
                </div>
            ))}
        </>
    )
}

export default ProductOptionTypeQuantity;