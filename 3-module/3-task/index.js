function camelize(str) {
  let newArray = str.split('-').map((word, i) => {
    if (i == 0) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1); 
    }
    
  });
  return newArray.join('');


 

}

