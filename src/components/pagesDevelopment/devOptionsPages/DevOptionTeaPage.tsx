import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForTea                            from '../../widgets/productContext/subComponents/OptionsForTea';
import React                                    from 'react';

const DevOptionTeaPage: React.FC = () => {

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
