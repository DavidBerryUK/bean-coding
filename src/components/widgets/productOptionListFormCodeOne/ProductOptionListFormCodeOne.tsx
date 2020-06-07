// import { EnumOptionSelectType }                 from '../../../repository/productRepository/enum/ProductEnums';
// import ProductOptionTypeModifier                from '../productOptionTypeModifier/ProductOptionTypeModifier';
// import ProductOptionTypeOne                     from '../productOptionTypeOne/ProductOptionTypeOne';
// import ProductOptionTypeQuantity                from '../productOptionTypeQuantity/ProductOptionTypeQuantity';
// import ProductOptionTypeUnknown                 from '../productOptionTypeUnknown/ProductOptionTypeUnknown';
import { Box }                                  from '@material-ui/core';
import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import { useState }                             from 'react';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';
import React                                    from 'react';
import ToggleButton                             from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup                        from '@material-ui/lab/ToggleButtonGroup';

interface IProperties {
    option: ProductOptionModel
}

const ProductOptionListFormCodeOne: React.FC<IProperties> = (props) => {

    var [selectedOption, setSelectedOption] = useState<ProductOptionModel>();

    const handleSizeSelectedClicked = (event: React.MouseEvent<HTMLElement>, size: ProductOptionModel) => {
        setSelectedOption(size)
    }

    return (
        <Box color="orange" border={4}>
            <ElementNameTag size={EnumLabelSize.medium} name="ProductOptionListFormCodeOne" />            
            <ToggleButtonGroup
                exclusive
                value={selectedOption}
                onChange={handleSizeSelectedClicked}
                color="primary"
                size="medium">

                {props.option.products.map((item) => (
                    <ToggleButton key={item.name} value={item.name}>{item.name}</ToggleButton>
                ))}
            </ToggleButtonGroup>



        </Box>
    )
}

export default ProductOptionListFormCodeOne
