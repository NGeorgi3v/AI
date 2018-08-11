let data;
let graph;
function preload(){
      data = loadJSON("js/data.json");
}

function setup(){
      graph = new Graph();
      noLoop();
      noCanvas();
      // const canvas_container = document.querySelector("#bfs");
      // let canvas = createCanvas(canvas_container.clientWidth, canvas_container.clientHeight);
      // canvas.parent('bfs');
      background(51);
      const movies = data.movies;
      movies.forEach(movie => {
            let title = movie.title,
            casts = movie.cast,
            movieNode = new treeNode(title);
            graph.addNode(movieNode);
            casts.forEach(cast => {
                  let actor = cast,
                  actorNode = graph.getNode(actor);
                  if(actorNode == undefined){
                        actorNode = new treeNode(actor);
                  }
                  movieNode.addEdge(actorNode);
                  graph.addNode(actorNode);
            });
      });

      let start = graph.setStart("Rachel McAdams");
      let end = graph.setEnd("Kevin Bacon");
      console.log(graph);

      let queue = [];
      start.searched = true;
      queue.push(start);
      while(queue.length > 0){
            let current = queue.shift()
            if(current == end){
                  break;
            }
            let edges = current.edges;
            edges.forEach(edge =>{
                  if(!edge.searched){
                        edge.searched = true;
                        edge.parent = current;
                        queue.push(edge);
                  }
            });
      }

      let path = [];
      path.push(end);
      let next = end.parent;
      while(next != null){
            path.push(next);
            next = next.parent;
      }
      let txt = '';
      for (let i = path.length-1; i >= 0; i--) {
            const trace = path[i].value;
            txt += (i != 0) ? `${trace} ---> `: trace;
      }
      createP(txt);
}




