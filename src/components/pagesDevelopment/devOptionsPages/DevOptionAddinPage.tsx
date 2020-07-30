import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdateProduct                     from '../../widgets/productContext/context/actions/CommandUpdate';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForAddIns                         from "../../widgets/productContext/subComponents/OptionsForAddIns";
import ProductContext                           from '../../widgets/productContext/context/productContext';
import productJson                              from './testData/CaffeAmericano.json';
import ProductParser                            from '../../../Services/productParser/ProductParser';
import React                                    from 'react';

const DevOptionAddinPage: React.FC = () => {

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
            title="Option for Add-ins"
            description="UI Component for product Add-In options"
            componentName="OptionsForAddIns">
            <OptionsForAddIns />
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionAddinPage;
