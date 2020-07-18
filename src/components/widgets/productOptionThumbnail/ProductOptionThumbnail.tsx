import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Typography }                           from '@material-ui/core';
import CheckBoxOutlineBlankOutlinedIcon         from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import OptionBaseModel                          from '../../../repository/productRepository/models/options/OptionBaseModel';
import React                                    from 'react';

export interface IProperties {
    option: OptionBaseModel
}

const ProductOptionThumbnail: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    return (
        <div className={classStyles.root}>
            <div className={classStyles.iconContainer}>
                <CheckBoxOutlineBlankOutlinedIcon />
            </div>
            <Typography variant="subtitle1" color="textPrimary" className={classStyles.title}> {props.option.name}</Typography>
        </div>
    )
}

export default ProductOptionThumbnail
