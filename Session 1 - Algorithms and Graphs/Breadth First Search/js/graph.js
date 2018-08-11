class Graph{
    constructor(){
        this.nodes = [];
        this.graph = {};
        this.end = null;
        this.start = null;
    }

    addNode(n){
        // Node into array and ass array a.k.a. obj;
        this.nodes.push(n);
        let title = n.value;
        this.graph[title] = n;
    }

    getNode(n){
        let node = this.graph[n];
        return node;
    }

    setEnd(val){
        this.end = this.graph[val];
        return this.end;
    }

    setStart(val){
        this.start = this.graph[val];
        return this.start;
    }
}