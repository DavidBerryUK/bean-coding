import { enumOptionType }                       from '../../../../repository/productRepository/models/options/OptionBaseModel';
import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import DataItemCollectionGroupControl           from '../ui/DataItemCollectionGroupControl';
import OptionAddInModel                         from '../../../../repository/productRepository/models/options/OptionAddInModel';
import ProductContext                           from '../context/productContext';
import React                                    from 'react';

const OptionsForAddIns: React.FC = () => {

    const productState = useContext(ProductContext).state;
    const [optionState, setOptionState] = useState<OptionAddInModel>();

    useEffect(() => {
        const optionModel = productState.product.getOptionModel(enumOptionType.AddIn) as OptionAddInModel;
        setOptionState(optionModel);        
    }, [productState.product]);

    return (
        <Paper>
            <h2>Add Ins</h2>            
            <DataItemCollectionGroupControl data={optionState?.optionsGroup}/>
        </Paper>
    )
}

export default OptionsForAddIns

