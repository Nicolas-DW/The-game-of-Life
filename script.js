// require("dotenv").config();
import {
  rowCols,
  gridAndNextGrid,
  initializeGrids,
  resetGrids,
} from "./grid-creation/grid.js";

let playing = false;


console.log(rowCols);

let timer;
let reproductionTime = 100;

// Lay out the board
function createTable() {
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

function cellClickHandler() {
  let rowcol = this.id.split("_");
  let rows = rowcol[0];
  let col = rowcol[1];

  let classes = this.getAttribute("class");
  if (classes.indexOf("live") > -1) {
    this.setAttribute("class", "dead");
    gridAndNextGrid.grid[rows][col] = 0;
  } else {
    this.setAttribute("class", "live");
    gridAndNextGrid.grid[rows][col] = 1;
  }
}

function initialize() {
  createTable();
  initializeGrids();
  resetGrids();
}

// Start everything
window.onload = initialize;
