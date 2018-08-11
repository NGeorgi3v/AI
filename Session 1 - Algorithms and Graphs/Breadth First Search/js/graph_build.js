"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graph = function () {
    function Graph() {
        _classCallCheck(this, Graph);

        this.nodes = [];
        this.graph = {};
        this.end = null;
        this.start = null;
    }

    _createClass(Graph, [{
        key: "addNode",
        value: function addNode(n) {
            // Node into array and ass array a.k.a. obj;
            this.nodes.push(n);
            var title = n.value;
            this.graph[title] = n;
        }
    }, {
        key: "getNode",
        value: function getNode(n) {
            var node = this.graph[n];
            return node;
        }
    }, {
        key: "setEnd",
        value: function setEnd(val) {
            this.end = this.graph[val];
            return this.end;
        }
    }, {
        key: "setStart",
        value: function setStart(val) {
            this.start = this.graph[val];
            return this.start;
        }
    }]);

    return Graph;
}();
