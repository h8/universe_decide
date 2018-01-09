import { mount } from 'enzyme';
import React from 'react';

import Button from '.';

test("Button should have default caption", () => {
  const x = jest.fn();
  const wrapper = mount(<Button onClick={x}/>);
  expect(wrapper.text().length).toBeGreaterThan(0);
  expect(x.mock.calls.length).toBe(0);
});

test("Button should have the caption", () => {
  const x = jest.fn();
  const wrapper = mount(<Button caption="Click me!" onClick={x}/>);
  expect(wrapper.text()).toBe("Click me!");
  expect(x.mock.calls.length).toBe(0);
});

test("Button should be clickable", () => {
  const x = jest.fn();
  const wrapper = mount(<Button onClick={x}/>);
  wrapper.simulate("click");
  expect(x).toHaveBeenCalled();
});