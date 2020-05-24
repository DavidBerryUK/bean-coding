import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import React                                    from 'react';

interface IProperties {
    product: ProductModel    
}

const ProductViewer: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();
    
    return (
        <Paper className={classStyles.root} >
            <img
                alt={props.product.name} 
                className={classStyles.backgroundImage} 
                src={`/images/products/${props.product.filenameLarge}`}/>       
        </Paper>
    )
}

export default ProductViewer
