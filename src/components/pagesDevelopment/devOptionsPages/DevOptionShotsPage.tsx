import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForShots                          from '../../widgets/productContext/subComponents/OptionsForShot';
import React                                    from 'react';

const DevOptionShotsPage: React.FC = () => {

    return (
        <DevelopmentMasterPageWrapper
            title="Option for Shots"
            description="UI Component for product Shot options"
            componentName="OptionsForShots">
            <OptionsForShots/>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionShotsPage;
