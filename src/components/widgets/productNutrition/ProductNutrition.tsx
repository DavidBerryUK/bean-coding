import React from 'react';
import SizeModel from '../../../repository/productRepository/models/SizeModel';

interface IProperties {
    size: SizeModel | undefined
}

const ProductNutrition: React.FC<IProperties> = (props) => {


    return (
        <>
            
         {props.size?.nutrition.serviceSize}
         {props.size?.nutrition.calories}
         {props.size?.nutrition.caloriesFromFat}
        </>
    )
}

export default ProductNutrition
