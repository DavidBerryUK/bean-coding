import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { IconButton }                           from '@material-ui/core';
import ControlPointRoundedIcon                  from '@material-ui/icons/ControlPointRounded';
import React                                    from 'react';
import RemoveCircleOutlineRoundedIcon           from '@material-ui/icons/RemoveCircleOutlineRounded';

interface IProperties {
    value: number;
    maxValue?: number;
    minValue?: number
    onValueChanged: (value: number) => void
}

const ItemQuantitySelector: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    const handleMinusButtonPressed = () => {
        if ( props.minValue && props.value <= props.minValue) {
            return;
        }
        props.onValueChanged( props.value - 1);
    }

    const handleAddButtonPressed = () => {
        if ( props.maxValue && props.value >= props.maxValue) {
            return;
        }
        props.onValueChanged( props.value + 1);
    }

    return (
        <div className={classStyles.root}>
            <IconButton onClick={handleMinusButtonPressed}>
                <RemoveCircleOutlineRoundedIcon  fontSize="large"/>
            </IconButton>
            <div className={classStyles.quantity}>{props.value}</div>
            <IconButton onClick={handleAddButtonPressed}>
                <ControlPointRoundedIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default ItemQuantitySelector
