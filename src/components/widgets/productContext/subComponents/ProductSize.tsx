import { useContext }                           from 'react';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import CommandUpdateProduct                     from "../context/actions/CommandUpdate";
import ItemListSelector                         from '../../../ui/itemListSelector/ItemListSelector';
import ProductContext                           from "../context/productContext";
import ProductSizeService                       from '../../../../Services/productParser/productSize/ProductSizeService';
import ProductSizeThumbnail                     from '../../../ui/productSizeThumbnail/ProductSizeThumbnail';
import React                                    from 'react';
import SizeModel                                from '../../../../repository/productRepository/models/SizeModel';

interface IProperties {
    onSizeChanged?: (size : SizeModel ) => void
}

const ProductSize: React.FC<IProperties> = (props) => {

    const productContext = useContext(ProductContext);    

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
        const sizeModel = productContext.state.product.sizes[index];    
        productContext.state.product.selectedSize = sizeModel;        
        productContext.dispatch( new CommandUpdateProduct(productContext.state.product));
        if ( props.onSizeChanged ) {
            props.onSizeChanged(sizeModel);
        }
    }

    const calculatedSelectedIndex = () : number | undefined => {
        if ( productContext.state.product.selectedSize ) {
            const index = productContext.state.product.sizes.findIndex((item) => item.name === productContext.state.product.selectedSize?.name);
            return index;
        }
        return;
    }

    return (
        <ItemListSelector
            elements={thumbnailCollectionState}
            selectedIndex={calculatedSelectedIndex()}
            onItemSelected={(index: number) => { handleItemSelected(index) }} />
    )
}

export default ProductSize
