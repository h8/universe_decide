export function selectCount(state) {
  return {count: state.count};
}

export function selectRange(state) {
  return {
    from: state.from,
    to: state.to,
  };
}

export function selectResult(state){
  return {result: state.result};
}
