import { Paper }                                from '@material-ui/core';
import DataItemCollectionGroupControl           from './DataItemCollectionGroupControl';
import DataItemCollectionGroups                 from '../../../../repository/productRepository/models/DataModels/selectList/DataItemCollectionGroups';
import React                                    from 'react';

interface IProperties {
    data?: DataItemCollectionGroups
}

const DataItemCollectionGroupsControl: React.FC<IProperties> = (props) => {    

    return (
        <Paper>            
            {props.data?.groups.map((item,index) => (
                    <DataItemCollectionGroupControl key={index} data={item}/>
                ))}            
        </Paper>
    )
}

export default DataItemCollectionGroupsControl
