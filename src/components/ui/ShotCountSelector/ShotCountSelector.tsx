import { Button, Typography } from '@material-ui/core';
import { ClassStyleDefinition } from "./ClassStyleDefinition";
import { Paper } from '@material-ui/core';
import React from 'react';

interface IProperties {
    shotCount: number,
    onValueChanged: (shotCount: number) => void
}

const ShotCountSelector: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    var shots = [0, 1, 2, 3, 4, 5, 6]

    const getClassNames = (index: number): string => {
        let className = `${classStyles.button} `;
        if (index === 0) {
            className = `${className} ${classStyles.first}`;
        } else if (index === (shots.length - 1)) {
            className = `${className} ${classStyles.last}`;
        } else {
            className = `${className} ${classStyles.middle}`;
        }
        if (index <= props.shotCount) {
             className = `${className} ${classStyles.selected}`;
        }
        return className;
    }

    const handleShotCountChanged = (shotCount: number ) => {
        props.onValueChanged(shotCount);
    }


    return (
        <Paper elevation={1} className={classStyles.paper}>
            {
                shots.map((element, index) => (
                    <Button
                        variant="contained"
                        className={getClassNames(index)}
                        onClick={() => { handleShotCountChanged(index) }}
                        >
                            <div>
                        <div className={classStyles.shot}></div>
                        
                        <Typography variant="subtitle1" color="textPrimary" className={classStyles.count}>{index}</Typography>
                        
                        </div>
                    </Button>
                ))
            }
        </Paper>
    )
}

export default ShotCountSelector
