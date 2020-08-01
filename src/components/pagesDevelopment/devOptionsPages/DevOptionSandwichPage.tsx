import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdateProduct                     from '../../widgets/productContext/context/actions/CommandUpdate';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForSandwich                      from '../../widgets/productContext/subComponents/OptionsForSandwich';
import ProductContext                           from '../../widgets/productContext/context/productContext';
import productJson                              from './testData/FreeRangeEggAndMayoSandwich.json';
import ProductParser                            from '../../../Services/productParser/ProductParser';
import React                                    from 'react';

const DevOptionSandwichPage: React.FC = () => {

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
            title="Option for Sandwichs"
            description="UI Component for product Sandwich options"
            componentName="OptionsForSandwich">
            <OptionsForSandwich />
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionSandwichPage;
