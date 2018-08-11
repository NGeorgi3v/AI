function setup(){
      noLoop();
      const bst_canvas_container = document.querySelector("#bst");
      var bst_canvas = createCanvas(bst_canvas_container.clientWidth, bst_canvas_container.clientHeight);
      bst_canvas.parent('bst');
      background(51);
      let tree = new Tree;
      for (let i = 0; i < 10; i++) {
            tree.addValue(Math.floor(Math.random() * 100));
      }
      tree.traverse();
      const search = tree.search(20);
      if(search != null){
            console.log(`Found ${search}`);
      }else{
            console.log(`20 is not in the tree`);
      }
}




