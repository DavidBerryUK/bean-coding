import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import CategoryItem                             from '../categoryItem/CategoryItem';
import CategoryModel                            from '../../../repository/categoryRepository/models/CategoryModel';
import CategoryRepository                       from '../../../repository/categoryRepository/CategoryRepository';
import React                                    from 'react';

interface IProperties {    
    onCategorySelected: (image: CategoryModel) => void;
}

const CategoryList: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();
    const [categoryList, setCategoryList] = useState<Array<CategoryModel>>(new Array<CategoryModel>());        

    // when component loads, get the data
    //
    useEffect(() => {
        var categoryRepository = new CategoryRepository();
        categoryRepository.getAll().then((categoryData) => {
            setCategoryList(categoryData)
        })
    }, [])

    const handleCategoryClicked = (category: CategoryModel) => {
        props.onCategorySelected(category);
    }

    // display a list of categories
    //
    return (
        <div className={classStyles.root}>
            {categoryList.map((item) => (
                <CategoryItem key={item.categoryId} 
                category={item} 
                onCategorySelected={(category)=>{ handleCategoryClicked(category)}}/>
            ))}
        </div>
    )
}

export default CategoryList
