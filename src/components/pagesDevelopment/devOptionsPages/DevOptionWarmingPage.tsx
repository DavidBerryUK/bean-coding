import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdateProduct                     from '../../widgets/productContext/context/actions/CommandUpdate';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForWarming                        from '../../widgets/productContext/subComponents/OptionsForWarming';
import ProductContext                           from '../../widgets/productContext/context/productContext';
import productJson                              from './testData/CinnamonRaisinBagel.json'
import ProductParser                            from '../../../Services/productParser/ProductParser';
import React                                    from 'react';

const DevOptionWarmingPage: React.FC = () => {

    const dispatch = useContext(ProductContext).dispatch;
    
    useEffect(() => {
        // Load product and insert into context
        //
        const productParser = new ProductParser();
        const product = productParser.parseItem(productJson);
        dispatch( new CommandUpdateProduct(product));        
    },[dispatch]);    

    return (
        <DevelopmentMasterPageWrapper
            title="Option for Warming"
            description="UI Component for product Warming options"
            componentName="OptionsForWarming">
            <OptionsForWarming />
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionWarmingPage;
