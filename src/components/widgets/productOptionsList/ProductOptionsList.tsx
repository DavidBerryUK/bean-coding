// import { useState }                             from 'react';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductOption                            from '../productOption/ProductOption';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';
import React                                    from 'react';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';

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
            <ElementNameTag size={EnumLabelSize.medium} name="ProductOptionsList"/>
            {props.product.options.map((item: ProductOptionModel) => (
                <ProductOption key={item.name} option={item}/>
            ))}                    
        </div>
    )
}

export default ProductOptionsList
