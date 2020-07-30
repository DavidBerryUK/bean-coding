import { enumOptionType }                       from '../../../../repository/productRepository/models/options/OptionBaseModel';
import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import DataQuantityItemCollectionGroupControl   from '../dataItemsUi/DataQuantityItemCollectionGroupControl';
import OptionBlendedModel                       from '../../../../repository/productRepository/models/options/OptionBlendedModel';
import ProductContext                           from '../context/productContext';
import React                                    from 'react';


const OptionsForBlended: React.FC = () => {

    const productState = useContext(ProductContext).state;
    const [optionState, setOptionState] = useState<OptionBlendedModel>();

    useEffect(() => {
        const optionModel = productState.product.getOptionModel(enumOptionType.Blended) as OptionBlendedModel;
        setOptionState(optionModel);
    }, [productState.product]);

    return (
        <Paper>
            <h2>Blended </h2>                        
            <DataQuantityItemCollectionGroupControl data={optionState?.optionsGroup}/>
        </Paper>
    )
}

export default OptionsForBlended

