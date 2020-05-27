import { ClassStyleDefinition }                 from "./ClassStyleDefinition";
import { Paper }                                from '@material-ui/core';
import { Switch }                               from '@material-ui/core';
import { Table }                                from '@material-ui/core';
import { TableBody }                            from '@material-ui/core';
import { TableCell }                            from '@material-ui/core';
import { TableHead}                             from '@material-ui/core';
import { TableRow }                             from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import { useState }                             from 'react';
import DevelopmentMasterPageWrapper             from '../../widgets/devMasterPageWrapper/DevelopmentMasterPageWrapper';
import ItemQuantitySelector                     from "../../ui/itemQuantitySelector/ItemQuantitySelector";
import React                                    from 'react';

const DevItemQuantitySelectorPage: React.FC = () => {

    const classStyles = ClassStyleDefinition();

    const [quantity, setQuantity] = useState(10);
    const [isMinValueUsed, setIsMinValueUsed]  = useState(true);
    const [isMaxValueUsed, setIsMaxValueUsed]  = useState(true);

    const handleOnValueChanged = (value: number) => {
        setQuantity(value);
    }
    
    const handleIsMinValueUsedChanged = (e : React.ChangeEvent<HTMLInputElement>) => {
        setIsMinValueUsed(e.target.checked);
    }

    const handleIsMaxValueUsedChanged = (e : React.ChangeEvent<HTMLInputElement>) => {
        setIsMaxValueUsed(e.target.checked);
    }

    return (
        <DevelopmentMasterPageWrapper
            title="Item Quantity Selector"
            description="UI Component to select quantities">

            <Paper className={classStyles.paper}>
                <Typography variant="subtitle1" color="textSecondary">Example component</Typography>
                <ItemQuantitySelector value={quantity} onValueChanged={handleOnValueChanged} />
            </Paper>

            <Paper className={classStyles.paper}>
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
                            <TableCell><Switch  checked={true} disabled/></TableCell>
                            <TableCell>00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Min Value</TableCell>
                            <TableCell><Switch  checked={isMinValueUsed} onChange={handleIsMinValueUsedChanged}/></TableCell>
                            <TableCell>00</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Max Value</TableCell>
                            <TableCell><Switch  checked={isMaxValueUsed}  onChange={handleIsMaxValueUsedChanged}/></TableCell>
                            <TableCell>00</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                
            </Paper>


        </DevelopmentMasterPageWrapper>
    );
}

export default DevItemQuantitySelectorPage;
