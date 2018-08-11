"use strict";

var data = void 0;
var graph = void 0;
function preload() {
      data = loadJSON("js/data.json");
}

function setup() {
      graph = new Graph();
      noLoop();
      noCanvas();
      // const canvas_container = document.querySelector("#bfs");
      // let canvas = createCanvas(canvas_container.clientWidth, canvas_container.clientHeight);
      // canvas.parent('bfs');
      background(51);
      var movies = data.movies;
      movies.forEach(function (movie) {
            var title = movie.title,
                casts = movie.cast,
                movieNode = new treeNode(title);
            graph.addNode(movieNode);
            casts.forEach(function (cast) {
                  var actor = cast,
                      actorNode = graph.getNode(actor);
                  if (actorNode == undefined) {
                        actorNode = new treeNode(actor);
                  }
                  movieNode.addEdge(actorNode);
                  graph.addNode(actorNode);
            });
      });

      var start = graph.setStart("Rachel McAdams");
      var end = graph.setEnd("Kevin Bacon");
      console.log(graph);

      var queue = [];
      start.searched = true;
      queue.push(start);

      var _loop = function _loop() {
            var current = queue.shift();
            if (current == end) {
                  return "break";
            }
            var edges = current.edges;
            edges.forEach(function (edge) {
                  if (!edge.searched) {
                        edge.searched = true;
                        edge.parent = current;
                        queue.push(edge);
                  }
            });
      };

      while (queue.length > 0) {
            var _ret = _loop();

            if (_ret === "break") break;
      }

      var path = [];
      path.push(end);
      var next = end.parent;
      while (next != null) {
            path.push(next);
            next = next.parent;
      }
      var txt = '';
      for (var i = path.length - 1; i >= 0; i--) {
            var trace = path[i].value;
            txt += i != 0 ? trace + " ---> " : trace;
      }
      createP(txt);
}
