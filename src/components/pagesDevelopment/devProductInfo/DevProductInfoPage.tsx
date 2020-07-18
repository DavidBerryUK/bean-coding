import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import { Paper }                                from '@material-ui/core';
import { useState }                             from 'react';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import MenuCategoryModel                        from '../../../repository/categoryRepository/models/MenuCategoryModel';
import MenuCategoryProductPicker                from "../../widgets/menuCategoryProductPicker/MenuCategoryProductPicker";
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductNutrition                         from '../../widgets/productNutrition/ProductNutrition';
import ProductSizeSelector                      from '../../widgets/productSizeSelector/ProductSizeSelector';
import React                                    from 'react';
import SizeModel                                from '../../../repository/productRepository/models/SizeModel';
import ProductRecipe from '../../widgets/productRecipe/ProductRecipe';

const DevProductInfoPage: React.FC = () => {

    const classStyles = ClassStyleDefinition();
    const [productState, setProductState] = useState<ProductModel>();
    const [sizeState, setSizeState] = useState<SizeModel>();

    const handleCategorySelected = (category: MenuCategoryModel) => {

    }

    const handleProductSelected = (product: ProductModel) => {
        setProductState(product)
    }

    const handleProductSizeSelected = (size: SizeModel) => {
        console.log("Size Selected");
        console.log(size);
        setSizeState(size);
    }

    return (
        <DevelopmentMasterPageWrapper
            title="Product Info"
            description="A development page used to explore the available product information"
            componentName="">
            <h1>Product Info</h1>

            <Box display="flex">

                <Box className={classStyles.productSelector}>
                    <MenuCategoryProductPicker
                        onCategorySelected={(category: MenuCategoryModel) => { handleCategorySelected(category) }}
                        onProductSelected={(product: ProductModel) => { handleProductSelected(product) }}
                    />
                </Box>
                <Box>

                    {productState !== undefined ?
                        <>                        
                        <Paper className={classStyles.productInfo}>
                            <div><ElementNameTag size={EnumLabelSize.medium} name="DevProductInfoPage"/></div>
                            <div className={classStyles.textLabel}>Name</div>
                            <div className={classStyles.textData}>{productState?.name}</div>

                            <div className={classStyles.textLabel}>Description</div>
                            <div className={classStyles.textData}>{productState?.description}</div>

                            <div className={classStyles.textLabel}>Product Number</div>
                            <div className={classStyles.textData}>{productState?.ProductId}</div>

                            <div className={classStyles.textLabel}>Filename thumbnail</div>
                            <div className={classStyles.textData}>{productState?.ImageThumbnailUri}</div>

                            <div className={classStyles.textLabel}>Filename large</div>
                            <div className={classStyles.textData}>{productState?.ImageFullSizeUri}</div>

                        </Paper>
                        <Paper className={classStyles.productInfo}>                            
                            <div className={classStyles.textLabel}>Sizes ({productState?.sizes.length})</div>
                            <ProductSizeSelector product={productState} onSizeSelected={(size: SizeModel) => handleProductSizeSelected(size)} />
                        </Paper>
                        <Paper className={classStyles.productInfo}>                            
                            <div className={classStyles.textLabel}>Product Recipe</div>
                            <ProductRecipe size={sizeState} />
                        </Paper>
                        <Paper className={classStyles.productInfo}>                            
                            <div className={classStyles.textLabel}>Product Nutrition</div>
                            <ProductNutrition size={sizeState} />
                        </Paper>

               
                
                        </>
                        : null}
                </Box>
            </Box>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevProductInfoPage;
