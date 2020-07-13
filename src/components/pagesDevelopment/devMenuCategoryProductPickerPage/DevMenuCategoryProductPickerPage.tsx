import { useContext }                           from 'react';
import CommandAddToAudit                        from '../../context/developerContext/actions/CommandAddToAudit';
import DeveloperContext                         from '../../context/developerContext/DeveloperContext';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import MenuCategoryModel                        from '../../../repository/categoryRepository/models/MenuCategoryModel';
import MenuCategoryProductPicker                from "../../widgets/menuCategoryProductPicker/MenuCategoryProductPicker";
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import React                                    from 'react';

const DevMenuCategoryProductPickerPage: React.FC = () => {

    const dispatch = useContext(DeveloperContext).dispatch;

    const handleCategorySelected = (category : MenuCategoryModel) => {
        dispatch(new CommandAddToAudit(`Category Selected ${category.name}`));
    }

    const handleProductSelected = (product : ProductModel) => {
        dispatch(new CommandAddToAudit(`Product Selected ${product.name}`));
    }

    return (
        <DevelopmentMasterPageWrapper
            title="Show Menu Category Product Picker"
            description='Show Menu Categories in a drill down menu, created to facilitate testing of other components, the component can be placed on a page to allow the developer to select a product for testing.'
            componentName="MenuCategoryProductPicker">
                        
            <MenuCategoryProductPicker
               onCategorySelected = {(category: MenuCategoryModel)=> { handleCategorySelected(category) }}
                onProductSelected = {(product: ProductModel)=> { handleProductSelected(product) }}
            />

        </DevelopmentMasterPageWrapper>
    );
}

export default DevMenuCategoryProductPickerPage;
