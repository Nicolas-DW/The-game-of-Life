import { state } from "../stateOfGame/state.js";
import { play } from "../actionsForLife/actions.js"
import { rowCols, resetGrids, gridAndNextGrid} from "../grid-creation/grid.js"

export function setupControlButtons() {
  // button to start
  var startButton = document.getElementById("start");
  startButton.onclick = startButtonHandler;

  // button to clear
  var clearButton = document.getElementById("clear");
  clearButton.onclick = clearButtonHandler;

  // button to set random initial state
  var randomButton = document.getElementById("random");
  randomButton.onclick = randomButtonHandler;
}

// START/PAUSE/continue the game
export function startButtonHandler() {
  if (state.playing) {
    console.log("Pause the game");
    state.playing = false;
    this.innerHTML = "Continue";
    clearTimeout(timer);
  } else {
    console.log("Continue the game");
    state.playing = true;
    this.innerHTML = "Pause";
    play();
  }
}

// Random BUTTON
export function randomButtonHandler() {
  if (state.playing) return;
  clearButtonHandler();
  for (var i = 0; i < rowCols.rows; i++) {
    for (var j = 0; j < rowCols.cols; j++) {
      var isLive = Math.round(Math.random());
      if (isLive == 1) {
        var cell = document.getElementById(i + "_" + j);
        cell.setAttribute("class", "live");
        gridAndNextGrid.grid[i][j] = 1;
      }
    }
  }
}

// CLEAR BUTTON
export function clearButtonHandler() {
  console.log("Clear the game: stop playing, clear the grid");

  state.playing = false;
  var startButton = document.getElementById("start");
  startButton.innerHTML = "Start";
  clearTimeout(state.timer);

  var cellsList = document.getElementsByClassName("live");
  // convert to array first, otherwise, you're working on a live node list
  // and the update doesn't work!
  var cells = [];
  for (var i = 0; i < cellsList.length; i++) {
    cells.push(cellsList[i]);
  }

  for (var i = 0; i < cells.length; i++) {
    cells[i].setAttribute("class", "dead");
  }
  resetGrids;
}

