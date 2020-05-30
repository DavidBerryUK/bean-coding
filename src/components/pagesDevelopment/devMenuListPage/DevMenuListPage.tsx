//import { ClassStyleDefinition }                 from "../devMenuHierarchicalListPage/ClassStyleDefinition";
import AcUnitIcon                               from '@material-ui/icons/AcUnit';
import BathtubOutlinedIcon                      from '@material-ui/icons/BathtubOutlined';
import ChildCareOutlinedIcon                    from '@material-ui/icons/ChildCareOutlined';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import EmojiFoodBeverageOutlinedIcon            from '@material-ui/icons/EmojiFoodBeverageOutlined';
import FastfoodIcon                             from '@material-ui/icons/Fastfood';
import HomeOutlinedIcon                         from '@material-ui/icons/HomeOutlined';
import MenuItemModel                            from "../../ui/menuList/MenuItemModel";
import MenuItemRootModel                        from "../../ui/menuList/MenuItemRootModel";
import MenuList                                 from '../../ui/menuList/MenuList';
import PetsOutlinedIcon                         from '@material-ui/icons/PetsOutlined';
import React                                    from 'react';
import SpaOutlinedIcon                          from '@material-ui/icons/SpaOutlined';
import SportsEsportsOutlinedIcon                from '@material-ui/icons/SportsEsportsOutlined';

const DevMenuListPage: React.FC = () => {
   
    // const classStyles = ClassStyleDefinition(); 
    
    const rootMenu = new MenuItemRootModel();
    rootMenu.add(new MenuItemModel('1',"Fresh Food","",<FastfoodIcon/>));
    rootMenu.add(new MenuItemModel('2',"Chilled Food","",<AcUnitIcon/>));
    rootMenu.add(new MenuItemModel('3',"Frozen Food","",<AcUnitIcon/>));
    rootMenu.add(new MenuItemModel('4',"Vegan","",<SpaOutlinedIcon/>));
    rootMenu.add(new MenuItemModel('5',"Drinks","", <EmojiFoodBeverageOutlinedIcon/>));
    rootMenu.add(new MenuItemModel('6',"Health & Beauty","",<BathtubOutlinedIcon/>));
    rootMenu.add(new MenuItemModel('7',"Laundry & Household","",<HomeOutlinedIcon/>));
    rootMenu.add(new MenuItemModel('8',"Pets","",<PetsOutlinedIcon/>));
    rootMenu.add(new MenuItemModel('9',"Entertainment","",<SportsEsportsOutlinedIcon/>));
    rootMenu.add(new MenuItemModel('10',"Baby","",<ChildCareOutlinedIcon/>));
    
    return (
        <DevelopmentMasterPageWrapper 
                               
        title="Menu List"
        description="UI Component present a consistent menu list">                 
            <MenuList  rootMenuItem={rootMenu}/>
            </DevelopmentMasterPageWrapper>
    );
}

export default DevMenuListPage;
