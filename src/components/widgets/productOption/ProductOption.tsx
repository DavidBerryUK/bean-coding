import { Box, Typography }                                  from '@material-ui/core';
import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import { EnumOptionSelectType }                 from '../../../repository/productRepository/enum/ProductEnums';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductOptionListFormCodeOne             from '../productOptionListFormCodeOne/ProductOptionListFormCodeOne';
import ProductOptionListFormCodeQuantity        from '../productOptionListFormCodeQuantity/ProductOptionListFormCodeQuantity';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';
import React                                    from 'react';
import ProductOptionsList                       from '../productOptionsList/ProductOptionsList';
import ProductOptionListFormCodeModifier from '../productOptionListFormCodeModifier/ProductOptionListFormCodeModifier';

interface IProperties {
    product: ProductModel,
    option: ProductOptionModel
}

const ProductOption: React.FC<IProperties> = (props) => {

    const optionComponent = () => {
        console.log(props.option.formCode);
        switch (props.option.formCode) {
            case EnumOptionSelectType.One:
                return <ProductOptionListFormCodeOne option={props.option} />

            case EnumOptionSelectType.Quantity:
                return <ProductOptionListFormCodeQuantity option={props.option} />

            case EnumOptionSelectType.Modifier:
                return <ProductOptionListFormCodeModifier product={props.product} option={props.option} />

            case EnumOptionSelectType.None:
                if ( props.option.children.length > 0) {
                    return <ProductOptionsList product={props.product} options={props.option.children}/>
                }
                break;
        }
        return null        
    }

    return (
        <Box color="green" border={4} borderRadius={8}>
            <ElementNameTag size={EnumLabelSize.medium} name="ProductOption" />
            <Typography variant="h4" color="primary">{props.option.name}</Typography>
            {/* <table>
                <tbody>
                    <tr>
                        <td>Name</td><td>{props.option.name}</td>
                    </tr>
                    <tr>
                        <td>Form Code</td><td>{props.option.formCode}</td>
                    </tr>
                    <tr>
                        <td>sizes</td><td>{props.option.sizes.length}</td>
                    </tr>
                    <tr>
                        <td>options</td><td>{props.option.children.length}</td>
                    </tr>
                    <tr>
                        <td>Products</td><td>{props.option.products.length}</td>
                    </tr>
                </tbody>
            </table> */}
            {optionComponent()}
        </Box>
    )
}

export default ProductOption
