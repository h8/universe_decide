import {getSomeInRange} from '../randomizers';

const defaultState = {
  count: 1,
  from: 1,
  to: 10,
  result: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_COUNT':
      if (action.count > 0) {
        return Object.assign({}, state, {count: action.count})
      } else {
        return state;
      }
    case 'CHANGE_FROM':
      if (action.from < state.to) {
        return Object.assign({}, state, {from: action.from})
      } else {
        return state;
      }
    case 'CHANGE_TO':
      if (action.to > state.from) {
        return Object.assign({}, state, {to: action.to})
      } else {
        return state;
      }
    case 'DO_CLICK':
      let {count, from, to} = state;
      return Object.assign({}, state, {result: getSomeInRange(count, from, to)});
    default:
      return state;
  }
};