import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Form, FormGroup, Button } from 'reactstrap';
class LoginForm extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <Panel header='Log in'>
                    <div className='d-flex flex-column'>
                        <FormGroup>
                            <Label >Email</Label>
                            <Input type="email" name="email" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label >Password</Label>
                            <Input type="password" name="password" placeholder="Password" />
                        </FormGroup>
                        <Button className='align-self-end'>Log in</Button>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default LoginForm;