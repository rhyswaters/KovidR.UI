import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

const useStyles = makeStyles({
  guessText: {
    flex: 1,
  },
});

export default function SubmitGuess(props) {
  const classes = useStyles();

  let options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };

  let form = <form className={classes.form} onSubmit={props.guessSubmitted}>
                <TextField
                error={props.guessError}
                helperText={props.errorText}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="caseNumbers"
                label="Case Numbers"
                name="caseNumbers"
                autoFocus
                onChange={props.onChangeGuess}
                />
                <Button
                    disabled={props.submitButtonDisabled}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                    Submit
                </Button>
            </form>;

  let title = 'Submit Next Guess';

  if (props.nextGuessInfo.allUserGuesses) {
    title = 'Latest Guesses';
    form = <Table size="small">
          <TableHead>
              <TableRow>
                <TableCell><b>User</b></TableCell>
                <TableCell><b>Guess</b></TableCell>
                <TableCell><b>Timestamp</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.nextGuessInfo.allUserGuesses.map((row) => (
                <TableRow key={row.userName}>
                  <TableCell>{row.userName}</TableCell>
                  <TableCell>{row.totalCases}</TableCell>
                  <TableCell>{new Date(row.timeStamp).toLocaleDateString("en-gb", options)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
  }
  else if (props.nextGuessInfo.nextGuessSubmitted) {
    title = 'Latest Guess';
    form = <Typography style={{fontSize: 20}}><b>Your Guess:</b> {props.nextGuessInfo.guess.totalCases}</Typography>
  }

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Typography color="textSecondary" className={classes.guessText}>
        {new Date(props.nextGuessInfo.nextGuessDate).toDateString()}
      </Typography>
      {form}
    </React.Fragment>
  );
}