import { Paper }                                from '@material-ui/core';
import CheckBoxOutlineBlankIcon                 from '@material-ui/icons/CheckBoxOutlineBlank';
import DataItemCollection                       from '../../../../repository/productRepository/models/DataModels/selectList/DataItemCollection';
import ItemListSelector                         from '../../../ui/itemListSelector/ItemListSelector';
import OptionThumbnail                          from './optionThumbnail/OptionThumbnail';
import React                                    from 'react';

interface IProperties {
    data?: DataItemCollection;
}


const DataItemCollectionControl: React.FC<IProperties> = (props) => {    

    /**
     * Build a collection of thumbnails for the available options
     */
    const thumbnailCollection = () : Array<React.ReactElement> => {
        if ( props.data === undefined) {
            return new Array<React.ReactElement>();
        }
        const collection = props.data.collectionItems.map((item, index) => (
            <OptionThumbnail key={item.value} text={item.value} icon={<CheckBoxOutlineBlankIcon/>}/>            
        ));
        return collection;
    }

    const handleItemSelected = (index: number) => {             
    }

    return (
        <Paper>                    
            <ItemListSelector
                elements={thumbnailCollection()}
                selectedIndex={undefined}
                onItemSelected={handleItemSelected}/>
            
        </Paper>
    )
}

export default DataItemCollectionControl

