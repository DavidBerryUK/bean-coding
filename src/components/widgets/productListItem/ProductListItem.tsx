import { Card }                                 from '@material-ui/core';
import { CardActionArea }                       from '@material-ui/core';
import { CardContent }                          from '@material-ui/core';
import { CardMedia }                            from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Typography }                           from '@material-ui/core';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import React                                    from 'react';

interface IProperties {
    product: ProductModel
    onProductSelected: (image: ProductModel) => void;
}

const ProductListItem: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    const handleProductClicked = () => {
        props.onProductSelected(props.product);
    }

    return (
        <Card className={classStyles.root} onClick={handleProductClicked}>
            <CardActionArea>
                <CardMedia
                    className={classStyles.media}
                    image={`/images/products/${props.product.filenameThumbnail}`}
                    title={props.product.name}
                />
                <CardContent className={classStyles.cardContent}>
                    <Typography gutterBottom variant="subtitle1" >
                        {props.product.name}
                    </Typography>                    
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProductListItem
