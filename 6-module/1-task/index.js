/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    let tableElement = document.createElement("table");

    tableElement.innerHTML = `    
    <thead>
      <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
      </tr>
    </thead>`;

    let tbodyElement = document.createElement("tbody");

    for (let index = 0; index < rows.length; index++) {
      const element = rows[index];
      let trElement = tbodyElement.appendChild(document.createElement("tr"));
      let tdElement1 = trElement.appendChild(document.createElement("td"));
      let tdElement2 = trElement.appendChild(document.createElement("td"));
      let tdElement3 = trElement.appendChild(document.createElement("td"));
      let tdElement4 = trElement.appendChild(document.createElement("td"));
      let tdElement5 = trElement.appendChild(document.createElement("td"));
      tdElement1.textContent = element.name;
      tdElement2.textContent = element.age;
      tdElement3.textContent = element.salary;
      tdElement4.textContent = element.city;

      const button = document.createElement("button");
      button.textContent = `[X]`;
      button.addEventListener('click', function() {
        trElement.remove();
      });
      tdElement5.appendChild(button);
    }

    tableElement.appendChild(tbodyElement);
    this.elem = tableElement;
  }
}
 