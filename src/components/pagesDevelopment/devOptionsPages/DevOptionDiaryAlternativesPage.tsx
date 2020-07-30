import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForDairyAlternatives              from '../../widgets/productContext/subComponents/OptionsForDairyAlternatives';
import React                                    from 'react';

const DevOptionDairyAlternativesPage: React.FC = () => {

    return (
        <DevelopmentMasterPageWrapper
            title="Option for Dairy Alternatives"
            description="UI Component for product Dairy Alternative options"
            componentName="OptionsForDairyAlternatives">
            <OptionsForDairyAlternatives />
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionDairyAlternativesPage;
