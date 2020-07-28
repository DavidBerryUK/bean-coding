import { useContext }                           from 'react';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import CommandUpdateProduct                            from "../context/actions/CommandUpdate";
import ItemListSelector                         from '../../../ui/itemListSelector/ItemListSelector';
import ProductContext                           from "../context/productContext";
import ProductSizeService                       from '../../../../Services/productParser/productSize/ProductSizeService';
import ProductSizeThumbnail                     from '../../../ui/productSizeThumbnail/ProductSizeThumbnail';
import React                                    from 'react';

const ProductSize: React.FC = () => {

    const productContext = useContext(ProductContext);
    var [selectedIndexState, setSelectedIndexState] = useState<number | undefined>();

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


    const handleItemSelected = (index: number) => {        
        setSelectedIndexState(index);
        const sizeModel = productContext.state.product.sizes[index];    
        productContext.state.product.selectedSize = sizeModel;
        productContext.dispatch( new CommandUpdateProduct(productContext.state.product));
    }

    return (
        <ItemListSelector
            elements={thumbnailCollectionState}
            selectedIndex={selectedIndexState}
            onItemSelected={(index: number) => { handleItemSelected(index) }} />
    )
}

export default ProductSize
