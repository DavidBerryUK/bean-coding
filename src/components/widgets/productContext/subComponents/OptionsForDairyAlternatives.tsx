import { enumOptionType }                       from '../../../../repository/productRepository/models/options/OptionBaseModel';
import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import DataItemCollectionGroupControl           from '../dataItemsUi/DataItemCollectionGroupControl';
import OptionDairyAlternativesModel             from '../../../../repository/productRepository/models/options/OptionDairyAlternativesModel';
import ProductContext                           from '../context/productContext';
import React                                    from 'react';

const OptionsForDairyAlternatives: React.FC = () => {

    const productState = useContext(ProductContext).state;
    const [optionState, setOptionState] = useState<OptionDairyAlternativesModel>();

    useEffect(() => {
        const optionModel = productState.product.getOptionModel(enumOptionType.DiaryAlternatives) as OptionDairyAlternativesModel;
        setOptionState(optionModel);
    }, [productState.product]);
    
    return (
        <Paper>
            <h2>Milk and Dairy Alternatives</h2>          
            <DataItemCollectionGroupControl data={optionState?.optionGroup} />
        </Paper>
    )
}

export default OptionsForDairyAlternatives

