import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

class Panel extends PureComponent {
  render() {
    return (
      <Container className={`bg-faded m-4 rounded p-2 ${this.props.wide ? 'col-9' : 'col-6'}`}>
        <div className="text-center">
          <h2>{this.props.header}</h2>
        </div>
        <div className="p-4">
          {this.props.children}
        </div>
      </Container>
    );
  }
}

Panel.propTypes = {
  header: PropTypes.string,
  wide: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

Panel.defaultProps = {
  header: '',
  wide: false,
};

export default Panel;
