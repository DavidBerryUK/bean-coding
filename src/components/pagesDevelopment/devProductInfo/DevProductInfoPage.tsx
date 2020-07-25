import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { ProductContextProvider }               from '../../widgets/productContext/context/productContext';
import { useState }                             from 'react';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import MenuCategoryModel                        from '../../../repository/categoryRepository/models/MenuCategoryModel';
import MenuCategoryProductPicker                from "../../widgets/menuCategoryProductPicker/MenuCategoryProductPicker";
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductViewWidget                        from '../../widgets/productContext/ProductViewWidget';
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
            componentName="">
            <ProductContextProvider>
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
                                    <ProductViewWidget product={productState} />
                                </Paper>
                            </>
                            : null}
                    </Box>
                </Box>
            </ProductContextProvider>
        </DevelopmentMasterPageWrapper>
    );
}

export default DevProductInfoPage;
