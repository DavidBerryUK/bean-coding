import { EnumLabelSize }                        from '../../ui/elementNameTag/ElementNameTag';
import ElementNameTag                           from '../../ui/elementNameTag/ElementNameTag';
import ProductOptionModel                       from '../../../repository/productRepository/models/ProductOptionModel';
import React                                    from 'react';

interface IProperties {
    option: ProductOptionModel
}

const ProductOptionTypeOne: React.FC<IProperties> = (props) => {

    return (
        <>
            <ElementNameTag size={EnumLabelSize.medium} name="ProductOptionTypeOne" />
            <table>
                <tr>
                    <td>name</td><td>{props.option.name}</td>
                </tr>
                <tr>
                    <td>formcode</td><td>{props.option.formCode}</td>
                </tr>
                <tr>
                    <td>sizes count</td><td>{props.option.sizes.length}</td>
                </tr>
                <tr>
                    <td>options count</td><td>{props.option.children.length}</td>
                </tr>
                <tr>
                    <td>product count</td><td>{props.option.products.length}</td>
                </tr>
            </table>
        </>
    )
}

export default ProductOptionTypeOne;