import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function LastResult(props) {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Title>Last Result: </Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        {new Date(props.result.date).toDateString()}
      </Typography>
      <Table size="small">
        <TableBody>
          {Object.keys(props.result.guesses).map(function(value, idx) {
            return <TableRow key={idx}>
                    <TableCell>{value}</TableCell>
                    <TableCell>{props.result.guesses[value]}</TableCell>
                  </TableRow>
                })}
        </TableBody>
      </Table>
      <br/>
      <Typography><b>Total Cases:</b> {props.result.caseNumbers}</Typography>
      <Typography><b>Winner:</b> {props.result.winner}</Typography>
    </React.Fragment>
  );
}