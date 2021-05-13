import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import DaysWon from './DaysWon/DaysWon';
import LastResult from './LastResult/LastResult';
import PreviousResults from './PreviousResults/PreviousResults';
import SubmitGuess from './SubmitGuess/SubmitGuess';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Button from '@material-ui/core/Button';
import { useAuth0 } from "@auth0/auth0-react";
import Loading from '../../UI/Loading/Loading';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://kovidr.ie/">
        KovidR
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 290,
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  //state items needed for form + user management
  const [guessToSubmit, setGuessToSubmit] = React.useState('');
  const [guessToSubmitError, setGuessToSubmitError] = React.useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(true);
  const [guessToSubmitErrorText, setGuessToSubmitErrorText] = React.useState('');
  const { logout, getAccessTokenSilently } = useAuth0();

  const guessSubmittedHandler = (event) => {
    event.preventDefault();
    const guess = {totalCases: guessToSubmit, guessDate: props.nextGuessInfo.nextGuessDate}
    props.createGuess(guess, props.token);
  }

  const logoutHandler = (event) => {
    event.preventDefault();
    props.logout();
    logout({ returnTo: window.location.origin });
  }

  const onChangeGuessToSubmitHandler = (event) => {
    setGuessToSubmit(event.target.value);
    const guess = event.target.value;

    if(parseInt(guess) != null && parseInt(guess) > 0) {
      setGuessToSubmitError(false);
      setSubmitButtonDisabled(false);
      setGuessToSubmitErrorText('');
    }
    else {
      setGuessToSubmitError(true);
      setSubmitButtonDisabled(true);
      setGuessToSubmitErrorText('Please enter a valid number');
    } 
  };

  const initData = (token) => {
      props.fetchDaysWon(token);
      props.fetchResults(6, token);
      props.fetchUserSubmittedNextGuess(token);
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: 'https://api.kovidr.ie/guess',
          scope: "read:guesses read:caseNumbers write:guesses",
        });

        props.auth(accessToken);
        initData(accessToken);
      } catch (e) {
        console.log(e.message);
      }
    };

    if(!props.token) {
      getToken();
    }
    else {
      initData(props.token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  let mainDiv = <Loading />;

  if(props.results && props.daysWon && props.nextGuessInfo) {
    mainDiv = <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  {/* Last Result */}
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                      <LastResult result={props.results[0]}/>
                    </Paper>
                  </Grid>
                  {/* Days Won Pie Chart */}
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                      <DaysWon results={props.daysWon}/>
                    </Paper>
                  </Grid>
                  {/* Submit Guess */}
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                      <SubmitGuess nextGuessInfo={props.nextGuessInfo} 
                                                          guessSubmitted={guessSubmittedHandler} 
                                                          onChangeGuess={onChangeGuessToSubmitHandler}
                                                          guessError={guessToSubmitError}
                                                          submitButtonDisabled={submitButtonDisabled}
                                                          errorText={guessToSubmitErrorText}/>
                    </Paper>
                  </Grid>
                  {/* Previous Results */}
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <PreviousResults results={props.results.slice(1)} />
                    </Paper>
                  </Grid>
                </Grid>
                <Box pt={4}>
                  <Copyright />
                </Box>
              </Container>;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, false && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            KovidR.
          </Typography>
          <IconButton color="inherit">
          <Button variant="contained"
                  color="secondary"
                  className={classes.submit}
                  onClick={logoutHandler}>
                    Log Out
          </Button>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {mainDiv}
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      daysWon: state.guess.daysWon,
      results: state.guess.results,
      loading: state.guess.loading,
      nextGuessInfo: state.guess.nextGuessInfo,
      token: state.auth.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchDaysWon: (token) => dispatch(actions.fetchResultsByDaysWon(token)),
      fetchResults: (numResultsToFetch, token) => dispatch(actions.fetchResults(numResultsToFetch, token)),
      fetchUserSubmittedNextGuess: (token) => dispatch(actions.fetchUserSubmittedNextGuess(token)),
      createGuess: (guess, token) => dispatch(actions.createGuess(guess, token)),
      auth: (token) => dispatch(actions.auth(token)),
      logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);