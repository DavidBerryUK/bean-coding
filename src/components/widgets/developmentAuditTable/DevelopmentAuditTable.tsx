import { Button }                               from '@material-ui/core';
import { createStyles }                         from '@material-ui/core';
import { makeStyles }                           from '@material-ui/core';
import { Paper }                                from '@material-ui/core';
import { Table }                                from '@material-ui/core';
import { TableBody }                            from '@material-ui/core';
import { TableCell}                             from '@material-ui/core';
import { TableContainer }                       from '@material-ui/core';
import { TableHead }                            from '@material-ui/core';
import { TableRow }                             from '@material-ui/core';
import { Theme }                                from '@material-ui/core';
import { Typography }                           from '@material-ui/core';
import { useContext }                           from 'react';
import { withStyles }                           from '@material-ui/core';
import {format}                                 from "date-fns"
import CommandClearAudit                        from '../../context/developerContext/actions/CommandClearAudit';
import DeleteIcon                               from '@material-ui/icons/Delete';
import DeveloperContext                         from '../../context/developerContext/DeveloperContext';
import React                                    from 'react';

const DevelopmentAuditLog: React.FC = () => {

    const { state, dispatch } = useContext(DeveloperContext);

    const StyledTableCell = withStyles((theme: Theme) =>
        createStyles({
            head: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
            },
            body: {
                fontSize: 14,
            },
        }),
    )(TableCell);

    const StyledTableRow = withStyles((theme: Theme) =>
        createStyles({
            root: {
                '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.background.default,
                },
            },
        }),
    )(TableRow);

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });

    const classes = useStyles();

    const handleClearButtonPressed = () => {
        dispatch(new CommandClearAudit());
    }

    return (
        <>
            <Typography variant="h6">Audit</Typography>


            <TableContainer component={Paper}>
                <Table className={classes.table} stickyHeader size="small" >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell style={{ width: 100 }}>Number</StyledTableCell>
                            <StyledTableCell style={{ width: 100 }}>Date</StyledTableCell>
                            <StyledTableCell>Message</StyledTableCell>
                            <StyledTableCell style={{ width: 60 }}>
                                <Button variant="contained" color="default" size="small" startIcon={<DeleteIcon />} onClick={handleClearButtonPressed}>clear</Button>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.auditRows.map((row) => (
                            <StyledTableRow key={row.rowNumber}>
                                <TableCell >{row.rowNumber}</TableCell>
                                <TableCell >{format(row.datetime, 'HH:mm:ss.SSS')}</TableCell>
                                <TableCell colSpan={2}>{row.message}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default DevelopmentAuditLog;