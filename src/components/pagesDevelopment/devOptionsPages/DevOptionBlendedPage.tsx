import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForBlended                        from '../../widgets/productContext/subComponents/OptionsForBlended';
import React                                    from 'react';

const DevOptionBlendedPage: React.FC = () => {

    return (
        <DevelopmentMasterPageWrapper
            title="Option for Blended"
            description="UI Component for product Blended options"
            componentName="OptionsForBlended">
            <OptionsForBlended/>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionBlendedPage;
