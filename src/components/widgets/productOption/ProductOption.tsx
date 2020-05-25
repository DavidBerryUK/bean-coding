// import { useState }                             from 'react';
import React from 'react';
import { useState } from 'react';
import ProductOptionModel from '../../../repository/productRepository/models/ProductOptionModel';
import { Typography, Box } from '@material-ui/core';
import ProductOptionSizeModel from '../../../repository/productRepository/models/ProductOptionSizeModel';



interface IProperties {
    option: ProductOptionModel
}

const ProductOption: React.FC<IProperties> = (props) => {

    var [selectedOption, setselectedOption] = useState<ProductOptionModel>();

    const handleSizeOptionClicked = (event: React.ChangeEvent<any>, option: ProductOptionModel) => {
        setselectedOption(option);
    }

    return (
        <div>
            <Typography variant="h5">{props.option.name}</Typography>
            <div>options:{props.option.children.length}</div>
            <div>products:{props.option.products.length}</div>


            <h5>Sub Options</h5>
            {props.option.children.map((item: ProductOptionModel) => (
                <Box key={item.name} border={2} color="Red" p={3}>
                    <div>name:{item.name}</div>
                    <div>formCode:{item.formCode}</div>
                    <div>children:{item.children.length}</div>
                    <div>products:{item.products.length}</div>

                    {item.products.map((item: ProductOptionModel) => (
                        <Box key={item.name} border={2} color="green" p={3}>
                            <div>name:{item.name}</div>
                            <div>formCode:{item.formCode}</div>

                            {item.sizes.map((item: ProductOptionSizeModel) => (
                            <Box key={item.name} border={2} color="blue" p={3}>
                                <div>name:{item.name}</div>
                                <div>size:{item.size}</div>
                            </Box>
                            ))}


                        </Box>
                    ))}
                </Box>
            ))}


        </div>
    )
}

export default ProductOption
