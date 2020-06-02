import "./MenuHierachicalList.scss";
import { Button }                               from "@material-ui/core";
import { Paper }                                from "@material-ui/core";
import { useCallback }                          from 'react';
import { useEffect }                            from 'react';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import ArrowBackIosIcon                         from '@material-ui/icons/ArrowBackIos';
import MenuItemModel                            from '../menuList/MenuItemModel';
import MenuList                                 from '../menuList/MenuList';
import React                                    from 'react';

interface IProperties {
    rootMenuItem: MenuItemModel,
    onMenuItemSelected?:(menuItem: MenuItemModel) => void
}

const MenuHierachicalList: React.FC<IProperties> = (props) => {

    const [cssNew, setCssNew] = useState('menu-show')
    const [levelState, setLevelState] = useState(0);
    const [menuArraySate, setMenuArrayState] = useState<Array<React.ReactElement>>(new Array<React.ReactElement>());
    const [newMenu, setNewMenu] = useState<MenuItemModel | null>(null);
    const [backButtonShownState, setBackButtonShownState] = useState(false);
    const [titleState, setTitleState] = useState<Array<string>>(new Array<string>());


    // const handlePopButtonClicked = () => {
    //     menuPop();
    // }

    const handleMenuOnClickEvent = useCallback((menuItem: MenuItemModel) => {
        setNewMenu(menuItem);
        
        if ( menuItem.children.length === 0) {
            if ( props.onMenuItemSelected ) {            
                props.onMenuItemSelected(menuItem);
            }
        }
    }, [props]);

    const handleMenuBackButtonClicked = () => {
        menuPop();
    }

    const menuPop = () => {
        if (levelState <= 1) {
            return
        }
        var newLevel = levelState - 1;
        setLevelState(newLevel);
        setBackButtonShownState(newLevel > 1);

        
        var titleArray = [...titleState];
        titleArray.pop();
        setTitleState(titleArray);                


        setTimeout(function () {
            var array = [...menuArraySate];
            while (array.length >= levelState) {
                array.pop();
            }
            setMenuArrayState(array);
        }, 500);
    }

    const menuPush = useCallback((menuModel: MenuItemModel) => {

        var newLevel = levelState + 1;
        var array = [...menuArraySate];

        const newMenuElement = <MenuList rootMenuItem={menuModel} onMenuItemSelected={(menuItem: MenuItemModel) => { handleMenuOnClickEvent(menuItem) }} />

        array.push(newMenuElement)

        if (newLevel === 1) {
            setCssNew('menu-show');
        } else {
            setCssNew('menu-enter');
        }

        var titleArray = [...titleState];
        titleArray.push(menuModel.name);
        setTitleState(titleArray);                

        
        setMenuArrayState(array);
        setLevelState(newLevel);
        setBackButtonShownState(newLevel > 1);


    }, [levelState, menuArraySate, handleMenuOnClickEvent, titleState])

    useMemo(() => {

        if (levelState === 0) {
            menuPush(props.rootMenuItem);
        }
        if (newMenu !== null) {

            if (newMenu.children.length > 0) {
                menuPush(newMenu);
            }

            setNewMenu(null);
        }

    }, [newMenu, menuPush, levelState, props.rootMenuItem])

    useEffect(() => {
        setTimeout(function () {
            setCssNew('menu-show');
        }, 50);
    }, [levelState]);


    const getClassName = (index: number) => {
        if ((index + 1) < levelState) {
            return 'menu-container menu-hide';
        }
        if ((index + 1) > levelState) {
            return 'menu-container menu-enter';
        }
        return `menu-container ${cssNew}`;
    }

    return (


        <Paper className="menu-hierachical-list">
            <div className='menu-toolbar'>
                <div className='title'>
                    {titleState[titleState.length-1]}
                </div>
                <Button variant="text" 
                        startIcon={<ArrowBackIosIcon />} 
                        onClick={handleMenuBackButtonClicked}
                        className = { `back-button ${backButtonShownState ? "show" : "hide"}` }
                        >Back</Button>
            </div>
            {
                menuArraySate.map((item, index) => (
                    <div key={index} className={getClassName(index)}>
                        {item}
                    </div>
                ))
            }
        </Paper>

    )
}


export default MenuHierachicalList