import DevelopmentMasterPageWrapper from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForToppings                       from '../../widgets/productContext/subComponents/OptionsForToppings';
import React                                    from 'react';

const DevOptionToppingsPage: React.FC = () => {

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
