import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';
import React                                    from 'react';

interface IProperties {
    option: ProductOptionModel
}

const ProductOptionTypeModifier: React.FC<IProperties> = (props) => {

    console.log('-------Modifier');
    console.log(props.option);

    return (
        <>
            <ElementNameTag size={EnumLabelSize.medium} name="ProductOptionTypeModifier"/>
            {/* { props.option.products.map((item: ProductOptionModel) => (
                <div key={item.name}>
                    {item.name}
                </div>
            ))} */}
        </>
    )
}

export default ProductOptionTypeModifier;