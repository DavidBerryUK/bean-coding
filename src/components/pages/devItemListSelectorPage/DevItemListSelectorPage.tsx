// import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import DevelopmentMasterPageWrapper             from '../../widgets/devMasterPageWrapper/DevelopmentMasterPageWrapper';
import ItemListSelector                         from "../../ui/itemListSelector/ItemListSelector";
import React                                    from 'react';

const DevItemListSelectorPage: React.FC = () => {
   
    // const classStyles = ClassStyleDefinition();    

    return (
        <DevelopmentMasterPageWrapper 
            title="Item List Selected"
            description="UI Component to select an item from a list">            
            <ItemListSelector/>
            </DevelopmentMasterPageWrapper>
    );
}

export default DevItemListSelectorPage;
