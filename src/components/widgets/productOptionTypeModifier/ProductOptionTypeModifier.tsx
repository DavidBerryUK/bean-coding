import React                                    from 'react';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';

interface IProperties {
    option: ProductOptionModel
}

const ProductOptionTypeModifier: React.FC<IProperties> = (props) => {

    console.log('-------Modifier');
    console.log(props.option);

    return (
        <>
            <h2>[OPTION-TYPE:MODIFIER]{props.option.name}</h2>           
            {/* { props.option.products.map((item: ProductOptionModel) => (
                <div key={item.name}>
                    {item.name}
                </div>
            ))} */}
        </>
    )
}

export default ProductOptionTypeModifier;