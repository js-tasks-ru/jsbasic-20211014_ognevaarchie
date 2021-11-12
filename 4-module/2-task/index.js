function makeDiagonalRed(table) {
  for (let index = 0; index < table.rows.length; index++) {
    const elementRow = table.rows[index];
    elementRow.cells[index].style.backgroundColor = 'red';
  }
}
