import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {selectResult} from "../../selectors/some_in_range";

class Result extends React.Component {
  static displayName = "Result";

  static defaultProps = {
    values: [],
  };

  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.number),
  };

  render () {
    const {result} = this.props;

    return (
      <ul>
        {result.map((value, index) =>
          <li key={index}>{value}</li>
        )}
      </ul>
    );
  }
}

export default connect(selectResult)(Result);
