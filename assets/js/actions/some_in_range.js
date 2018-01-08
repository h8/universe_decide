const changeCount = (count) => ({
  type: 'CHANGE_COUNT',
  count: Number(count)
});

const changeFrom = (from) => ({
  type: 'CHANGE_FROM',
  from: Number(from)
});

const changeTo = (to) => ({
  type: 'CHANGE_TO',
  to: Number(to)
});

const doClick = () => ({
  type: 'DO_CLICK'
});

export {
  changeCount,
  changeFrom,
  changeTo,
  doClick
};