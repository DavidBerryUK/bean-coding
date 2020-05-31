import "./MenuHierachicalList.scss";
import { Box }                                  from '@material-ui/core';
import { Button }                               from '@material-ui/core';
import { useCallback }                          from 'react';
import { useEffect }                            from 'react';
import { useMemo }                              from 'react';
import { useState }                             from 'react';
import MenuItemModel                            from '../menuList/MenuItemModel';
import MenuList                                 from '../menuList/MenuList';
import React                                    from 'react';

interface IProperties {
    rootMenuItem: MenuItemModel,
}

const MenuHierachicalList: React.FC<IProperties> = (props) => {

    const [cssNew, setCssNew] = useState('menu-show')
    const [levelState, setLevelState] = useState(0);
    const [menuArraySate, setMenuArrayState] = useState<Array<React.ReactElement>>(new Array<React.ReactElement>());
    const [newMenu, setNewMenu] = useState<MenuItemModel | null>(null);


    const handlePopButtonClicked = () => {
        menuPop();
    }

    const handleMenuOnClickEvent = useCallback((menu: MenuItemModel) => {
        setNewMenu(menu);
    }, []);

    const menuPop = () => {
        if (levelState <= 1) {
            return
        }
        var newLevel = levelState - 1;
        setLevelState(newLevel);

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

        const newMenuElement = <MenuList rootMenuItem={menuModel} onMenuItemSelected={(x: MenuItemModel) => { handleMenuOnClickEvent(x) }} />

        array.push(newMenuElement)

        if (newLevel === 1) {
            setCssNew('menu-show');
        } else {
            setCssNew('menu-enter');
        }
        setMenuArrayState(array);
        setLevelState(newLevel);


    }, [levelState, menuArraySate, handleMenuOnClickEvent])

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
        <>
            <Box display='flex' mt={1} mb={1}>
                <Box mr={1}>
                    <Button variant="contained" color="secondary" onClick={handlePopButtonClicked}>Pop</Button>
                </Box>
                <Box mr={1}>
                    Level: {levelState}
                </Box>
            </Box>

            <div className="menu-hierachical-list">
                {
                    menuArraySate.map((item, index) => (
                        <div key={index} className={getClassName(index)}>
                            {item}
                        </div>
                    ))
                }
            </div>
        </>
    )
}


export default MenuHierachicalList