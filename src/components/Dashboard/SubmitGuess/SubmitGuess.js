import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title/Title';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  guessText: {
    flex: 1,
  },
});

export default function SubmitGuess(props) {
  const classes = useStyles();

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

  if (props.nextGuessInfo.nextGuessSubmitted) {
    form = <Typography style={{fontSize: 20}}><b>Your Guess:</b> {props.nextGuessInfo.guess}</Typography>
  }

  return (
    <React.Fragment>
        {props.nextGuessInfo.nextGuessSubmitted ?<Title>Latest Guess</Title>  : <Title>Submit Next Guess</Title>}
      <Typography color="textSecondary" className={classes.guessText}>
        {new Date(props.nextGuessInfo.nextGuessDate).toDateString()}
      </Typography>
      {form}
    </React.Fragment>
  );
}