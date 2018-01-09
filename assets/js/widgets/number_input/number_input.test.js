import { mount } from 'enzyme';
import React from 'react';

import NumberInput from '.';

test("NumberInput should have default value", () => {
  const x = jest.fn();
  const wrapper = mount(<NumberInput value={10} onChange={x}/>);
  expect(wrapper.find("input").getDOMNode().value).toBe("10");
  expect(x).not.toHaveBeenCalled();
});

test("NumberInput should be editable", () => {
  const x = jest.fn();
  const wrapper = mount(<NumberInput onChange={x}/>);
  wrapper.simulate("change", {target: {value: "123"}});
  expect(x).toHaveBeenCalledWith(123);
});
