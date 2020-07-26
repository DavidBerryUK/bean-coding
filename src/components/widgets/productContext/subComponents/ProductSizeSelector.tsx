import { IProperties as ICupSizeProperties }    from "../../../ui/productSizeThumbnail/ProductSizeThumbnail";
import { ReactElement }                         from 'react';
import { useContext }                           from 'react';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import CommandUpdateProduct                            from "../context/actions/CommandUpdate";
import ItemListSelector                         from '../../../ui/itemListSelector/ItemListSelector';
import ProductContext                           from "../context/productContext";
import ProductSizeService                       from '../../../../Services/productParser/productSize/ProductSizeService';
import ProductSizeThumbnail                     from '../../../ui/productSizeThumbnail/ProductSizeThumbnail';
import React                                    from 'react';

const ProductSizeSelector: React.FC = (props) => {

    const productContext = useContext(ProductContext);
    var [selectedElement, setSelectedElement] = useState<React.ReactElement | null>(null);

    const [thumbnailCollectionState, setThumbnailCollectionState] = useState<Array<React.ReactElement>>(new Array<React.ReactElement>());

    useMemo(() => {
        const sizes = new Array<React.ReactElement>();
        productContext.state.product.sizes.forEach((size) => {
            const model = ProductSizeService.productSizeModelFactoryByName(size.name);
            const element = <ProductSizeThumbnail size={model} />
            sizes.push(element);
        });
        setThumbnailCollectionState(sizes);
    }, [productContext.state.product.sizes]);


    const handleItemSelected = (item: React.ReactElement) => {
        const properties = item.props as ICupSizeProperties;        
        const sizeModel = productContext.state.product.sizes.find((item) => item.name === properties.size.name);
        productContext.state.product.selectedSize = sizeModel;
        productContext.dispatch( new CommandUpdateProduct(productContext.state.product));
        
    }

    return (
        <ItemListSelector
            elements={thumbnailCollectionState}
            selectedItem={selectedElement}
            onItemSelected={(item: ReactElement) => { handleItemSelected(item) }} />
    )
}

export default ProductSizeSelector
