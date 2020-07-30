import { Paper }                                from '@material-ui/core';
import DataItemCollectionControl                from './DataItemCollectionControl';
import DataItemCollectionGroup                  from '../../../../repository/productRepository/models/DataModels/selectList/DataItemCollectionGroup';
import React                                    from 'react';

interface IProperties {
    data?: DataItemCollectionGroup;
}

const DataItemCollectionGroupControl: React.FC<IProperties> = (props) => {

    return (
        <Paper>
            {props.data?.groupItems.map((item, index) =>
                <DataItemCollectionControl key={index} data={item} />
            )}
        </Paper>
    )
}

export default DataItemCollectionGroupControl

