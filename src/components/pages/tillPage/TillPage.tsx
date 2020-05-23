import './Styles.scss';
import { useState }                             from 'react';
import CategoryList                             from '../../widgets/categoryList/CategoryList';
import CategoryModel                            from '../../../repository/categoryRepository/models/CategoryModel';
import ProductList                              from '../../widgets/productList/ProductList';
import React                                    from 'react';

const TillPage: React.FC = () => {

    const [category, setCategory] = useState<CategoryModel>();

    const handleCategoryClicked = (category: CategoryModel) => {
        setCategory(category);
    }

    return (
        <>
            <div className='region-menu-category'>
                <CategoryList onCategorySelected={(category) => {handleCategoryClicked(category)}}/> 
            </div>
            <div className='region-order-panel'>

            </div>
            <div className='region-product-list'>
                {
                    category === undefined ? null :
                    <ProductList category={category}/>
                }                
            </div>
        </>
    );
}

export default TillPage;
