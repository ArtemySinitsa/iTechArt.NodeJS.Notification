import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { bindActionCreators } from 'redux';
import { getToken } from './../actions';

export default (Wrapped) => {
  class AuthWrapper extends Component {
    static propTypes = {
      getToken: PropTypes.func.isRequired,
      token: PropTypes.string,
    }

    static defaultProps = { token: '' }

    componentDidMount() {
      this.props.getToken();
    }

    render() {
      let isAuth;
      let user;
      try {
        user = jwtDecode(this.props.token);
        isAuth = true;
      } catch (error) {
        isAuth = false;
      }
      return <Wrapped isAuth={isAuth} user={user} {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    token: state.user.token,
  });
  const mapDispatchToProps = dispatch => ({
    getToken: bindActionCreators(getToken, dispatch),
  });

  return connect(mapStateToProps, mapDispatchToProps)(AuthWrapper);
};

