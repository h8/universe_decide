import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.css';

class Button extends React.Component {
  static displayName = "Button";

  static defaultProps = {
    caption: "Button1",
  };

  static propTypes = {
    caption: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const {caption, onClick} = this.props;
    return (
      <button className={styles.element} onClick={onClick}>{caption}</button>
    );
  }
}

export default Button;
