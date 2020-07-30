import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForFlavours                       from '../../widgets/productContext/subComponents/OptionsForFlavours';
import React                                    from 'react';

const DevOptionFlavoursPage: React.FC = () => {

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
