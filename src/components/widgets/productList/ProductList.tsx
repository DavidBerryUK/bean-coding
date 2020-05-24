import { useEffect }                            from 'react';
import { useState }                             from 'react';
import CategoryModel                            from '../../../repository/categoryRepository/models/CategoryModel';
import ProductListItem                          from '../productListItem/ProductListItem';
import ProductModel                             from "../../../repository/productRepository/models/ProductModel";
import ProductRepository                        from "../../../repository/productRepository/ProductRepository";
import React                                    from 'react';

interface IProperties {
    category: CategoryModel,
    onProductSelected: (product: ProductModel) => void;
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

    const handleProductClicked = (product: ProductModel) => {
        props.onProductSelected(product);
    }

    // display a list of categories
    //
    return (
        <div>
            {productList.map((product: ProductModel) => (
                <ProductListItem 
                    key={product.productNumber} 
                    product={product}
                    onProductSelected={(product)=>{ handleProductClicked(product)}}/>
            ))}
        </div>
    )
}

export default ProductList
