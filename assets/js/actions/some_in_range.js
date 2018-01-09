export const changeCount = (count) => ({
  type: 'CHANGE_COUNT',
  count: Number(count)
});

export const changeFrom = (from) => ({
  type: 'CHANGE_FROM',
  from: Number(from)
});

export const changeTo = (to) => ({
  type: 'CHANGE_TO',
  to: Number(to)
});

export const doClick = () => ({
  type: 'DO_CLICK'
});
