import './Styles.scss';
import { useState }                             from 'react';
import CategoryList                             from '../../widgets/categoryList/CategoryList';
import CategoryModel                            from '../../../repository/categoryRepository/models/CategoryModel';
import ProductList                              from '../../widgets/productList/ProductList';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import React                                    from 'react';

const TillPage: React.FC = () => {

    const [category, setCategory] = useState<CategoryModel>();


    const handleCategoryClicked = (category: CategoryModel) => {
        setCategory(category);
    }

    const handleProductClicked = (product: ProductModel) => {

    }

    return (
        <>
            <div className='region-menu-category'>
                <CategoryList
                    onCategorySelected={(category) => { handleCategoryClicked(category) }} />
            </div>
            
            <div className='region-product-list'>
                { category === undefined 
                ? null 
                : <ProductList category={category} onProductSelected={(product) => { handleProductClicked(product) }} /> }
            </div>

            <div className='region-order-panel'>

            </div>
        </>
    );
}

export default TillPage;
