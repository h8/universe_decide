import React from 'react';
import {connect} from "react-redux";

import Button from '../button';

import {doClick} from "../../actions/some_in_range";

import arrow from './arrow.png';

const ButtonBar = ({doClick}) => (
  <div>
    <img src={arrow} width={64} height={16}/>
    <Button caption="Do!" onClick={doClick}/>
  </div>
);
export default connect(null, {doClick})(ButtonBar);