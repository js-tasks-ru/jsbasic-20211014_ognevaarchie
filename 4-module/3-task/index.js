function highlight(table) {
  const tBody = table.tBodies[0];
  for (let index = 0; index < tBody.rows.length; index++) {
    const elementTr = tBody.rows[index];
    // const elementTd = 
    if (elementTr.cells[3].dataset.available == 'true') {
      elementTr.classList.add('available'); 
    } if (elementTr.cells[3].dataset.available == 'false') {
      elementTr.classList.add('unavailable'); 
    } else {
      elementTr.setAttribute('hidden', true);
    }
    console.log(elementTr.cells[3].dataset.available)
    if (elementTr.cells[2].textContent == 'm') {
      elementTr.classList.add('male');
    } else if (elementTr.cells[2].textContent == 'f') {
      elementTr.classList.add('female');
    }
    if (elementTr.cells[1].textContent < 18) {
      elementTr.style = "text-decoration: line-through";
    } 
  }
    

   
}

