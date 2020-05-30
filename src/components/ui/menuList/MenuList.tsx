import { Link }                                 from '@material-ui/core';
import { Link as RouterLink }                   from 'react-router-dom';
import { List }                                 from '@material-ui/core';
import { ListItem }                             from '@material-ui/core';
import { ListItemIcon }                         from '@material-ui/core';
import { ListItemText }                         from '@material-ui/core';
import MenuItemModel                            from './MenuItemModel';
import React                                    from 'react';
import ChevronRightOutlinedIcon                 from '@material-ui/icons/ChevronRightOutlined';

interface IProperties {
    rootMenuItem: MenuItemModel,
    onMenuItemSelected?: ( menuItem : MenuItemModel) => void
}

const MenuList: React.FC<IProperties> = (props) => {

    const handleOnMenuItemClicked = (menuItem : MenuItemModel ) => {
        // if ( menuItem.children.length > 0) {    
        //     console.log('item has children');
        //     return;
        // }

        if ( props.onMenuItemSelected) {
            props.onMenuItemSelected(menuItem);
        }
    }

    return (
        <List>
            {props.rootMenuItem.children.map((item : MenuItemModel) => (
                <div key={item.id}>
                    {item.route !== '' ?
                        <Link component={RouterLink} to={item.route} color="inherit" variant="inherit" underline="none">
                            <ListItem button>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name}/>                                
                                { item.children.length > 0 ? <ChevronRightOutlinedIcon/> : null }                           
                            </ListItem>
                        </Link>
                        : <ListItem button onClick={()=>{ handleOnMenuItemClicked(item) }}  >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                                { item.children.length > 0 ? <ChevronRightOutlinedIcon/> : null }                           
                        </ListItem>}
                </div>
            ))}
        </List>
    )
}


export default MenuList