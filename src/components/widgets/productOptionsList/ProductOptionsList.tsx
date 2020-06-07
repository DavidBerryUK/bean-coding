import { Box }                                  from '@material-ui/core';
import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductOption                            from '../productOption/ProductOption';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';
import React                                    from 'react';

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
            <Box color="red" border={4}>
            <ElementNameTag size={EnumLabelSize.medium} name="ProductOptionsList"/>
            {props.product.options.map((item: ProductOptionModel) => (
                <ProductOption key={item.name} option={item}/>
            ))}   
            </Box>                 
        </div>
    )
}

export default ProductOptionsList
