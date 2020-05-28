import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { IconButton }                           from '@material-ui/core';
import ControlPointRoundedIcon                  from '@material-ui/icons/ControlPointRounded';
import React                                    from 'react';
import { useEffect }                            from 'react';
import RemoveCircleOutlineRoundedIcon           from '@material-ui/icons/RemoveCircleOutlineRounded';

interface IProperties {
    value: number;
    maxValue?: number;
    minValue?: number
    onValueChanged: (value: number) => void
}

const ItemQuantitySelector: React.FC<IProperties> = (props) => {

    const classStyles = ClassStyleDefinition();

    useEffect(() => {
        if ( props.minValue !== undefined && props.value < props.minValue) {
            props.onValueChanged(props.minValue)
        }
        if ( props.maxValue !== undefined && props.value > props.maxValue) {
            props.onValueChanged(props.maxValue)
        }
    },[props])


    const handleMinusButtonPressed = () => {
        if ( props.minValue !== undefined && props.value <= props.minValue) {
            return;
        }
        props.onValueChanged( props.value - 1);
    }

    const handleAddButtonPressed = () => {
        if ( props.maxValue !== undefined && props.value >= props.maxValue) {
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
