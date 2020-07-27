import { EnumProductSize }                      from "../../../Services/productParser/productSize/EnumProductEnums";
import { useContext }                           from 'react';
import { useState }                             from 'react';
import CommandAddToAudit                        from "../../context/developerContext/actions/CommandAddToAudit";
import DeveloperContext                         from "../../context/developerContext/DeveloperContext";
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import ItemListSelector                         from "../../ui/itemListSelector/ItemListSelector";
import ProductSizeModel                         from "../../../Services/productParser/productSize/ProductSizeModel";
import ProductSizeService                       from "../../../Services/productParser/productSize/ProductSizeService";
import ProductSizeThumbnail                     from "../../ui/productSizeThumbnail/ProductSizeThumbnail";
import React                                    from 'react';

const DevItemListSelectorPage: React.FC = () => {

    const [selectedIndexState, setSelectedIndexState] = useState<number | undefined>()
    const dispatch = useContext(DeveloperContext).dispatch;

    const cupModels: Array<ProductSizeModel> = [
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

    const handleItemSelected = (index: number) => {
        setSelectedIndexState(index);        
        const item = cupModels[index];
        dispatch(new CommandAddToAudit(`Selected ${item.name} ${item.volume}`));
    }

    return (
        <DevelopmentMasterPageWrapper
            title="Item List Selected"
            description="UI Component to select an item from a list of components, this example shows a list of <CupSizeThumbnail> elements"
            componentName="ItemListSelector">
            <ItemListSelector
                elements={cupThumbnailsElements}
                selectedIndex={selectedIndexState}
                onItemSelected={(index: number) => { handleItemSelected(index) }} />
        </DevelopmentMasterPageWrapper>
    );
}

export default DevItemListSelectorPage;
