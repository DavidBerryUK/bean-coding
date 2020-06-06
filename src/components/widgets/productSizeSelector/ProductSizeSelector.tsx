import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import { useState }                             from 'react';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductSizeModel                         from '../../../repository/productRepository/models/ProductSizeModel';
import React                                    from 'react';
import ToggleButton                             from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup                        from '@material-ui/lab/ToggleButtonGroup';

interface IProperties {
    product: ProductModel
}

const ProductSizeSelector: React.FC<IProperties> = (props) => {

    var [selectedSize, setSelectedSize] = useState<ProductSizeModel>();

    const handleSizeSelectedClicked = (event: React.MouseEvent<HTMLElement>, size: ProductSizeModel) => {
        setSelectedSize(size)
    }

    return (
        <>
        <div>
        <ElementNameTag size={EnumLabelSize.medium} name="ProductSizeSelector"/>
        </div>
        <ToggleButtonGroup
            exclusive
            value={selectedSize}
            onChange={handleSizeSelectedClicked}
            color="primary"
            size="medium">

            {props.product.sizes.map((item) => (
                <ToggleButton key={item.name} value={item.name}>{item.name}</ToggleButton>
            ))}
        </ToggleButtonGroup>
        </>
    )
}

export default ProductSizeSelector
