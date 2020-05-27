import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';
import React                                    from 'react';

interface IProperties {
    option: ProductOptionModel
}

const ProductOptionTypeOne: React.FC<IProperties> = (props) => {

    console.log('-------ONE');
    console.log(props.option);

    return (
        <>
            <h2>[OPTION-TYPE:ONE]{props.option.name}</h2>
            { props.option.products.map((item: ProductOptionModel) => (
                <div key={item.name}>
                    {item.name}
                </div>
            ))}

        </>
    )
}

export default ProductOptionTypeOne;