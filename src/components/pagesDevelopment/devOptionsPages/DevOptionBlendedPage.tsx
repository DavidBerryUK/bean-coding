import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdateProduct                     from '../../widgets/productContext/context/actions/CommandUpdate';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForBlended                        from '../../widgets/productContext/subComponents/OptionsForBlended';
import ProductContext                           from '../../widgets/productContext/context/productContext';
import productJson                              from './testData/CookiesAndCreamFrappuccino.json'
import ProductParser                            from '../../../Services/productParser/ProductParser';
import React                                    from 'react';

const DevOptionBlendedPage: React.FC = () => {

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
            title="Option for Blended"
            description="UI Component for product Blended options"
            componentName="OptionsForBlended">
            <OptionsForBlended />
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionBlendedPage;
