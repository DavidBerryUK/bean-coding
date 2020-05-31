// import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import React                                    from 'react';

const DevMenuHierarchicalListPage: React.FC = () => {

    // const classStyles = ClassStyleDefinition();  

    // const rootMenu = DemoMenuFactory.getMenuWithChildren();

    return (
        <DevelopmentMasterPageWrapper
            title="Menu Hierarchical List"
            description="UI Component present a consistent menu list, an array of MenuItemModel objects are provided as a property, the menu will either auto navigate if a route is provided, or raise a onMenuItemSelected event. The menu will also automatically drill down to child menus"            
        >
            <h2>menu</h2>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevMenuHierarchicalListPage;
