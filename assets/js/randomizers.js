function getType( obj ) {
  return Object.prototype.toString.call(obj);
}

const getSomeInRange = (count, from, to) => {
  const singleResult = Math.floor( Math.random() * (to + 1 - from) + from);
  if (count > 1) {
    return [singleResult].concat(getSomeInRange(count - 1, from, to));
  } else {
    return [singleResult];
  }
};

export {
  getSomeInRange
};