import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/Title';

export default function PastChampions(props) {
    return (
        <React.Fragment>
            <Title>Past Champions</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Year</b></TableCell>
                        <TableCell><b>Winner</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>2021</TableCell>
                        <TableCell>Rhys</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
