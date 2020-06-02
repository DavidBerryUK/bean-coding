import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { useContext }                           from 'react';
import CommandAddToAudit                        from "../../context/developerContext/actions/CommandAddToAudit";
import DemoMenuFactory                          from './DemoMenuFactory';
import DeveloperContext                         from "../../context/developerContext/DeveloperContext";
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import MenuHierachicalList                      from '../../ui/menuHierachicalList/MenuHierachicalList';
import MenuItemModel                            from "../../ui/menuList/MenuItemModel";
import React                                    from 'react';

const DevMenuHierarchicalListPage: React.FC = () => {

    const classStyles = ClassStyleDefinition();  
    const dispatch = useContext(DeveloperContext).dispatch;
    const rootMenu = DemoMenuFactory.getMenuWithChildren();

    const handleMenuItemSelected = (menuItem: MenuItemModel) => {
        dispatch(new CommandAddToAudit(`Item Selected [id:${menuItem.id}] ${menuItem.name}`));
    }

    return (
        <DevelopmentMasterPageWrapper
            title="Menu Hierarchical List"
            description="UI Component present a consistent menu list, an array of MenuItemModel objects are provided as a property, the menu will either auto navigate if a route is provided, or raise a onMenuItemSelected event. The menu will also automatically drill down to child menus"            
        >
            <div className={classStyles.menuContainer}>
            <MenuHierachicalList rootMenuItem={rootMenu}  onMenuItemSelected={(menuItem: MenuItemModel) => {handleMenuItemSelected(menuItem)}}/>
            </div>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevMenuHierarchicalListPage;
