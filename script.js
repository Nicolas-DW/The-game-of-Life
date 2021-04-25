// require("dotenv").config();
import { initializeGrids, resetGrids } from "./grid-creation/grid.js";

import { createTable } from "./table-creation/table.js";

import { setupControlButtons } from "./handlers/buttons.js";

function initialize() {
  createTable();
  initializeGrids();
  resetGrids();
  setupControlButtons();
}

// Start everything
window.onload = initialize;
