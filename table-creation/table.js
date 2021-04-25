import { rowCols } from "../grid-creation/grid.js";
import { cellClickHandler } from "../handlers/cellClickHandlers.js";

// creation of table
export function createTable() {
  let gridContainer = document.getElementById("gridContainer");
  if (!gridContainer) {
    // Throw error
    console.error("Problem: No div for the drid table!");
  }
  let table = document.createElement("table");

  for (let i = 0; i < rowCols.rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < rowCols.cols; j++) {
      //
      let cell = document.createElement("td");
      cell.setAttribute("id", i + "_" + j);
      cell.setAttribute("class", "dead");
      cell.onclick = cellClickHandler;
      tr.appendChild(cell);
    }
    table.appendChild(tr);
  }
  gridContainer.appendChild(table);
}
