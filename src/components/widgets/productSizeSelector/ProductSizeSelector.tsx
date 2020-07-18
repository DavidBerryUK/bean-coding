import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import { IProperties as ICupSizeProperties }    from "../../ui/productSizeThumbnail/ProductSizeThumbnail";
import { ReactElement }                         from 'react';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ItemListSelector                         from '../../ui/itemListSelector/ItemListSelector';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductSizeModel                         from '../../../Services/productSize/ProductSizeModel';
import ProductSizeService                       from '../../../Services/productSize/ProductSizeService';
import ProductSizeThumbnail                     from "../../ui/productSizeThumbnail/ProductSizeThumbnail";
import React                                    from 'react';

interface IProperties {
    product: ProductModel
}

const ProductSizeSelector: React.FC<IProperties> = (props) => {

    //eslint-disable-next-line
    var [selectedSize, setSelectedSize] = useState<ProductSizeModel>();

    const [sizeCollectionState, setSizeCollectionState] = useState<Array<ProductSizeModel>>(new Array<ProductSizeModel>());

    useMemo(() => {

        const sizes = new Array<ProductSizeModel>();

        props.product.sizes.forEach((size) => {

           const model = ProductSizeService.productSizeModelFactoryByName(size.name);
           sizes.push(model);
        });

        setSizeCollectionState(sizes);

    },[props.product.sizes]);

    //eslint-disable-next-line
    const handleSizeSelectedClicked = (event: React.MouseEvent<HTMLElement>, size: ProductSizeModel) => {
        setSelectedSize(size)
    }

    const handleItemSelected = (item: React.ReactElement) => { 
        const properties = item.props as ICupSizeProperties;        
        console.log(properties);
    }

    const productThumbnailsElements = sizeCollectionState.map((size) => 
        <ProductSizeThumbnail size={size}/>
    );

    return (
        <>
        <div>
            <ElementNameTag size={EnumLabelSize.medium} name="ProductSizeSelector"/>
        </div>
        <ItemListSelector elements={productThumbnailsElements} 
            onItemSelected={(item:ReactElement)=>{ handleItemSelected(item)}}/>            
        </>
    )
}

export default ProductSizeSelector
