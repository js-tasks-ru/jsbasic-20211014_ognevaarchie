function getMinMax(str) {
  const splittedArray = str.split(' ').filter(string => Number.isFinite(+string));
  return {
    min: Math.min(...splittedArray),
    max: Math.max(...splittedArray),
  };
}
 
