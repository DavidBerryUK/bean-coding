import { EnumProductSize }                      from "../../../Services/productSize/EnumProductEnums";
import { IProperties as ICupSizeProperties }    from "../../ui/productSizeThumbnail/ProductSizeThumbnail";
import { ReactElement }                         from 'react';
import { useContext }                           from 'react';
import CommandAddToAudit                        from "../../context/developerContext/actions/CommandAddToAudit";
import ProductSizeModel                         from "../../../Services/productSize/ProductSizeModel";
import ProductSizeService                       from "../../../Services/productSize/ProductSizeService";
import ProductSizeThumbnail                     from "../../ui/productSizeThumbnail/ProductSizeThumbnail";
import DeveloperContext                         from "../../context/developerContext/DeveloperContext";
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import ItemListSelector                         from "../../ui/itemListSelector/ItemListSelector";
import React                                    from 'react';

const DevItemListSelectorPage: React.FC = () => {
   
    const dispatch = useContext(DeveloperContext).dispatch;

    const cupModels : Array<ProductSizeModel> = [
        ProductSizeService.productSizeModelfactory(EnumProductSize.Solo),
        ProductSizeService.productSizeModelfactory(EnumProductSize.Doppio),
        ProductSizeService.productSizeModelfactory(EnumProductSize.Demo),
        ProductSizeService.productSizeModelfactory(EnumProductSize.Triple),
        ProductSizeService.productSizeModelfactory(EnumProductSize.Quad),
        ProductSizeService.productSizeModelfactory(EnumProductSize.Short),
        ProductSizeService.productSizeModelfactory(EnumProductSize.Tall),
        ProductSizeService.productSizeModelfactory(EnumProductSize.Grande),
        ProductSizeService.productSizeModelfactory(EnumProductSize.Venti)
    ]

    const cupThumbnailsElements = cupModels.map((size) => 
        <ProductSizeThumbnail size={size} />
    );

    const handleItemSelected = (item: React.ReactElement) => { 
        const properties = item.props as ICupSizeProperties;
        dispatch(new CommandAddToAudit(`Selected ${properties.size.name} ${properties.size.volume}`));
    }

    return (
        <DevelopmentMasterPageWrapper 
            title="Item List Selected"
            description="UI Component to select an item from a list of components, this example shows a list of <CupSizeThumbnail> elements"
            componentName="ItemListSelector">                                    
            <ItemListSelector elements={cupThumbnailsElements} onItemSelected={(item:ReactElement)=>{ handleItemSelected(item)}}/>            
            </DevelopmentMasterPageWrapper>
    );
}

export default DevItemListSelectorPage;
