import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, RegistrationPage } from './../authorization';
import Navigation from './Navigation';

class Layout extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <main>
                    <Switch>
                        <Route path='/login' component={LoginPage} />
                        <Route path='/registration' component={RegistrationPage} />
                    </Switch>
                </main>

            </div>
        );
    }
}

export default Layout;