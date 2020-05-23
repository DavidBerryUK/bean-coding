import { useEffect }                            from 'react';
import { useState }                             from 'react';
import CategoryModel                            from '../../../repository/categoryRepository/models/CategoryModel';
import ProductModel                             from "../../../repository/productRepository/models/ProductModel";
import ProductRepository                        from "../../../repository/productRepository/ProductRepository";
import React                                    from 'react';

interface IProperties {
    category: CategoryModel,
}

const ProductList: React.FC<IProperties> = (props) => {

    const [productList, setProductList] = useState<Array<ProductModel>>(new Array<ProductModel>());

    // when component loads, get the data
    //
    useEffect(() => {
        var productRepository = new ProductRepository();
        productRepository.getProductsForCategory(props.category).then((productData) => {
            setProductList(productData);
        })
    }, [props.category])


    // display a list of categories
    //
    return (
        <div>
            {productList.map((product: ProductModel) => (
                <div key={product.productNumber}>
                    {product.name}
                </div>
            ))}
        </div>
    )
}

export default ProductList
