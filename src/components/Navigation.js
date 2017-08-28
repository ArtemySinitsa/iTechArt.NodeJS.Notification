import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar color="faded" light toggleable>
                <NavbarToggler right onClick={this.toggle} />
                <NavbarBrand href="/">Notifications</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to='/login'>Log in</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/registration'>Register</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;