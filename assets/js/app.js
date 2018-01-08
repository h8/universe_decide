import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import SomeInRange from './widgets/some_in_range';
import some_in_range_reducer from './reducers/some_in_range';

const store = createStore(some_in_range_reducer);

render(
  <Provider store={store}>
    <SomeInRange/>
  </Provider>,
  document.getElementById('container')
);