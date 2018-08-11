class treeNode{
    constructor(val){
        this.value = val;
        this.edges = [];
        this.searched = false;
        this.parent = null;
    }

    addEdge(node){
        this.edges.push(node);
        node.edges.push(this);
    }
}