import { EnumProductSize }                          from "../../../Services/productParser/productSize/EnumProductEnums";
import ProductSizeModel                             from "../../../Services/productParser/productSize/ProductSizeModel";
import ProductSizeService                           from "../../../Services/productParser/productSize/ProductSizeService";
import ProductSizeThumbnail                         from "../../ui/productSizeThumbnail/ProductSizeThumbnail";
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import React                                    from 'react';

const DevCupSizeThumbnailPage: React.FC = () => {


    const cups : Array<ProductSizeModel> = [
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


    return (
        <DevelopmentMasterPageWrapper 
            title="Cup Size Thumbnail"
            description="Provide a consistant thumbnail for cup sizes"
            componentName="CupSizeThumbnail">            
                        
                {
                    cups.map((size: ProductSizeModel, index) => (
                        <ProductSizeThumbnail key={index} size={size}/>
                    ))
                }               
            

            </DevelopmentMasterPageWrapper>
    );
}

export default DevCupSizeThumbnailPage;
