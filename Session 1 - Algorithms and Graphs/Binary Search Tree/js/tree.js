class treeNode{
      constructor(val, x, y){
            this.val = val;
            this.left = null;
            this.right = null;
            this.x = x;
            this.y = y;
      }

      addNode(n){
            if(n.val < this.val){
                  if(this.left == null){
                        this.left = n;
                        this.left.x = this.x - 10;
                        this.left.y = this.y + 20;
                  }else{
                        this.left.addNode(n);
                  }
            }else if(n.val > this.val){
                  if(this.right == null){
                        this.right = n;
                        this.right.x = this.x + 20;
                        this.right.y = this.y + 20;
                  }else{
                        this.right.addNode(n);
                  }
            }
      }

      visit(parent){
            
            if(this.left != null){
                  this.left.visit(this);
            }
            fill(255);
            noStroke();
            textAlign(CENTER);
            text(this.val, this.x, this.y);
            stroke(255);
            noFill();
            // ellipse(this.x, this.y, 20, 20);
            line(parent.x, parent.y, this.x, this.y);
            if(this.right != null){
                  this.right.visit(this);
            }
      }

      search(val){
            return (val == this.val) ? this.val: 
                        (val < this.val && this.left != null)? this.left.search(val): 
                        (val > this.val && this.right != null) ? this.right.search(val): null;
      }
}

class Tree{
    constructor(){
          this.root = null;
    }

    addValue(val){
          const n = new treeNode(val);
          if(this.root == null){
                this.root = n;
                this.root.x = width/2;
                this.root.y = 20;
          }else{
                this.root.addNode(n);
          }
    }

    traverse(){
          this.root.visit(this.root);
    }

    search(val){
          const res = this.root.search(val);
          return res;
    }
}