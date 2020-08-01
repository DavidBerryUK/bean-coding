import { enumOptionType }                       from '../../../../repository/productRepository/models/options/OptionBaseModel';
import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import DataItemCollectionGroupControl           from '../dataItemsUi/DataItemCollectionGroupControl';
import DataQuantityItemControl                  from '../dataItemsUi/DataQuantityItemControl';
import OptionShotsModel                         from '../../../../repository/productRepository/models/options/OptionShotsModel';
import ProductContext                           from '../context/productContext';
import React                                    from 'react';

const OptionsForShots: React.FC = () => {

    const productState = useContext(ProductContext).state;
    const [optionState, setOptionState] = useState<OptionShotsModel>();

    useEffect(() => {
        const optionModel = productState.product.getOptionModel(enumOptionType.Shots) as OptionShotsModel;
        setOptionState(optionModel);
    }, [productState.product]);
    
    return (
        <Paper>
            <h2>Shots</h2>        
            <DataItemCollectionGroupControl data={optionState?.optionGroup} />
            <DataQuantityItemControl data={optionState?.optionsItem}/>
        </Paper>
    )
}

export default OptionsForShots

