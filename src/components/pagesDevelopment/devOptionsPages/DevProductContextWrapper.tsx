import { ProductContextProvider }               from '../../widgets/productContext/context/productContext';
import DevelopmentOptionRoutes                  from '../../routes/Development/DevelopmentOptionRoutes';
import React                                    from 'react';

const DevProductContextWrapper: React.FC = (props) => {

    return (
        <ProductContextProvider>
            <DevelopmentOptionRoutes/>
        </ProductContextProvider>
    );
}

export default DevProductContextWrapper;
