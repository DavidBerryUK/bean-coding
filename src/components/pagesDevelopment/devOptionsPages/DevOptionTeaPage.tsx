import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdateProduct                     from '../../widgets/productContext/context/actions/CommandUpdate';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForTea                            from '../../widgets/productContext/subComponents/OptionsForTea';
import ProductContext                           from '../../widgets/productContext/context/productContext';
import productJson                              from './testData/MintCitrusTea.json'
import ProductParser                            from '../../../Services/productParser/ProductParser';
import React                                    from 'react';

const DevOptionTeaPage: React.FC = () => {

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
            title="Option for Teas"
            description="UI Component for product Tea options"
            componentName="OptionsForTea">
            <OptionsForTea />
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionTeaPage;
