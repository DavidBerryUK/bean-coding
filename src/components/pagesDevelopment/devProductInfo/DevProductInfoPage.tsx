import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { useState }                             from 'react';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import MenuCategoryModel                        from '../../../repository/categoryRepository/models/MenuCategoryModel';
import MenuCategoryProductPicker                from "../../widgets/menuCategoryProductPicker/MenuCategoryProductPicker";
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductOptionsList                       from '../../widgets/productOptionsList/ProductOptionsList';
import ProductSizeSelector                      from '../../widgets/productSizeSelector/ProductSizeSelector';
import React                                    from 'react';

const DevProductInfoPage: React.FC = () => {

    const classStyles = ClassStyleDefinition();
    const [productState, setProductState] = useState<ProductModel>();

    const handleCategorySelected = (category: MenuCategoryModel) => {

    }

    const handleProductSelected = (product: ProductModel) => {
        setProductState(product)
    }

    return (
        <DevelopmentMasterPageWrapper
            title="Product Info"
            description="A development page used to explore the available product information"
            componentName="</>">
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
                    <Paper className={classStyles.productInfo}>
                        <div className={classStyles.textLabel}>Name</div>
                        <div className={classStyles.textData}>{productState?.name}</div>

                        <div className={classStyles.textLabel}>Description</div>
                        <div className={classStyles.textData}>{productState?.description}</div>

                        <div className={classStyles.textLabel}>Product Number</div>
                        <div className={classStyles.textData}>{productState?.productNumber}</div>

                        <div className={classStyles.textLabel}>Filename thumbnail</div>
                        <div className={classStyles.textData}>{productState?.filenameThumbnail}</div>

                        <div className={classStyles.textLabel}>Filename large</div>
                        <div className={classStyles.textData}>{productState?.filenameLarge}</div>

                        <div className={classStyles.textLabel}>Sizes ({productState?.sizes.length})</div>                        
                        <ProductSizeSelector product={productState}/>
                        
                        <div className={classStyles.textLabel}>Options Count ({productState?.options.length})</div>
                        <ProductOptionsList product={productState}/>

                        
                    </Paper>
                    : null }
            </Box>


            </Box>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevProductInfoPage;
