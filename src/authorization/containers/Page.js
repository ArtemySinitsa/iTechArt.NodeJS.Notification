import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default (Component, submit) => {
  const mapStateToProps = state => ({
    errors: state.user.errors,
  });
  class WrapperComponent extends React.Component {
    submit = (data) => {
      this.props.dispatch(submit(data));
    }

    render() {
      return <Component submit={this.submit} {...this.props} />;
    }
  }

  WrapperComponent.propTypes = {
    errors: PropTypes.any,
  };

  WrapperComponent.defaultProps = {
    errors: {},
  };

  return connect(mapStateToProps)(WrapperComponent);
};

