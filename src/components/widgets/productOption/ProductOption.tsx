 import { EnumOptionSelectType }                 from '../../../repository/productRepository/enum/ProductEnums';
// import ProductOptionTypeModifier                from '../productOptionTypeModifier/ProductOptionTypeModifier';
// import ProductOptionTypeOne                     from '../productOptionTypeOne/ProductOptionTypeOne';
// import ProductOptionTypeQuantity                from '../productOptionTypeQuantity/ProductOptionTypeQuantity';
// import ProductOptionTypeUnknown                 from '../productOptionTypeUnknown/ProductOptionTypeUnknown';
import { Box }                                  from '@material-ui/core';
import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';
import React                                    from 'react';
import ProductOptionListFormCodeOne             from '../productOptionListFormCodeOne/ProductOptionListFormCodeOne';

interface IProperties {
    option: ProductOptionModel
}

const ProductOption: React.FC<IProperties> = (props) => {

    const optionComponent = () => {
        console.log(props.option.formCode);
        switch (props.option.formCode) {
            case EnumOptionSelectType.One:
                return <ProductOptionListFormCodeOne option={props.option} />
            // case EnumOptionSelectType.Quantity:
            //     return <ProductOptionTypeQuantity option={option} />
            // case EnumOptionSelectType.Modifier:
            //     return <ProductOptionTypeModifier option={option} />
        }

        // if (option.children.length === 0 && option.products.length === 0) {
        //     // empty configuration in original JSON
        //     return null
        // }

        return null
        //return <ProductOptionTypeUnknown option={option} />;
    }

    return (
        <Box color="green" border={4}>
            <ElementNameTag size={EnumLabelSize.medium} name="ProductOption" />
            <table>
                <tbody>
                <tr>
                    <td>Name</td><td>{props.option.name}</td>
                </tr>
                <tr>
                    <td>Form Code</td><td>{props.option.formCode}</td>
                </tr>
                </tbody>
            </table>

            {optionComponent()}

            {/* Turn this into ProductOptionListFormCodeTypeUnknown */}
            {/* {props.option.children.length > 0 &&
                <>
                    <h5>Sub Options {props.option.children.length}</h5>
                    {props.option.children.map((item: ProductOptionModel, index) => (
                        <>
                            <Box color="blue" border={1}>
                                option {index + 1} of {props.option.children.length}
                            </Box>
                            {optionComponent(item)}
                        </>
                    ))}
                </>}

            {props.option.products.length > 0 &&
                <>
                    <h5>Sub Products {props.option.products.length}</h5>
                    {props.option.products.map((item: ProductOptionModel, index) => (
                        <>
                            <Box color="blue" border={1}>
                                option {index + 1} of {props.option.products.length}
                            </Box>
                            {optionComponent(item)}
                        </>
                    ))}
                </>} */}


        </Box>
    )
}

export default ProductOption
