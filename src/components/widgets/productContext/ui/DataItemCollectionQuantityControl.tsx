import { Paper }                                from '@material-ui/core';
import DataItemCollectionQuantity               from '../../../../repository/productRepository/models/DataModels/selectList/DataItemCollectionQuantity';
import ItemQuantitySelector                     from '../../../ui/itemQuantitySelector/ItemQuantitySelector';
import React                                    from 'react';

interface IProperties {
    data: DataItemCollectionQuantity
}

const DataItemCollectionQuantityControl: React.FC<IProperties> = (props) => {

    const handleOnValueChanged = (value: number) => {
        console.log(Number);
    }

    return (
        <Paper>
            {props.data?.name}
            <ItemQuantitySelector value={props.data.quantityRequired} onValueChanged={handleOnValueChanged} />
            {props.data?.items.map((item) => (
                <div>
                    &nbsp;&nbsp;&nbsp;{item.value}
                </div>
            ))}
        </Paper>
    )
}

export default DataItemCollectionQuantityControl

