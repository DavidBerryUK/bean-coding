import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import ProductContext                           from '../context/productContext';
import React                                    from 'react';

const ProductIngredients: React.FC = () => {

    const productState = useContext(ProductContext).state;

    console.log(productState.product.selectedSize?.ingredients);

    if (productState.product.selectedSize === undefined ||
        productState.product.selectedSize.ingredients === undefined) {
        return (
            <></>
        );
    }

    return (
        <Paper>
            <h2>Ingredients</h2>
            {productState.product.selectedSize.ingredients.map((item) => (
                <>{item.name}</>
            ))}
        </Paper>
    )
}

export default ProductIngredients
