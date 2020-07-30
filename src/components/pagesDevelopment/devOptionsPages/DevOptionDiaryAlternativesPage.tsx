import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdateProduct                     from '../../widgets/productContext/context/actions/CommandUpdate';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForDairyAlternatives              from '../../widgets/productContext/subComponents/OptionsForDairyAlternatives';
import ProductContext                           from '../../widgets/productContext/context/productContext';
import productJson                              from './testData/CookiesAndCreamFrappuccino.json'
import ProductParser                            from '../../../Services/productParser/ProductParser';
import React                                    from 'react';

const DevOptionDairyAlternativesPage: React.FC = () => {

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
            title="Option for Dairy Alternatives"
            description="UI Component for product Dairy Alternative options"
            componentName="OptionsForDairyAlternatives">
            <OptionsForDairyAlternatives />
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionDairyAlternativesPage;
