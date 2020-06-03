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
            description="Prototype menu slider mechanism, rough and ready, exploring how to cleanly seperate menu contents / components from the high level management of menus"
            componentName="<MenuSliderMechanism>">
            <div className={clsx(classStyles.menuContainer, classStyles.solidBackground, classStyles.constrainMenu)}>
                <MenuSliderMechanism />
            </div>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevMenuSliderDevelopmentPage;
