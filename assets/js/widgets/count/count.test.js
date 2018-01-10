import React from 'react';
import { mount } from 'enzyme';
import {Provider} from 'react-redux';

import {mockStore} from '../../tests/mock_store';

import Count from '.';

test("Count value change should affect store", () => {
  const store = mockStore({count: 2, from: 1, to: 10});
  const wrapper = mount(
    <Provider store={store}>
      <Count/>
    </Provider>);
  wrapper.find("input").simulate("change", {target: {value: "123"}});
  expect(store.getActions()).toEqual([
    {type: "CHANGE_COUNT", count: 123},
  ]);
});
