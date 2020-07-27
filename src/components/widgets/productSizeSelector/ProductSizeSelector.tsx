import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ItemListSelector                         from '../../ui/itemListSelector/ItemListSelector';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductSizeModel                         from '../../../Services/productParser/productSize/ProductSizeModel';
import ProductSizeService                       from '../../../Services/productParser/productSize/ProductSizeService';
import ProductSizeThumbnail                     from "../../ui/productSizeThumbnail/ProductSizeThumbnail";
import React                                    from 'react';
import SizeModel                                from '../../../repository/productRepository/models/SizeModel';

interface IProperties {
    product: ProductModel,
    selectedSize?: SizeModel,
    onSizeSelected?: (size: SizeModel) => void
}

const ProductSizeSelector: React.FC<IProperties> = (props) => {

    var [selectedIndexState, setSelectedIndexState] = useState<number | undefined>();
    const [sizeElementsState, setSizeElementsState] = useState<Array<React.ReactElement>>(new Array<React.ReactElement>());

    useMemo(() => {
        const sizes = new Array<React.ReactElement>();
        props.product.sizes.forEach((size) => {
            const model = ProductSizeService.productSizeModelFactoryByName(size.name);
            const element = <ProductSizeThumbnail size={model} />
            sizes.push(element);
        });
        setSizeElementsState(sizes);
    }, [props.product.sizes]);

    useMemo(() => {
        if (props.selectedSize) {
            const index = props.product.sizes.indexOf(props.selectedSize);
            if ( index < 0){
                setSelectedIndexState(undefined);
            } else {
                setSelectedIndexState(index);
            }
            
        }
    }, [props.product.sizes, props.selectedSize])

    //eslint-disable-next-line
    const handleSizeSelectedClicked = (event: React.MouseEvent<HTMLElement>, size: ProductSizeModel) => {
        if (props.onSizeSelected) {
            const selectedSize = props.product.sizes.find((item) => item.name === size.name);
            if (selectedSize) {
                props.onSizeSelected(selectedSize);
            }
        }
    }

    const handleItemSelected = (index: number) => {
        
        if (props.onSizeSelected) {
            const sizeModel = props.product.sizes[index];
            if (sizeModel) {
                props.onSizeSelected(sizeModel);
            }
        }
    }

    return (
        <>
            <div>
                <ElementNameTag size={EnumLabelSize.medium} name="ProductSizeSelector" />
            </div>
            <ItemListSelector
                elements={sizeElementsState}
                selectedIndex={selectedIndexState}
                onItemSelected={(index: number) => { handleItemSelected(index) }} />
        </>
    )
}

export default ProductSizeSelector
