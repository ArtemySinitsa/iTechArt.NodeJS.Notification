import React from 'react';
import { Switch, Route } from 'react-router';
import PrivateRoute from './PrivateRoute';

import { LoginPage, RegistrationPage } from './../authorization';
import DashboardPage from './../dashboard/containers/DashboardPage';
import NotificationPage from './../notification/contatiners/NotificationPage';
import Navigation from './Navigation';

export default () => (
  <div>
    <Navigation isAuth={false} logout={() => { }} />
    <main>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/registration" component={RegistrationPage} />
        <PrivateRoute path="/dashboard" isAuth={false} component={DashboardPage} />
        <PrivateRoute path="/notification" isAuth={false} component={NotificationPage} />
      </Switch>
    </main>
  </div>
);
