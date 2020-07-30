import DevelopmentMasterPageWrapper from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import OptionsForWarming                        from '../../widgets/productContext/subComponents/OptionsForWarming';
import React                                    from 'react';

const DevOptionWarmingPage: React.FC = () => {

    return (
        <DevelopmentMasterPageWrapper
            title="Option for Warming"
            description="UI Component for product Warming options"
            componentName="OptionsForWarming">
            <OptionsForWarming />
        </DevelopmentMasterPageWrapper>
    );
}

export default DevOptionWarmingPage;
