import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForAddIns                         from "../../widgets/productContext/subComponents/OptionsForAddIns";
import React                                    from 'react';

const DevOptionAddinPage: React.FC = () => {

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
