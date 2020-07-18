import React from 'react';
import SizeModel from '../../../repository/productRepository/models/SizeModel';

interface IProperties {
    size: SizeModel | undefined
}

const ProductNutrition: React.FC<IProperties> = (props) => {


    return (
        <>
            Nutrition
         (nutrition not yet part of the model??)
        </>
    )
}

export default ProductNutrition
