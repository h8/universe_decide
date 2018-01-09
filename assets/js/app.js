import React from 'react';
import thunk from 'redux-thunk';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import SomeInRange from './widgets/some_in_range';
import some_in_range_reducer from './reducers/some_in_range';

const store = createStore(
  some_in_range_reducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <SomeInRange/>
  </Provider>,
  document.getElementById('container')
);