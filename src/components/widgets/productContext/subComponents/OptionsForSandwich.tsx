import { enumOptionType }                       from '../../../../repository/productRepository/models/options/OptionBaseModel';
import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import DataItemCollectionQuantityGroupsControl  from '../dataItemsUi/DataItemCollectionQuantityGroupsControl';
import OptionSandwichModel                      from '../../../../repository/productRepository/models/options/OptionSandwichModel';
import ProductContext                           from '../context/productContext';
import React                                    from 'react';

const OptionsForSandwich: React.FC = () => {

    const productState = useContext(ProductContext).state;
    const [optionState, setOptionState] = useState<OptionSandwichModel>();

    useEffect(() => {
        const optionModel = productState.product.getOptionModel(enumOptionType.Sandwich) as OptionSandwichModel;
        setOptionState(optionModel);
    }, [productState.product]);
    
    return (
        <Paper>
            <h2>Sandwich</h2>            
            <DataItemCollectionQuantityGroupsControl data={optionState?.optionGroups}/>
        </Paper>
    )
}

export default OptionsForSandwich

