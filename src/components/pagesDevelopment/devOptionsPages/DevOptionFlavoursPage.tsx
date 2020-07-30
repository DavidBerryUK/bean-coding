import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdateProduct                     from '../../widgets/productContext/context/actions/CommandUpdate';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForFlavours                       from '../../widgets/productContext/subComponents/OptionsForFlavours';
import ProductContext                           from '../../widgets/productContext/context/productContext';
import productJson                              from './testData/CaffeAmericano.json';
import ProductParser                            from '../../../Services/productParser/ProductParser';
import React                                    from 'react';

const DevOptionFlavoursPage: React.FC = () => {

    const dispatch = useContext(ProductContext).dispatch;

    useEffect(() => {
        // Load product and insert into context
        //
        const productParser = new ProductParser();
        const product = productParser.parseItem(productJson);
        dispatch(new CommandUpdateProduct(product));
    }, [dispatch]);

    return (
        <DevelopmentMasterPageWrapper
            title="Option for Flavours"
            description="UI Component for product Flavour options"
            componentName="OptionsForFlavours">
            <OptionsForFlavours />
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionFlavoursPage;
