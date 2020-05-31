import "./SlideMenuPrototypeContainer.scss";
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import React from 'react';
import TestBox from './TestBox';

interface IProperties {

}

const MenuHierachical: React.FC<IProperties> = (props) => {

    const [cssNew, setCssNew] = useState('menu-show')
    const [levelState, setLevelState] = useState(0);
    const [menuArraySate, setMenuArrayState] = useState<Array<React.ReactElement>>(new Array<React.ReactElement>());

    const handlePushButtonClicked = () => {
        menuPush();
    }

    const handlePopButtonClicked = () => {
        menuPop();
    }

    const menuPush = useCallback(() => {
        if (levelState >= 6) {
            return
        }

        var newLevel = levelState + 1;
        var array = [...menuArraySate];

        array.push(React.createElement(TestBox, { backgroundNo: newLevel, className: "" }))
        if (newLevel === 1) {
            setCssNew('menu-show');
        } else {
            setCssNew('menu-enter');
        }

        setMenuArrayState(array);
        setLevelState(newLevel);
    }, [levelState, menuArraySate])

    const menuPop = () => {
        if (levelState <= 1) {
            return
        }
        var newLevel = levelState - 1;                        
        setLevelState(newLevel);

        setTimeout(function () {
            var array = [...menuArraySate];
            while( array.length >= levelState) {
                array.pop();
            }
            setMenuArrayState(array);
        }, 500);
    }

    useMemo(() => {
        if (levelState === 0) {
            menuPush();
        }

        setTimeout(function () {
            setCssNew('menu-show');
        }, 25);
    }, [menuPush, levelState]);


    const getClassName = (index: number) => {        
        if ( (index + 1) < levelState) {
            return 'menu-container menu-hide';
        }
        if ( (index + 1) > levelState) {
            return 'menu-container menu-enter';
        }
        return `menu-container ${cssNew}`;
    }

    return (
        <>
            <Box display='flex' mt={1} mb={1}>
                <Box mr={1}>
                    <Button variant="contained" color="secondary" onClick={handlePushButtonClicked}>Push</Button>
                </Box>
                <Box mr={1}>
                    <Button variant="contained" color="secondary" onClick={handlePopButtonClicked}>Pop</Button>
                </Box>
                <Box mr={1}>
                    Level: {levelState}
                </Box>
            </Box>

            <div className="slide-menu-prototype-container">
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


export default MenuHierachical