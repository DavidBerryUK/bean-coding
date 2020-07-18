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

    const [optionsState, setOptionsState] = useState<Array<React.ReactElement>>(new Array<React.ReactElement>());

    useMemo(() => {
        if (props.product.options) {
            const elements = props.product.options.map((option) => (<ProductOptionThumbnail option={option} />));
            setOptionsState(elements);
        }
    }, [props.product]);

    return (
        <>
        <div>
        <ElementNameTag size={EnumLabelSize.medium} name="ProductOptionSelector"/>
        </div>
        <ItemListSelector elements={optionsState} />
        </>
    )
}

export default ProductOptionsSelector;