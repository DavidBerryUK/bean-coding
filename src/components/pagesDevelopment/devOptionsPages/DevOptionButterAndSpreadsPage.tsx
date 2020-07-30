import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForButtersAndSpreads              from '../../widgets/productContext/subComponents/OptionsForButtersAndSpreads';
import React                                    from 'react';

const DevOptionButtersAndSpreadsPage: React.FC = () => {

    return (
        <DevelopmentMasterPageWrapper
            title="Option for Butters and Spreads"
            description="UI Component for product Butters and Spreads options"
            componentName="OptionsForButtersAndSpreads">
            <OptionsForButtersAndSpreads/>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionButtersAndSpreadsPage;
