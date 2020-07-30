import { Paper }                                from '@material-ui/core';
import DataItemCollectionQuantityGroupControl   from './DataItemCollectionQuantityGroupControl';
import DataItemCollectionQuantityGroups         from '../../../../repository/productRepository/models/DataModels/selectList/DataItemCollectionQuantityGroups';
import React                                    from 'react';

interface IProperties {
    data?: DataItemCollectionQuantityGroups;
}

const DataItemCollectionQuantityGroupsControl: React.FC<IProperties> = (props) => {

    return (
        <Paper>
            {props.data?.groups.map((item,index)=>(
                <DataItemCollectionQuantityGroupControl key={index} data={item}/>
            ))}
        </Paper>
    )
}

export default DataItemCollectionQuantityGroupsControl
