import { Box }                                  from '@material-ui/core';
import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { Switch }                               from '@material-ui/core';
import { Table }                                from '@material-ui/core';
import { TableBody }                            from '@material-ui/core';
import { TableCell }                            from '@material-ui/core';
import { TableHead}                             from '@material-ui/core';
import { TableRow }                             from '@material-ui/core';
import { TextField }                            from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import { useState }                             from 'react';
import DevelopmentMasterPageWrapper             from '../devMasterPageWrapper/DevelopmentMasterPageWrapper';
import ItemQuantitySelector                     from "../../ui/itemQuantitySelector/ItemQuantitySelector";
import React                                    from 'react';

const DevItemQuantitySelectorPage: React.FC = () => {

    const classStyles = ClassStyleDefinition();

    const [quantity, setQuantity] = useState(10);
    const [isMinValueUsed, setIsMinValueUsed] = useState(true);
    const [isMaxValueUsed, setIsMaxValueUsed] = useState(true);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(15);

    const handleOnValueChanged = (value: number) => {
        setQuantity(value);
    }

    const handleIsMinValueUsedChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsMinValueUsed(e.target.checked);
    }

    const handleIsMaxValueUsedChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsMaxValueUsed(e.target.checked);
    }

    const handleMinValueUpdated = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.target.value));
    }

    const handleMaxValueUpdated = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.target.value));
    }

    const handleQuantityValueUpdated = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    }

    return (
        <DevelopmentMasterPageWrapper
            title="Item Quantity Selector"
            description="UI Component to select quantities"
            componentName="<ItemQuantitySelector/>"
            footerElement = {
                <Paper className={classStyles.box}>
                <Typography variant="subtitle1" color="textSecondary">Parameters</Typography>

                <Table size="small" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Parameter</TableCell>
                            <TableCell>Is Used?</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Value</TableCell>
                            <TableCell><Switch checked={true} disabled /></TableCell>
                            <TableCell>
                                <TextField type='number' value={quantity} disabled={!isMinValueUsed} onChange={handleQuantityValueUpdated} />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Min Value</TableCell>
                            <TableCell>
                                <Switch checked={isMinValueUsed} onChange={handleIsMinValueUsedChanged} />
                            </TableCell>
                            <TableCell>
                                <TextField type='number' value={minValue} disabled={!isMinValueUsed} onChange={handleMinValueUpdated} />
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Max Value</TableCell>
                            <TableCell>
                                <Switch checked={isMaxValueUsed} onChange={handleIsMaxValueUsedChanged} />
                            </TableCell>
                            <TableCell>
                                <TextField type='number' value={maxValue} disabled={!isMaxValueUsed} onChange={handleMaxValueUpdated} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </Paper>
            }
            >

            <Box className={classStyles.box}>
                <ItemQuantitySelector
                    value={quantity}
                    minValue = { isMinValueUsed ? minValue : undefined }
                    maxValue = { isMaxValueUsed ? maxValue : undefined }
                    onValueChanged={handleOnValueChanged}
                />
            </Box>

           


        </DevelopmentMasterPageWrapper>
    );
}

export default DevItemQuantitySelectorPage;
