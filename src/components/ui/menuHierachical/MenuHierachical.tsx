import React, { useState, useMemo, useCallback } from 'react';
import TestBox from './TestBox';
import { Box, Button } from '@material-ui/core';
import "./SlideMenuPrototypeContainer.scss";


interface IProperties {

}

const MenuHierachical: React.FC<IProperties> = (props) => {

    const [cssNew, setCssNew] = useState('menu-enter')
    const [levelState, setLevelState] = useState(0);
    const [menuArraySate, setMenuArrayState] = useState<Array<React.ReactElement>>(new Array<React.ReactElement>());

    const handlePushButtonClicked = () => {
        menuPush();
    }

    const handlePopButtonClicked = () => {
        menuPop();
    }

    const menuPush = useCallback( () => {
        if ( levelState >= 6) {
            return
        }
        
        var newLevel = levelState + 1;
        var array = [...menuArraySate];
        
        array.push(React.createElement(TestBox,{backgroundNo: newLevel, className:""}))        
        setCssNew('menu-enter');
        setMenuArrayState(array);
        setLevelState(newLevel);            
    },[levelState, menuArraySate])

    const menuPop = () => {
        if ( levelState <= 1) {
            return
        }
        var newLevel = levelState - 1;
        var array = [...menuArraySate];
        array.pop();
           
        setMenuArrayState(array);
        setLevelState(newLevel);                    
    }

    useMemo(() => {
        // populate inital menu
        if ( levelState === 0 ) {
            menuPush();
        }
        setTimeout(function() {
            console.log('time out done');
            setCssNew('menu-show');
         }, 50);
    },[menuPush, levelState]);

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
            menuArraySate.map((item,index) => (
                <div key={index} className={`menu-container ${  (index+1) === levelState ? `${cssNew}` : 'menu-hide'    }`}>
                    {item}
                </div>
            ))
            }
            </div>
        </>
    )
}


export default MenuHierachical