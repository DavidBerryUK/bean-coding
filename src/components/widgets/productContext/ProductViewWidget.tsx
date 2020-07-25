import { useContext }                           from 'react';
import { useEffect }                            from 'react';
import CommandUpdate                            from './context/actions/CommandUpdate';
import ProductContext                           from './context/productContext';
import ProductHeaderDetails                     from './subComponents/ProductHeaderDetails';
import ProductModel                             from '../../../repository/productRepository/models/ProductModel';
import React                                    from 'react';

interface IProperties {
    product: ProductModel
}

const ProductViewWidget: React.FC<IProperties> = (props) => {

    const dispatch = useContext(ProductContext).dispatch;

    useEffect(() => {
        dispatch(new CommandUpdate(props.product));
    }, [dispatch, props.product]);

    return (

        <ProductHeaderDetails />

    )
}

export default ProductViewWidget
