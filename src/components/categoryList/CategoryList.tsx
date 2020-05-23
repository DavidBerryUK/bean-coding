import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { useEffect }                            from 'react';
import { useState }                             from 'react';
import CategoryItem                             from '../categoryItem/CategoryItem';
import CategoryModel                            from '../../repository/categoryRepository/models/CategoryModel';
import CategoryRepository                       from '../../repository/categoryRepository/CategoryRepository';
import React                                    from 'react';

const CategoryList: React.FC = (props) => {

    const classStyles = ClassStyleDefinition();
    const [categoryList, setCategoryList] = useState<Array<CategoryModel>>(new Array<CategoryModel>())

    // when component loads, get the data
    //
    useEffect(() => {
        var categoryRepository = new CategoryRepository();
        categoryRepository.getAll().then((categoryData) => {
            setCategoryList(categoryData)
        })
    }, [])


    // display a list of categories
    //
    return (
        <div className={classStyles.root}>
            {categoryList.map((item) => (
                <CategoryItem key={item.categoryId} category={item} />
            ))}
        </div>
    )
}

export default CategoryList
