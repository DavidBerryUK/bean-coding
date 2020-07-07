import { EnumCupSize }                          from "../../../Services/cupSize/EnumCupSize";
import CupSizeModel                             from "../../../Services/cupSize/CupSizeModel";
import CupSizeService                           from "../../../Services/cupSize/CupSizeService";
import CupSizeThumbnail                         from "../../ui/CupSizeThumbnail/CupSizeThumbnail";
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import React                                    from 'react';

const DevCupSizeThumbnailPage: React.FC = () => {


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
            description="Provide a consistant thumbnail for cup sizes"
            componentName="<CupSizeThumbnail/>">            
                        
                {
                    cups.map((cup: CupSizeModel, index) => (
                        <CupSizeThumbnail key={index} sizeName={cup.name} volumeDescription={cup.volume}  scalePercentage={cup.iconScale}/>
                    ))
                }               
            

            </DevelopmentMasterPageWrapper>
    );
}

export default DevCupSizeThumbnailPage;
