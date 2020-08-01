import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForSandwich                      from '../../widgets/productContext/subComponents/OptionsForSandwich';
import React                                    from 'react';

const DevOptionSandwichPage: React.FC = () => {

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
