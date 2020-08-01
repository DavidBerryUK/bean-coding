import { enumOptionType }                       from '../../../repository/productRepository/models/options/OptionBaseModel';
import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdateProduct                     from './context/actions/CommandUpdate';
import OptionsForAddIns                         from './subComponents/OptionsForAddIns';
import OptionsForBlended                        from './subComponents/OptionsForBlended';
import OptionsForButtersAndSpreads              from './subComponents/OptionsForButtersAndSpreads';
import OptionsForDairyAlternatives              from './subComponents/OptionsForDairyAlternatives';
import OptionsForFlavours                       from './subComponents/OptionsForFlavours';
import OptionsForSandwich                      from './subComponents/OptionsForSandwich';
import OptionsForShots                          from './subComponents/OptionsForShot';
import OptionsForTea                            from './subComponents/OptionsForTea';
import OptionsForToppings                       from './subComponents/OptionsForToppings';
import OptionsForWarming                        from './subComponents/OptionsForWarming';
import ProductContext                           from './context/productContext';
import ProductHeader                            from './subComponents/ProductHeader';
import ProductIngredients                       from './subComponents/ProductIngredients';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductNutrition                         from './subComponents/ProductNutrition';
import ProductRecipe                            from './subComponents/ProductRecipe';
import ProductSize                              from './subComponents/ProductSize';
import React                                    from 'react';
import SizeModel                                from '../../../repository/productRepository/models/SizeModel';

interface IProperties {
    product: ProductModel,
    onSizeChanged?: (size: SizeModel) => void;
}

const ProductViewWidget: React.FC<IProperties> = (props) => {

    const {state, dispatch} = useContext(ProductContext);

    useEffect(() => {        
        props.product.selectDefaultSize();
        dispatch(new CommandUpdateProduct(props.product));
    }, [dispatch, props.product]);

    const handleProductSizeChanged = (size: SizeModel) => {
        if ( props.onSizeChanged ) {
            props.onSizeChanged(size);
        }
    }

    return (
        <>
            <ProductHeader />
            <ProductSize onSizeChanged={(size:SizeModel)=> {handleProductSizeChanged(size)}}/>
            <ProductRecipe />
            <ProductNutrition />
            <ProductIngredients />   
            {state.product.hasOption(enumOptionType.Shots) && <OptionsForShots />}
            {state.product.hasOption(enumOptionType.AddIn) && <OptionsForAddIns />}
            {state.product.hasOption(enumOptionType.Blended) && <OptionsForBlended />}
            {state.product.hasOption(enumOptionType.ButterAndSpreads) && <OptionsForButtersAndSpreads />}
            {state.product.hasOption(enumOptionType.DiaryAlternatives) && <OptionsForDairyAlternatives />}
            {state.product.hasOption(enumOptionType.Flavours) && <OptionsForFlavours />}
            {state.product.hasOption(enumOptionType.Sandwich) && <OptionsForSandwich />}
            {state.product.hasOption(enumOptionType.Tea) && <OptionsForTea />}
            {state.product.hasOption(enumOptionType.Toppings) && <OptionsForToppings />}
            {state.product.hasOption(enumOptionType.Warming) && <OptionsForWarming />}
        </>
    )
}

export default ProductViewWidget
