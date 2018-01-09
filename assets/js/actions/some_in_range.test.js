import {mockStore} from '../tests/mock_store';

import {doClick} from './some_in_range';

test("doClick", () => {
  const store = mockStore({count: 2, from: 1, to: 10});
  store.dispatch(doClick());
  expect(store.getActions()).toEqual([
    {type: "SET_RESULT", result: [expect.anything(), expect.anything()]},
  ]);
});