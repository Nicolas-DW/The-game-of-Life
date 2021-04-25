import { state } from "../stateOfGame/state.js";
import {computeNextGen} from "../grid-creation/grid.js"
import { rowCols, gridAndNextGrid } from "../grid-creation/grid.js";

// run the life game
export function play() {
  computeNextGen();

  if (state.playing) {
    state.timer = setTimeout(play, state.reproductionTime);
  }
}

// RULES
// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
export function applyRules(row, col) {
  var numNeighbors = countNeighbors(row, col);
  if (gridAndNextGrid.grid[row][col] == 1) {
    if (numNeighbors < 2) {
      gridAndNextGrid.nextGrid[row][col] = 0;
    } else if (numNeighbors == 2 || numNeighbors == 3) {
      gridAndNextGrid.nextGrid[row][col] = 1;
    } else if (numNeighbors > 3) {
      gridAndNextGrid.nextGrid[row][col] = 0;
    }
  } else if (gridAndNextGrid.grid[row][col] == 0) {
    if (numNeighbors == 3) {
      gridAndNextGrid.nextGrid[row][col] = 1;
    }
  }
}

export function countNeighbors(row, col) {
  var count = 0;
  if (row - 1 >= 0) {
    if (gridAndNextGrid.grid[row - 1][col] == 1) count++;
  }
  if (row - 1 >= 0 && col - 1 >= 0) {
    if (gridAndNextGrid.grid[row - 1][col - 1] == 1) count++;
  }
  if (row - 1 >= 0 && col + 1 < rowCols.cols) {
    if (gridAndNextGrid.grid[row - 1][col + 1] == 1) count++;
  }
  if (col - 1 >= 0) {
    if (gridAndNextGrid.grid[row][col - 1] == 1) count++;
  }
  if (col + 1 < rowCols.cols) {
    if (gridAndNextGrid.grid[row][col + 1] == 1) count++;
  }
  if (row + 1 < rowCols.rows) {
    if (gridAndNextGrid.grid[row + 1][col] == 1) count++;
  }
  if (row + 1 < rowCols.rows && col - 1 >= 0) {
    if (gridAndNextGrid.grid[row + 1][col - 1] == 1) count++;
  }
  if (row + 1 < rowCols.rows && col + 1 < rowCols.cols) {
    if (gridAndNextGrid.grid[row + 1][col + 1] == 1) count++;
  }
  return count;
}
