import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import clsx                                     from 'clsx';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import MenuSliderMechanism                      from './MenuSliderMechanism';
import React                                    from 'react';

const DevMenuSliderDevelopmentPage: React.FC = () => {

    const classStyles = ClassStyleDefinition();

    return (
        <DevelopmentMasterPageWrapper
            title="Menu Slider Development Page"
            description="Prototype menu slider mechanism">
            <div className={clsx(classStyles.menuContainer, classStyles.solidBackground, classStyles.constrainMenu)}>
                <MenuSliderMechanism />
            </div>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevMenuSliderDevelopmentPage;
