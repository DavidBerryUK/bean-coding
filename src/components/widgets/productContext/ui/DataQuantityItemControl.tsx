import { Paper }                                from '@material-ui/core';
import DataQuantityItem                         from '../../../../repository/productRepository/models/DataModels/itemAndQuantity/DataQuantityItem';
import ItemQuantitySelector                     from '../../../ui/itemQuantitySelector/ItemQuantitySelector';
import React                                    from 'react';

interface IProperties {
    data: DataQuantityItem;
}

const DataQuantityItemControl: React.FC<IProperties> = (props) => {

    const handleOnValueChanged = (value: number) => {
        console.log(`value :${value}`)
    }

    return (
        <Paper>
            {props.data.name}
            <ItemQuantitySelector 
                value={props.data.quantity}
                onValueChanged={handleOnValueChanged}
                /> 
        </Paper>
    )
}

export default DataQuantityItemControl

