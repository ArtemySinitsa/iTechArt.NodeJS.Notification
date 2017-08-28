import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Form, FormGroup, Button } from 'reactstrap';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.register(this.state);

    }

    render() {
        return (

            <Form className='d-flex flex-column' onSubmit={(e) => this.onSubmit(e)}>
                <FormGroup>
                    <Label >Email</Label>
                    <Input type="email" name='email' onChange={(e) => this.onChange(e)} value={this.state.email} placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label >Password</Label>
                    <Input type="password" name="password" onChange={(e) => this.onChange(e)} value={this.state.password} placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <Label >Password confirmation</Label>
                    <Input type="password" name="passwordConfirmation" onChange={(e) => this.onChange(e)} value={this.state.passwordConfirmation} placeholder="Password" />
                </FormGroup>
                <Button className='align-self-end'>Register</Button>
            </Form>

        );
    }
}

RegistrationForm.propTypes = {
    register: PropTypes.func.isRequired
}
export default RegistrationForm;