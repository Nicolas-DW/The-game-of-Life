// Evrything grid creation update etc...

export let rowCols = {
  rows: 50,
  cols: 50,
}

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
