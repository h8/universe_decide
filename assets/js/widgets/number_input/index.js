import React from 'react';
import PropTypes from 'prop-types';

export default class NumberInput extends React.Component {
  static displayName = "NumberInput";

  static defaultProps = {
    value: 0,
    onChange: () => {}
  };

  static propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
  };

  render() {
    const {value} = this.props;

    return <input type="number"
                  value={value}
                  onChange={this.changed}/>;
  }

  changed = event => this.props.onChange(event.target.value);
}