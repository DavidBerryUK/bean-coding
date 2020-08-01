import { enumOptionType }                       from '../../../../repository/productRepository/models/options/OptionBaseModel';
import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import DataItemCollectionQuantityControl        from '../dataItemsUi/DataItemCollectionQuantityControl';
import OptionTeaModel                           from '../../../../repository/productRepository/models/options/OptionTeaModel';
import ProductContext                           from '../context/productContext';
import React                                    from 'react';

const OptionsForTea: React.FC = () => {

    const productState = useContext(ProductContext).state;
    const [optionState, setOptionState] = useState<OptionTeaModel>();

    useEffect(() => {
        const optionModel = productState.product.getOptionModel(enumOptionType.Tea) as OptionTeaModel;
        setOptionState(optionModel);
    }, [productState.product]);

    return (
        <Paper>
            <h2>Tea</h2>
            {optionState?.optionItem && <DataItemCollectionQuantityControl data={optionState?.optionItem} />}
        </Paper>
    )
}

export default OptionsForTea

