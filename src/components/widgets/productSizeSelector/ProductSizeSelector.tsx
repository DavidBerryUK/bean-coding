import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import { IProperties as ICupSizeProperties }    from "../../ui/CupSizeThumbnail/CupSizeThumbnail";
import { ReactElement }                         from 'react';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import CupSizeModel                             from '../../../Services/cupSize/CupSizeModel';
import CupSizeService                           from '../../../Services/cupSize/CupSizeService';
import CupSizeThumbnail                         from "../../ui/CupSizeThumbnail/CupSizeThumbnail";
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ItemListSelector                         from '../../ui/itemListSelector/ItemListSelector';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductSizeModel                         from '../../../repository/productRepository/models/SizeModel';
import React                                    from 'react';

interface IProperties {
    product: ProductModel
}

const ProductSizeSelector: React.FC<IProperties> = (props) => {

    var [selectedSize, setSelectedSize] = useState<ProductSizeModel>();

    const [sizeCollectionState, setSizeCollectionState] = useState<Array<CupSizeModel>>(new Array<CupSizeModel>());

    useMemo(() => {

        const sizes = new Array<CupSizeModel>();

        props.product.sizes.forEach((size) => {

           const model = CupSizeService.cupSizeModelFactoryByName(size.name);
           sizes.push(model);
        });

        setSizeCollectionState(sizes);

    },[props.product.sizes]);

    const handleSizeSelectedClicked = (event: React.MouseEvent<HTMLElement>, size: ProductSizeModel) => {
        setSelectedSize(size)
    }

    const handleItemSelected = (item: React.ReactElement) => { 
        const properties = item.props as ICupSizeProperties;        
        console.log(properties);
    }

    const cupThumbnailsElements = sizeCollectionState.map((cup) => 
        <CupSizeThumbnail sizeName={cup.name} volumeDescription={cup.volume} scalePercentage={cup.iconScale}/>
    );

    return (
        <>
        <div>
        <ElementNameTag size={EnumLabelSize.medium} name="ProductSizeSelector"/>
        </div>


        <ItemListSelector elements={cupThumbnailsElements} 
        onItemSelected={(item:ReactElement)=>{ handleItemSelected(item)}}/>            

        {/* <ToggleButtonGroup
            exclusive
            value={selectedSize}
            onChange={handleSizeSelectedClicked}
            color="primary"
            size="medium">

            {props.product.sizes.map((item) => (
                <ToggleButton key={item.name} value={item.name}>{item.name}</ToggleButton>
            ))}
        </ToggleButtonGroup> */}
        </>
    )
}

export default ProductSizeSelector
