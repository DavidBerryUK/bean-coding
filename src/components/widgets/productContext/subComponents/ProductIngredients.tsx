import { Paper } from '@material-ui/core';
import { useContext } from 'react';
import ProductContext from '../context/productContext';
import React from 'react';

const ProductIngredients: React.FC = () => {

    const productState = useContext(ProductContext).state;

    if (productState.product.selectedSize === undefined ||
        productState.product.selectedSize.ingredients === undefined) {
        return (
            <></>
        );
    }

    return (
        <Paper>
            <h2>Ingredients</h2>
            {productState.product.selectedSize.ingredients.map((i1, index1) => (
                <span key={i1.name}>{i1.name}
                    {
                        i1.SubIngredients.length > 0 &&
                        <> [{
                            i1.SubIngredients.map((i2, index2) => (
                                <span key={i2.name}>{i2.name}
                                    {
                                        i2.SubIngredients.length > 0 &&
                                        <> [[{
                                            i2.SubIngredients.map((i3, index3) => (
                                                <span key={i3.name}>{i3.name}
                                                    {index3 < (i2.SubIngredients.length - 1) && <>,</>}
                                                </span>
                                            ))}
                                        ]] </>
                                    }
                                    {index2 < (i1.SubIngredients.length - 1) && <>,</>}
                                </span>
                            ))}
                    ]</>
                    }
                    {index1 < (productState.product.selectedSize!.ingredients.length - 1) && <>,</>}
                </span>

            ))}
        </Paper>
    )
}

export default ProductIngredients
