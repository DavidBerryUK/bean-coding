import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdateProduct                     from '../../widgets/productContext/context/actions/CommandUpdate';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForButtersAndSpreads              from '../../widgets/productContext/subComponents/OptionsForButtersAndSpreads';
import ProductContext                           from '../../widgets/productContext/context/productContext';
import productJson                              from './testData/CinnamonRaisinBagel.json'
import ProductParser                            from '../../../Services/productParser/ProductParser';
import React                                    from 'react';

const DevOptionButtersAndSpreadsPage: React.FC = () => {

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
            title="Option for Butters and Spreads"
            description="UI Component for product Butters and Spreads options"
            componentName="OptionsForButtersAndSpreads">
            <OptionsForButtersAndSpreads/>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionButtersAndSpreadsPage;
