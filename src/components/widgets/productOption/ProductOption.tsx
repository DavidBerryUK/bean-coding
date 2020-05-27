import { EnumOptionSelectType }                 from '../../../repository/productRepository/enum/ProductEnums';
import { Typography }                           from '@material-ui/core';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';
import ProductOptionTypeModifier                from '../productOptionTypeModifier/ProductOptionTypeModifier';
import ProductOptionTypeOne                     from '../productOptionTypeOne/ProductOptionTypeOne';
import ProductOptionTypeQuantity                from '../productOptionTypeQuantity/ProductOptionTypeQuantity';
import ProductOptionTypeUnknown                 from '../productOptionTypeUnknown/ProductOptionTypeUnknown';
import React                                    from 'react';

interface IProperties {
    option: ProductOptionModel
}

const ProductOption: React.FC<IProperties> = (props) => {

    const optionComponent = (option : ProductOptionModel) => {
        switch (option.formCode)
        {
            case EnumOptionSelectType.One:
                return <ProductOptionTypeOne option={option}/>
            case EnumOptionSelectType.Quantity:
                return <ProductOptionTypeQuantity option={option}/>                
            case EnumOptionSelectType.Modifier:
                return <ProductOptionTypeModifier option={option}/>        
        }

        if ( option.children.length === 0 && option.products.length === 0 ) {
            // empty configuration in original JSON
            return null
        }

        return <ProductOptionTypeUnknown option={option}/>;
    }

    return (
        <div>
            <Typography variant="h5">{props.option.name}</Typography>
            <div>options:{props.option.children.length}</div>
            <div>products:{props.option.products.length}</div>


            <h5>Sub Options</h5>
            {props.option.children.map((item: ProductOptionModel) => (
                <>                            
                    {optionComponent(item)}                                    
                </>
            ))}


        </div>
    )
}

export default ProductOption
