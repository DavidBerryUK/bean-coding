import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForSandwhich                      from '../../widgets/productContext/subComponents/OptionsForSandwhich';
import React                                    from 'react';

const DevOptionSandwhichPage: React.FC = () => {

    return (
        <DevelopmentMasterPageWrapper
            title="Option for Sandwhichs"
            description="UI Component for product Sandwhich options"
            componentName="OptionsForSandwhich">
            <OptionsForSandwhich />
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionSandwhichPage;
