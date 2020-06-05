import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import MenuCategoryRepository                   from '../../../repository/categoryRepository/MenuCategoryRepository';
import MenuHierachicalList                      from '../../ui/menuHierachicalList/MenuHierachicalList';
import React                                    from 'react';
import MenuHelperForCategories                  from "../../../Services/MenuHelpers/MenuHelperForCategories";

const DevMenuCategoriesPage: React.FC = () => {    

    const classStyles = ClassStyleDefinition();  
    const menuCategoryRepository = new MenuCategoryRepository();
    const categories = menuCategoryRepository.getAll();    

    const menuCategories = MenuHelperForCategories.convertCategoriesToMenuObjects(categories);

    return (
        <DevelopmentMasterPageWrapper
            title="Show Menu Categories"
            description= 'Show Menu Categories in a drill down menu, created to facilitate testing of other components'
            componentName="<????/>"            
        >            
        <div className={classStyles.menuContainer}>
            <MenuHierachicalList rootMenuItem={menuCategories}/>
        </div>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevMenuCategoriesPage;
