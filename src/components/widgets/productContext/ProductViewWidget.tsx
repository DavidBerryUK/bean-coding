import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdateProduct                            from './context/actions/CommandUpdate';
import ProductContext                           from './context/productContext';
import ProductHeaderDetails                     from './subComponents/ProductHeaderDetails';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import ProductSizeSelector                      from './subComponents/ProductSizeSelector';
import React                                    from 'react';

interface IProperties {
    product: ProductModel
}

const ProductViewWidget: React.FC<IProperties> = (props) => {

    const dispatch = useContext(ProductContext).dispatch;

    useEffect(() => {
        dispatch(new CommandUpdateProduct(props.product));
    }, [dispatch, props.product]);

    return (
        <>
            <ProductHeaderDetails />
            <ProductSizeSelector/>
        </>
    )
}

export default ProductViewWidget
