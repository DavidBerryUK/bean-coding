import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import { useState }                             from 'react';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import SizeModel                                from '../../../repository/productRepository/models/SizeModel';
import React                                    from 'react';
import ToggleButton                             from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup                        from '@material-ui/lab/ToggleButtonGroup';

interface IProperties {
    product: ProductModel,
    onSizeSelected?: (size: SizeModel) => void
}

const ProductSizeSelector: React.FC<IProperties> = (props) => {

    var [selectedSize, setSelectedSize] = useState<SizeModel>();

    const handleSizeSelectedClicked = (event: React.MouseEvent<HTMLElement>, sizeText: string) => {
        console.log("ProductSizeSelector - item selected");
        console.log(sizeText);

        const sizeModel = props.product.sizes.find((item) => item.name === sizeText);

        if ( sizeModel ) {
            setSelectedSize(sizeModel)
            if (props.onSizeSelected) {
                props.onSizeSelected(sizeModel);
            }
        }
    }

    return (
        <>
            <div>
                <ElementNameTag size={EnumLabelSize.medium} name="ProductSizeSelector" />
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
