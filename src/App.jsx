import React, { Component, lazy, Suspense } from 'react';
// import AppMain from './views/AppMain';
import AppBar from './UserMenu/AppBar';
import { Switch, Route } from 'react-router-dom';
import * as authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
const HomeView = lazy(() =>
  import('./views/HomeView/HomeView.jsx' /* webpackChunkName: "home-view" */),
);

const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView.jsx' /* webpackChunkName: "register-view" */
  ),
);

const LoginView = lazy(() =>
  import(
    './views/LoginView/LoginView.jsx' /* webpackChunkName: "login-view" */
  ),
);

const TodosView = lazy(() =>
  import(
    './views/TodosView/TodosView.jsx' /* webpackChunkName: "todos-view" */
  ),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<p>Loading in progress...</p>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path={'/register'} component={RegisterView} />
            <Route path={'/login'} component={LoginView} />
            <Route path={'/todos'} component={TodosView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
