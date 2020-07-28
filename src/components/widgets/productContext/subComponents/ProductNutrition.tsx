import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import ProductContext                           from '../context/productContext';
import React                                    from 'react';

const ProductNutrition: React.FC = () => {

    const productState = useContext(ProductContext).state;

    if (productState.product.selectedSize === undefined) {
        return (
            <></>
        );
    }

    return (
        <Paper>
            <h2>Nutrition</h2>
            {productState.product.selectedSize.nutrition.serviceSize}
            {productState.product.selectedSize.nutrition.calories}
            {productState.product.selectedSize.nutrition.caloriesFromFat}
        </Paper>
    )
}

export default ProductNutrition
