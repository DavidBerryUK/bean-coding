import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Grid }                                 from '@material-ui/core';
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductSizeSelector                      from "../productSizeSelector/ProductSizeSelector";
import React                                    from 'react';

interface IProperties {
    product: ProductModel
}

const ProductViewer: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    return (
        <Paper className={classStyles.root} >
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4">{props.product.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">{props.product.description}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h5">Size</Typography>
                </Grid>
                <Grid item xs={8}>
                    <ProductSizeSelector product={props.product} />
                </Grid>           
            </Grid>
            {/* <img
                alt={props.product.name} 
                className={classStyles.backgroundImage} 
                src={`/images/products/${props.product.filenameLarge}`}/>        */}
        </Paper>
    )
}

export default ProductViewer
