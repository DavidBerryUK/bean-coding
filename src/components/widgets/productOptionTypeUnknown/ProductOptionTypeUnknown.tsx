import React                                    from 'react';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';

interface IProperties {
    option: ProductOptionModel
}

const ProductOptionTypeUnknown: React.FC<IProperties> = (props) => {

    console.log('-------Unknown');
    console.log(props.option);

    return (
        <>
            <h2>[OPTION-TYPE:UNKNOWN]:{props.option.name}</h2>
            <h4>Product Option</h4>
            <div>name:{props.option.name}</div>
            <div>formCode:{props.option.formCode}</div>
            <div>children:{props.option.children.length}</div>
            <div>products:{props.option.products.length}</div>

        </>
    )
}

export default ProductOptionTypeUnknown;