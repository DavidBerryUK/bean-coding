import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { EnumProductType }                      from "../../../Services/productParser/productSize/EnumProductEnums";
import { Typography }                           from '@material-ui/core';
import LocalCafeOutlinedIcon                    from '@material-ui/icons/LocalCafeOutlined';
import ProductSizeModel                         from "../../../Services/productParser/productSize/ProductSizeModel";
import React                                    from 'react';

export interface IProperties {
    size: ProductSizeModel    
}

const ProductSizeThumbnail: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    const cupSizeClass = (): {} => {
        return {
            fontSize: 10 + 80 * props.size.iconScale / 100
        }
    }

    if ( props.size.productType === EnumProductType.item) {
        return (
            <div className={classStyles.root}>
            <div className={classStyles.iconContainer}>
                <div className={classStyles.onePiece}  />
            </div>
                <Typography variant="subtitle1" color="textPrimary" className={classStyles.title}> {props.size.name}</Typography>                
            </div>    
        )
    }

    return (
        <div className={classStyles.root}>
            <div className={classStyles.iconContainer}>
                <LocalCafeOutlinedIcon style={cupSizeClass()} />
            </div>
            <Typography variant="subtitle1" color="textPrimary" className={classStyles.title}> {props.size.name}</Typography>
            <Typography variant="subtitle2" color="textSecondary" className={classStyles.volume}>{props.size.volume}</Typography>
        </div>
    )
}

export default ProductSizeThumbnail
