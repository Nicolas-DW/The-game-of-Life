// Evrything grid creation update etc...
import {applyRules} from "../actionsForLife/actions.js"


export let rowCols = {
  rows: 50,
  cols: 50,
};

export let gridAndNextGrid = {
  grid: new Array(rowCols.rows),
  nextGrid: new Array(rowCols.rows),
};

export function initializeGrids() {
  for (let i = 0; i < rowCols.rows; i++) {
    gridAndNextGrid.grid[i] = new Array(rowCols.cols);
    gridAndNextGrid.nextGrid[i] = new Array(rowCols.cols);
  }
}
export function resetGrids() {
  for (var i = 0; i < rowCols.rows; i++) {
    for (var j = 0; j < rowCols.cols; j++) {
      gridAndNextGrid.grid[i][j] = 0;
      gridAndNextGrid.nextGrid[i][j] = 0;
    }
  }
}

export function computeNextGen() {
  for (var i = 0; i < rowCols.rows; i++) {
    for (var j = 0; j < rowCols.cols; j++) {
      applyRules(i, j);
    }
  }
  // copy NextGrid to grid, and reset nextGrid
  copyAndResetGrid();
  // copy all 1 values to "live" in the table
  updateView();
}

export function updateView() {
  for (var i = 0; i < rowCols.rows; i++) {
    for (var j = 0; j < rowCols.cols; j++) {
      var cell = document.getElementById(i + "_" + j);
      if (gridAndNextGrid.grid[i][j] == 0) {
        cell.setAttribute("class", "dead");
      } else {
        cell.setAttribute("class", "live");
      }
    }
  }
}

export function copyAndResetGrid() {
  for (var i = 0; i < rowCols.rows; i++) {
    for (var j = 0; j < rowCols.cols; j++) {
      gridAndNextGrid.grid[i][j] = gridAndNextGrid.nextGrid[i][j];
      gridAndNextGrid.nextGrid[i][j] = 0;
    }
  }
}
