import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { EnumCupSize }                          from "../../../Services/CupSize/EnumCupSize";
import { Paper }                                from '@material-ui/core';
import CupSizeModel                             from "../../../Services/CupSize/CupSizeModel";
import CupSizeService                           from "../../../Services/CupSize/CupSizeService";
import CupSizeThumbnail                         from "../../ui/CupSizeThumbnail/CupSizeThumbnail";
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import React                                    from 'react';

const DevCupSizeThumbnailPage: React.FC = () => {
   
    const classStyles = ClassStyleDefinition();    

    const cups : Array<CupSizeModel> = [
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


    return (
        <DevelopmentMasterPageWrapper 
            title="Cup Size Thumbnail"
            description="Provide a consistant thumbnail for cup sizes">            
            
            <Paper className={classStyles.paper}>                
                {
                    cups.map((cup: CupSizeModel) => (
                        <CupSizeThumbnail sizeName={cup.name} volumeDescription={cup.volume}  scalePercentage={cup.iconScale}/>
                    ))
                }               
            </Paper>

            </DevelopmentMasterPageWrapper>
    );
}

export default DevCupSizeThumbnailPage;
