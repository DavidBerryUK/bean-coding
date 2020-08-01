import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { EnumDevelopmentRoutes }                from '../../routes/Development/DevelopmentRouteConstants';
import { Paper }                                from '@material-ui/core';
import { ProductContextProvider }               from '../../widgets/productContext/context/productContext';
import { useEffect }                            from 'react';
import { useHistory }                           from 'react-router-dom';
import { useLocation}                           from "react-router";
import { useState }                             from 'react';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import MenuCategoryModel                        from '../../../repository/categoryRepository/models/MenuCategoryModel';
import MenuCategoryProductPicker                from "../../widgets/menuCategoryProductPicker/MenuCategoryProductPicker";
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductRepository                        from '../../../repository/productRepository/ProductRepository';
import ProductViewWidget                        from '../../widgets/productContext/ProductViewWidget';
import React                                    from 'react';
import SizeModel                                from '../../../repository/productRepository/models/SizeModel';

const DevProductInfoPage: React.FC = () => {

    const classStyles = ClassStyleDefinition();
    const [productState, setProductState] = useState<ProductModel>();

    let history = useHistory();
    let location = useLocation();
    

    useEffect(() => {   
        
        function loadProductFromUrl() {
            let path = location.pathname.replace(EnumDevelopmentRoutes.ProductInfo,'');
            if ( path.startsWith('/')) {
                path = path.substr(1);
            }
            const pathElements = path.split('/');
            const productId = Number(pathElements[0]);
            const sizeName = pathElements.length > 1 ? pathElements[1] : '';            
            var productRepository = new ProductRepository();
            var product = productRepository.getProductbyId(productId);
            if ( product) {
                if (  sizeName.length > 0  ) {
                    product.selectedSize = product.sizes.find((item) => item.name === sizeName);
                }
                setProductState(product);
            }
        }

        if ( productState === undefined) {            
            loadProductFromUrl();
        }        
    },[location.pathname,productState])


    const handleCategorySelected = (category: MenuCategoryModel) => {

    }

    const handleOnProductSizeChanged = (size: SizeModel) => {        
        history.push(`${EnumDevelopmentRoutes.ProductInfo}/${productState?.ProductId}/${size.name}`)
    }

    const handleProductSelected = (product: ProductModel) => {
        setProductState(product)
        history.push(`${EnumDevelopmentRoutes.ProductInfo}/${product.ProductId}`)
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
                                    <ProductViewWidget 
                                    product={productState} 
                                    onSizeChanged={(size: SizeModel) => {handleOnProductSizeChanged(size)}}/>
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
