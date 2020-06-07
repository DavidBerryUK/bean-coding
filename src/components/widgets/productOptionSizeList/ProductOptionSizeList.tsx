import { Box }                                  from '@material-ui/core';
import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import { useState }                             from 'react';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductOptionSizeModel                   from '../../../repository/productRepository/models/ProductOptionSizeModel';
import React                                    from 'react';
import ToggleButton                             from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup                        from '@material-ui/lab/ToggleButtonGroup';

interface IProperties {
    product: ProductModel,
    sizes: Array<ProductOptionSizeModel>
}

const ProductOptionSizeList: React.FC<IProperties> = (props) => {

    var [selectedSize, setSelectedSize] = useState<ProductOptionSizeModel>();

    const handleSizeSelectedClicked = (event: React.MouseEvent<HTMLElement>, size: ProductOptionSizeModel) => {
        setSelectedSize(size)
    }

    return (
        <div>
            <Box color="steelblue" border={2}>
                <div>
                    <ElementNameTag size={EnumLabelSize.medium} name="ProductOptionSizeList" />
                </div>
                <ToggleButtonGroup
                    exclusive
                    value={selectedSize}
                    onChange={handleSizeSelectedClicked}
                    color="primary"
                    size="medium">

                    {props.sizes.map((item) => (
                        <ToggleButton key={item.name} value={item.name}>{item.name}</ToggleButton>
                    ))}
                </ToggleButtonGroup>

            </Box>
        </div>
    )
}

export default ProductOptionSizeList
