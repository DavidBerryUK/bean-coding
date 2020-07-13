import { EnumCupSize }                          from "../../../Services/cupSize/EnumCupSize";
import { IProperties as ICupSizeProperties }    from "../../ui/CupSizeThumbnail/CupSizeThumbnail";
import { ReactElement }                         from 'react';
import { useContext }                           from 'react';
import CommandAddToAudit                        from "../../context/developerContext/actions/CommandAddToAudit";
import CupSizeModel                             from "../../../Services/cupSize/CupSizeModel";
import CupSizeService                           from "../../../Services/cupSize/CupSizeService";
import CupSizeThumbnail                         from "../../ui/CupSizeThumbnail/CupSizeThumbnail";
import DeveloperContext                         from "../../context/developerContext/DeveloperContext";
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import ItemListSelector                         from "../../ui/itemListSelector/ItemListSelector";
import React                                    from 'react';

const DevItemListSelectorPage: React.FC = () => {
   
    const dispatch = useContext(DeveloperContext).dispatch;

    const cupModels : Array<CupSizeModel> = [
        CupSizeService.cupSizeModelfactory(EnumCupSize.Solo),
        CupSizeService.cupSizeModelfactory(EnumCupSize.Doppio),
        CupSizeService.cupSizeModelfactory(EnumCupSize.Demo),
        CupSizeService.cupSizeModelfactory(EnumCupSize.Triple),
        CupSizeService.cupSizeModelfactory(EnumCupSize.Quad),
        CupSizeService.cupSizeModelfactory(EnumCupSize.Short),
        CupSizeService.cupSizeModelfactory(EnumCupSize.Tall),
        CupSizeService.cupSizeModelfactory(EnumCupSize.Grande),
        CupSizeService.cupSizeModelfactory(EnumCupSize.Venti)
    ]

    const cupThumbnailsElements = cupModels.map((cup) => 
        <CupSizeThumbnail sizeName={cup.name} volumeDescription={cup.volume} scalePercentage={cup.iconScale}/>
    );

    const handleItemSelected = (item: React.ReactElement) => { 
        const properties = item.props as ICupSizeProperties;
        dispatch(new CommandAddToAudit(`Selected ${properties.sizeName} ${properties.volumeDescription}`));
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
