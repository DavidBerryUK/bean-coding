import { useContext }                           from 'react';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import ItemListSelector                         from '../../../ui/itemListSelector/ItemListSelector';
import ProductContext                           from '../context/productContext';
import ProductOptionThumbnail                   from '../../productOptionThumbnail/ProductOptionThumbnail';
import React                                    from 'react';

const OptionsSelector: React.FC = () => {

    const productState = useContext(ProductContext).state;

    const [selectedIndexState, setSelectedIndexState] = useState<number | undefined>()
    const [optionsState, setOptionsState] = useState<Array<React.ReactElement>>(new Array<React.ReactElement>());

    useMemo(() => {
        if (productState.product.options) {
            const elements = productState.product.options.map((option) => (<ProductOptionThumbnail option={option} />));
            setOptionsState(elements);
            setSelectedIndexState(0);
        } else {
            setSelectedIndexState(undefined);
        }
    }, [productState.product]);

    const handleItemSelected = (index: number) => {
        setSelectedIndexState(index);
    }

    return (

        <ItemListSelector
            selectedIndex={selectedIndexState}
            elements={optionsState}
            onItemSelected={handleItemSelected}
        />

    )
}

export default OptionsSelector;