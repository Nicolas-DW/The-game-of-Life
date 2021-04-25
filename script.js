// require("dotenv").config();
import { initializeGrids, resetGrids } from "./grid-creation/grid.js";

import { cellClickHandler } from "./handlers/handlers.js";

import { createTable } from "./table-creation/table.js";

let playing = false;

let timer;
let reproductionTime = 100;

function initialize() {
  createTable();
  initializeGrids();
  resetGrids();
}

// Start everything
window.onload = initialize;
