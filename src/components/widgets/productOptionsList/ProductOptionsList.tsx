// import { useState }                             from 'react';
import ProductModel from '../../../repository/productRepository/models/ProductModel';
import React from 'react';
import ProductOptionModel from '../../../repository/productRepository/models/ProductOptionModel';
import ProductOption from '../productOption/ProductOption';


interface IProperties {
    product: ProductModel
}

const ProductOptionsList: React.FC<IProperties> = (props) => {

    // var [selectedSize, setSelectedSize] = useState<ProductSizeModel>();

    // const handleSizeSelectedClicked = (event: React.MouseEvent<HTMLElement>, size: ProductSizeModel) => {
    //     setSelectedSize(size)
    // }

    return (
        <div>
            {props.product.options.map((item: ProductOptionModel) => (
                <ProductOption key={item.name} option={item}/>
            ))}                    
        </div>
    )
}

export default ProductOptionsList
