import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdateProduct                     from './context/actions/CommandUpdate';
import ProductContext                           from './context/productContext';
import ProductHeader                            from './subComponents/ProductHeader';
import ProductIngredients                       from './subComponents/ProductIngredients';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductNutrition                         from './subComponents/ProductNutrition';
import ProductRecipe                            from './subComponents/ProductRecipe';
import ProductSize                              from './subComponents/ProductSize';
import React                                    from 'react';

interface IProperties {
    product: ProductModel
}

const ProductViewWidget: React.FC<IProperties> = (props) => {

    const dispatch = useContext(ProductContext).dispatch;

    useEffect(() => {        
        props.product.selectDefaultSize();
        dispatch(new CommandUpdateProduct(props.product));
    }, [dispatch, props.product]);

    return (
        <>
            <ProductHeader />
            <ProductSize />
            <ProductRecipe />
            <ProductNutrition />
            <ProductIngredients />
        </>
    )
}

export default ProductViewWidget
