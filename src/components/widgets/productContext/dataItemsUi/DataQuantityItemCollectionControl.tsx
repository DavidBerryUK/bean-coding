import { Paper }                                from '@material-ui/core';
import DataQuantityItemCollection               from '../../../../repository/productRepository/models/DataModels/itemAndQuantity/DataQuantityItemCollection';
import DataQuantityItemControl                  from './DataQuantityItemControl';
import React                                    from 'react';

interface IProperties {
    data?: DataQuantityItemCollection;
}

const DataQuantityItemCollectionControl: React.FC<IProperties> = (props) => {

    return (
        <Paper>
            {props.data?.collectionItems.map((item, index) => (
                <DataQuantityItemControl key={index} data={item} />
            ))}
        </Paper>
    )
}

export default DataQuantityItemCollectionControl

