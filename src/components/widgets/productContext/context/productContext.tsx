import { Dispatch }                             from 'react';
import { EnumProductContextAction }             from './actions/IProductContextDispatchCommand';
import { IProductContextDispatchCommand}        from './actions/IProductContextDispatchCommand';
import { Reducer }                              from 'react';
import CommandUpdateProduct                            from './actions/CommandUpdate';
import ProductModel                             from '../../../../repository/productRepository/models/ProductModel';
import React                                    from 'react';

export interface IDispatchObject {
    entityName: string;
}

export interface ProductContexttProps {
    product: ProductModel
}

const initialState: ProductContexttProps = {
    product: new ProductModel(),
};

interface InitContextProps {
    state: ProductContexttProps;
    dispatch: Dispatch<IProductContextDispatchCommand>;
}

const reducer: Reducer<ProductContexttProps, IProductContextDispatchCommand> = (state, command) => {

    switch (command.commandType) {

        case EnumProductContextAction.Update:
            var commandUpdate = command as CommandUpdateProduct            
            return commandUpdate.updateState(state);

        default:
            return state;
    }
};

let ProductContext = React.createContext({} as InitContextProps);

export function ProductContextProvider(props: any) {

    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = { state, dispatch };

    return (
        <ProductContext.Provider value={value}>{props.children}</ProductContext.Provider>
    );
}

export const ProductContextConsumer = ProductContext.Consumer;
export default ProductContext