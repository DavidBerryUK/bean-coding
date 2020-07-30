import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdateProduct                     from '../../widgets/productContext/context/actions/CommandUpdate';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForToppings                       from '../../widgets/productContext/subComponents/OptionsForToppings';
import ProductContext                           from '../../widgets/productContext/context/productContext';
import productJson                              from './testData/CookiesAndCreamFrappuccino.json'
import ProductParser                            from '../../../Services/productParser/ProductParser';
import React                                    from 'react';

const DevOptionToppingsPage: React.FC = () => {

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
            title="Option for Toppings"
            description="UI Component for product Toppings options"
            componentName="OptionsForToppings">
            <OptionsForToppings />
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionToppingsPage;
