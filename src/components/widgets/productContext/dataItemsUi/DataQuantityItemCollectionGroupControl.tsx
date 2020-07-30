import { Paper }                                from '@material-ui/core';
import DataQuantityItemCollectionGroup          from '../../../../repository/productRepository/models/DataModels/itemAndQuantity/DataQuantityItemCollectionGroup';
import React                                    from 'react';
import DataQuantityItemCollectionControl        from './DataQuantityItemCollectionControl';

interface IProperties {
    data?: DataQuantityItemCollectionGroup;
}

const DataQuantityItemCollectionGroupControl: React.FC<IProperties> = (props) => {

    return (
        <Paper>            
            {props.data?.groupItems.map((item, index) => (
                
                <DataQuantityItemCollectionControl key={index} data={item}/>
            ))}
        </Paper>
    )
}

export default DataQuantityItemCollectionGroupControl

