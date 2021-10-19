function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries) {
    const element = salaries[key];
    if (Number.isFinite(element)) {
      sum += element;
    }
   
  }
  return sum;
}
