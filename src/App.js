import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/SignIn/SignIn';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
import {useAuth0} from '@auth0/auth0-react'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0d611b',
    },
  },
});

function App(props) {

  const {isAuthenticated} = useAuth0()

  let routes = (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Redirect to="/" />
    </Switch>
  );

  //first see if we have a valid token in the state and redirect user to dashboard, much quicker than checking the authentication status with the auth0 package
  if (props.token) {
    routes = (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />          
        <Redirect to="/dashboard" />
      </Switch>
    );
  }// next see if the user isAuthenticated with auth0 but has no token yet (has just signed in)
  else if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />          
        <Redirect to="/dashboard" />
      </Switch>
    );
  }

  React.useEffect(() => {
    props.onTryAutoSignup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        {routes}
      </MuiThemeProvider>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      token: state.auth.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));