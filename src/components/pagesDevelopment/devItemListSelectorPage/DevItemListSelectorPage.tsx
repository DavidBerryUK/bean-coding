import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { EnumCupSize }                          from "../../../Services/CupSize/EnumCupSize";
import { Paper }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import CupSizeModel                             from "../../../Services/CupSize/CupSizeModel";
import CupSizeService                           from "../../../Services/CupSize/CupSizeService";
import CupSizeThumbnail                         from "../../ui/CupSizeThumbnail/CupSizeThumbnail";
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import ItemListSelector                         from "../../ui/itemListSelector/ItemListSelector";
import React                                    from 'react';

const DevItemListSelectorPage: React.FC = () => {
   
    const classStyles = ClassStyleDefinition();    

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

    return (
        <DevelopmentMasterPageWrapper 
            title="Item List Selected"
            description="UI Component to select an item from a list of components, this example shows a list of <CupSizeThumbnail> elements"
            headerElement= {
                <Paper className={classStyles.paper}>
                    <Typography variant="subtitle1" color="textSecondary">Example component using an array of cup thumbnails</Typography>
                </Paper>
            }
            >                                    
            <ItemListSelector elements={cupThumbnailsElements}/>            
            </DevelopmentMasterPageWrapper>
    );
}

export default DevItemListSelectorPage;
