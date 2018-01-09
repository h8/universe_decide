import React from 'react';
import {connect} from "react-redux";

import Button from '../button';

import {doClick} from "../../actions/some_in_range";

const ButtonBar = ({doClick}) => (
  <Button caption="Do!" onClick={doClick}/>
);
export default connect(null, {doClick})(ButtonBar);