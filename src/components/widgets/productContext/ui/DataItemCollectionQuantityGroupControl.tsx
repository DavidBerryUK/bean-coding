import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import DataItemCollectionQuantityControl        from './DataItemCollectionQuantityControl';
import DataItemCollectionQuantityGroup          from '../../../../repository/productRepository/models/DataModels/selectList/DataItemCollectionQuantityGroup';
import React                                    from 'react';

interface IProperties {
    data?: DataItemCollectionQuantityGroup
}

const DataItemCollectionQuantityGroupControl: React.FC<IProperties> = (props) => {

    return (
        <Paper>
            <Typography variant="h5">{props.data?.name}</Typography>
            {props.data?.groupItems.map((item, index) => (
                <DataItemCollectionQuantityControl key={index} data={item}/>
            ))}
        </Paper>
    )
}

export default DataItemCollectionQuantityGroupControl

