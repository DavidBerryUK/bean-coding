import { Paper, Chip, Badge, Box }                                from '@material-ui/core';
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
            {productState.product.selectedSize.recipeList.map((item,index) => (
                <Box key={index}  display='flex'>
                    <Badge badgeContent={item.quantity ? item.quantity : null} color="primary">
                    <Chip label={`${item.name}: (${item.productNumber})`} />
                    </Badge>
                </Box>
            ))}
        </Paper>
    )
}

export default ProductRecipe
