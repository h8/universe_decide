import {getSomeInRange} from "../randomizers";

export const changeCount = (count) => ({
  type: 'CHANGE_COUNT',
  count
});

export const changeFrom = (from) => ({
  type: 'CHANGE_FROM',
  from
});

export const changeTo = (to) => ({
  type: 'CHANGE_TO',
  to
});

const setResult = (result) => ({
  type: 'SET_RESULT',
  result
});

export const doClick = () => {
  return (dispatch, getState) => {
    const {count, from, to} = getState();
    const result = getSomeInRange(count, from, to);

    dispatch(setResult(result));
  };
};
