export default (from, to) => {
  if(from === to) {
    return from
  }
  return `(${from} - ${to})`;
};
