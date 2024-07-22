'use strict';

const table = document.querySelector('table');

[...table.rows].forEach((item) => {
  const secondCell = item.cells[1].cloneNode(true);

  item.cells[3].after(secondCell);
});
