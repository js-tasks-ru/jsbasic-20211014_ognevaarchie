function filterRange(arr, a, b) {
  let bigFloppa = arr.filter(element => {
    if (element >= a && element <= b) {
      return true; 
    } else {
      return false;
    }
  });

  return bigFloppa;
}
 

