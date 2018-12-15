import React from 'react';
import { PropTypes } from 'prop-types';
import './alert.scss';


const AlertBox = ({ theme, message }) => {
  return (
    <div className={`alert alert-${theme}`}>
      <p>{message}</p>
    </div>
  );
};

AlertBox.propTypes = {
  theme: PropTypes.string.isRequired,
  message: PropTypes.string,
};

AlertBox.defaultProps = {
  message: null,
};

export default AlertBox;
