import { enumOptionType }                       from '../../../../repository/productRepository/models/options/OptionBaseModel';
import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import DataItemCollectionControl                from '../ui/DataItemCollectionControl';
import OptionWarmingModel                       from '../../../../repository/productRepository/models/options/OptionWarmingModel';
import ProductContext                           from '../context/productContext';
import React                                    from 'react';

const OptionsForWarming: React.FC = () => {

    const productState = useContext(ProductContext).state;
    const [optionState, setOptionState] = useState<OptionWarmingModel>();

    useEffect(() => {
        const optionModel = productState.product.getOptionModel(enumOptionType.Warming) as OptionWarmingModel;
        setOptionState(optionModel);
    }, [productState.product]);

    return (
        <Paper>
            <h2>Warming</h2>            
            <DataItemCollectionControl data={optionState?.optionsCollection}/>            
        </Paper>
    )
}

export default OptionsForWarming

