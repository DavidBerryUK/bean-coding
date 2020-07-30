import { Paper }                                from '@material-ui/core';
import React                                    from 'react';
import DataQuantityItemCollection               from '../../../../repository/productRepository/models/DataModels/itemAndQuantity/DataQuantityItemCollection';

interface IProperties {
    data?: DataQuantityItemCollection;
}


const DataQuantityItemCollectionControl: React.FC<IProperties> = (props) => {    

    return (
        <Paper>                    
            
        </Paper>
    )
}

export default DataQuantityItemCollectionControl

