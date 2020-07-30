import { enumOptionType }                       from '../../../../repository/productRepository/models/options/OptionBaseModel';
import { Paper }                                from '@material-ui/core';
import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import DataItemCollectionQuantityGroupsControl  from '../ui/DataItemCollectionQuantityGroupsControl';
import OptionFlavoursModel                      from '../../../../repository/productRepository/models/options/OptionFlavoursModel';
import ProductContext                           from '../context/productContext';
import React                                    from 'react';

const OptionsForFlavours: React.FC = () => {

    const productState = useContext(ProductContext).state;
    const [optionState, setOptionState] = useState<OptionFlavoursModel>();

    useEffect(() => {
        const optionModel = productState.product.getOptionModel(enumOptionType.Flavours) as OptionFlavoursModel;
        setOptionState(optionModel);
    }, [productState.product]);

    return (
        <Paper>
            <h2>Flavours</h2>
            <DataItemCollectionQuantityGroupsControl data={optionState?.optionsGroups}/>
        </Paper>
    )
}

export default OptionsForFlavours

