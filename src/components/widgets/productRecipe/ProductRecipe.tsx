import React from 'react';
import SizeModel from '../../../repository/productRepository/models/SizeModel';

interface IProperties {
    size: SizeModel | undefined
}

const ProductRecipe: React.FC<IProperties> = (props) => {

    console.log(props.size);

    if ( props.size === undefined) return (<></>);

    return (
        <>
            {props.size.recipeList.map((item) => (
                item.name
            ))}  
        </>
    )
}

export default ProductRecipe
