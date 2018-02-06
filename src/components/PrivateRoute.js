import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = props => (props.isAuth && <Route {...this.props} />);

export default PrivateRoute;

