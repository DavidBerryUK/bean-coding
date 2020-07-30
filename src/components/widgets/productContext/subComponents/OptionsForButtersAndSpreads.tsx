import { enumOptionType }                       from '../../../../repository/productRepository/models/options/OptionBaseModel';
import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import DataQuantityItemCollectionControl        from '../ui/DataQuantityItemCollectionControl';
import OptionButterAndSpreadsModel              from '../../../../repository/productRepository/models/options/OptionButterAndSpreadsModel';
import ProductContext                           from '../context/productContext';
import React                                    from 'react';

const OptionsForButtersAndSpreads: React.FC = () => {

    const productState = useContext(ProductContext).state;
    const [optionState, setOptionState] = useState<OptionButterAndSpreadsModel>();

    useEffect(() => {
        const optionModel = productState.product.getOptionModel(enumOptionType.ButterAndSpreads) as OptionButterAndSpreadsModel;
        setOptionState(optionModel);
    }, [productState.product]);
    
    return (
        <Paper>
            <h2>Butters and Spreads</h2>            
            <DataQuantityItemCollectionControl data={optionState?.optionsCollection}/>            
        </Paper>
    )
}

export default OptionsForButtersAndSpreads

