require("dotenv").config();
import { initializeGrids } from "./grid-creation/grid.js";

let rows = 50;
let cols = 50;

let playing = false;

var grid = new Array(rows);
var nextGrid = new Array(rows);

console.log(grid.length);

let timer;
let reproductionTime = 100;

// function initializeGrids() {
//   for (let i = 0; i < rows; i++) {
//     grid[i] = new Array(cols);
//     nextGrid[i] = new Array(cols);
//   }
// }
// function resetGrids() {
//   for (var i = 0; i < rows; i++) {
//     for (var j = 0; j < cols; j++) {
//       grid[i][j] = 0;
//       nextGrid[i][j] = 0;
//     }
//   }
// }

// Lay out the board
function createTable() {
  let gridContainer = document.getElementById("gridContainer");
  if (!gridContainer) {
    // Throw error
    console.error("Problem: No div for the drid table!");
  }
  let table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
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
  let row = rowcol[0];
  let col = rowcol[1];

  let classes = this.getAttribute("class");
  if (classes.indexOf("live") > -1) {
    this.setAttribute("class", "dead");
    grid[row][col] = 0;
  } else {
    this.setAttribute("class", "live");
    grid[row][col] = 1;
  }
}

function initialize() {
  createTable();
  initializeGrids();
  resetGrids();
}

// Start everything
window.onload = initialize;
