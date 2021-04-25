import {
  gridAndNextGrid,
} from "../grid-creation/grid.js";

export function cellClickHandler() {
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
