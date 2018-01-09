import {getSomeInRange} from './randomizers';

test('count 1 should lead to a single result', () => {
  expect(getSomeInRange(1, 1, 10).length).toBe(1);
});