function checkSpam(str) {
  const ucStr = str.toUpperCase();
  if (ucStr.includes('XXX') || ucStr.includes('1XBET')) {return true;} 
  return false;
} 
