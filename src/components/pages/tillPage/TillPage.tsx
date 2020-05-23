import CategoryList                             from '../../widgets/categoryList/CategoryList';
import React                                    from 'react';
import './Styles.scss';

const TillPage: React.FC = () => {
    return (
        <div>
            <div className='region-menu-category'>
                <CategoryList/> 
            </div>
            <div className='region-order-panel'>

            </div>
        </div>
    );
}

export default TillPage;
