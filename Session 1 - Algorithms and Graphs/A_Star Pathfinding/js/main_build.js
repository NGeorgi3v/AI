"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var rows = 50,
    cols = 50;
var grid = [cols],
    openSet = [],
    // Spots that are being checked at the moment
closedSet = [],
    // Spots that are already checked
start = void 0,
    end = void 0,
    w = void 0,
    h = void 0,
    path = [];

var Spot = function () {
      function Spot(x, y) {
            _classCallCheck(this, Spot);

            this.x = x;
            this.y = y;

            this.f = 0;
            this.g = 0;
            this.h = 0;

            this.neighbours = [];
            this.previous = null;
            this.wall = false;
            if (random(1) < 0.3) {
                  this.wall = true;
            }
      }

      _createClass(Spot, [{
            key: "show",
            value: function show(clr) {
                  if (this.wall) {
                        fill(0);
                        noStroke();
                        ellipse(this.x * w + w / 2, this.y * h + h / 2, w / 2, h / 2);
                  } else if (clr) {
                        fill(clr);
                        rect(this.x * w, this.y * h, w, h);
                  }
            }
      }, {
            key: "addNeighbours",
            value: function addNeighbours(grid) {
                  var i = this.x;
                  var j = this.y;
                  if (i < cols - 1) {
                        this.neighbours.push(grid[i + 1][j]);
                  }
                  if (i > 0) {
                        this.neighbours.push(grid[i - 1][j]);
                  }
                  if (j < rows - 1) {
                        this.neighbours.push(grid[i][j + 1]);
                  }
                  if (j > 0) {
                        this.neighbours.push(grid[i][j - 1]);
                  }
                  if (i > 0 && j > 0) {
                        this.neighbours.push(grid[i - 1][j - 1]);
                  }
                  if (i < cols - 1 && j > 0) {
                        this.neighbours.push(grid[i + 1][j - 1]);
                  }
                  if (i > 0 && j < rows - 1) {
                        this.neighbours.push(grid[i - 1][j + 1]);
                  }
                  if (i < cols - 1 && j < rows - 1) {
                        this.neighbours.push(grid[i + 1][j + 1]);
                  }
            }
      }]);

      return Spot;
}();

var heuristic = function heuristic(a, b) {
      return dist(a.x, a.y, b.x, b.y);
};

function setup() {
      var canvas_container = document.querySelector("#a_star");
      var canvas = createCanvas(canvas_container.clientWidth, canvas_container.clientHeight);
      canvas.parent('a_star');

      w = width / cols;
      h = height / rows;

      //Generating 2D Array
      for (var i = 0; i < cols; i++) {
            grid[i] = [rows];
      }
      for (var _i = 0; _i < cols; _i++) {
            for (var j = 0; j < rows; j++) {
                  grid[_i][j] = new Spot(_i, j); // Creating a spot object for each grid item
            }
      }

      for (var _i2 = 0; _i2 < cols; _i2++) {
            for (var _j = 0; _j < rows; _j++) {
                  grid[_i2][_j].addNeighbours(grid);
            }
      }

      start = grid[0][0]; // Top Left
      end = grid[cols - 1][rows - 1]; // Bottom Right
      // Prevent start and end to be walls
      start.wall = false;
      end.wall = false;
      openSet.push(start);
}

function draw() {
      if (openSet.length > 0) {
            var lowestIndex = 0;
            openSet.forEach(function (element, index) {
                  return lowestIndex = element.f < openSet[lowestIndex].f ? index : lowestIndex;
            });
            var current = openSet[lowestIndex];
            if (current == end) {

                  console.log("DONE!");
                  noLoop();
            }

            openSet.map(function (obj, index) {
                  if (obj == current) {
                        openSet.splice(index, 1);
                  }
            });
            closedSet.push(current);
            current.neighbours.forEach(function (neighbour) {
                  if (!closedSet.includes(neighbour) && !neighbour.wall) {
                        var tempG = current.g + heuristic(neighbour, current);
                        var newPath = false;
                        if (openSet.includes(neighbour)) {
                              if (tempG < neighbour.g) {
                                    neighbour.g = tempG;
                                    newPath = true;
                              }
                        } else {
                              neighbour.g = tempG;
                              newPath = true;
                              openSet.push(neighbour);
                        }
                        if (newPath) {
                              neighbour.h = heuristic(neighbour, end);
                              neighbour.f = neighbour.g + neighbour.h;
                              neighbour.previous = current;
                        }
                  }
            });
      } else {
            console.log("No Solution");
            noLoop();
            return;
      }

      background(255);
      for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
                  grid[i][j].show();
            }
      }

      for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
                  grid[i][j].show();
            }
      }

      //     for (var i = 0; i < closedSet.length; i++) {
      //       closedSet[i].show(color(255, 0, 0, 50));
      //     }

      //     for (var i = 0; i < openSet.length; i++) {
      //       openSet[i].show(color(0, 255, 0, 50));
      //     }

      // Path
      path = [];
      var temp = current;
      path.push(temp);
      while (temp.previous) {
            path.push(temp.previous);
            temp = temp.previous;
      }

      noFill();
      stroke(255, 0, 200);
      strokeWeight(w / 2);
      beginShape();
      path.forEach(function (el) {
            vertex(el.x * w + w / 2, el.y * h + h / 2);
      });

      endShape();
}
