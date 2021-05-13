import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title/Title';

export default function PreviousResults(props) {
  return (
    <React.Fragment>
      <Title>Previous Results</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Case Numbers</b></TableCell>
            <TableCell><b>Winner</b></TableCell>
            <TableCell><b>Winning Guess</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.results.map((row) => (
            <TableRow key={row.date}>
              <TableCell>{new Date(row.date).toDateString()}</TableCell>
              <TableCell>{row.caseNumbers}</TableCell>
              <TableCell>{row.winner}</TableCell>
              <TableCell>{row.winningGuess}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}