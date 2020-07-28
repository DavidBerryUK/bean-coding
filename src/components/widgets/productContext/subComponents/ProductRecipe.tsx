import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import ProductContext                           from "../context/productContext";
import React                                    from 'react';

const ProductRecipe: React.FC = (props) => {

    const productState = useContext(ProductContext).state;

    if (productState.product.selectedSize === undefined) {
        return (
            <></>
        );
    }

    return (
        <Paper>
            <h2>Recipe</h2>
            {productState.product.selectedSize.recipeList.map((item) => (
                item.name
            ))}
        </Paper>
    )
}

export default ProductRecipe
