import  { useContext }                          from 'react';
import { Grid }                                 from '@material-ui/core';
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import ProductContext                           from "../context/productContext";
import React                                    from 'react';

const ProductHeader: React.FC = (props) => {

    const productState = useContext(ProductContext).state;
    
    return (
        <Paper>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4">{productState.product.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">{productState.product.description}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5">Size</Typography>
                </Grid>       
            </Grid>
        </Paper>
    )
}

export default ProductHeader
