import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ItemListSelector                         from '../../ui/itemListSelector/ItemListSelector';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductOptionThumbnail                   from '../productOptionThumbnail/ProductOptionThumbnail';
import React                                    from 'react';

interface IProperties {
    product: ProductModel
}

const ProductOptionsSelector: React.FC<IProperties> = (props) => {

    const [selectedItemState, setSelectedItemState] = useState<React.ReactElement | null>(null)
    const [optionsState, setOptionsState] = useState<Array<React.ReactElement>>(new Array<React.ReactElement>());

    useMemo(() => {
        if (props.product.options) {
            const elements = props.product.options.map((option) => (<ProductOptionThumbnail option={option} />));
            setOptionsState(elements);
        }
    }, [props.product]);

    const handleItemSelected = (item: React.ReactElement) => {
        setSelectedItemState(item);
    }

    return (
        <>
            <div>
                <ElementNameTag size={EnumLabelSize.medium} name="ProductOptionSelector" />
            </div>
            <ItemListSelector
                selectedItem={selectedItemState}
                elements={optionsState}
                onItemSelected={handleItemSelected}
            />
        </>
    )
}

export default ProductOptionsSelector;