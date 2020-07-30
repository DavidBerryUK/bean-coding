import { enumOptionType }                       from '../../../../repository/productRepository/models/options/OptionBaseModel';
import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import DataItemCollectionGroupsControl          from '../dataItemsUi/DataItemCollectionGroupsControl';
import OptionToppingsModel                      from '../../../../repository/productRepository/models/options/OptionToppingsModel';
import ProductContext                           from '../context/productContext';
import React                                    from 'react';

const OptionsForToppings: React.FC = () => {

    const productState = useContext(ProductContext).state;
    const [optionState, setOptionState] = useState<OptionToppingsModel>();

    useEffect(() => {
        const optionModel = productState.product.getOptionModel(enumOptionType.Toppings) as OptionToppingsModel;
        setOptionState(optionModel);
    }, [productState.product]);
    
    return (
        <Paper>
            <h2>Toppings</h2>            
            <DataItemCollectionGroupsControl data={optionState?.optionsGroups}/>
        </Paper>
    )
}

export default OptionsForToppings

