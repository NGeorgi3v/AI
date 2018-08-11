"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var treeNode = function () {
    function treeNode(val) {
        _classCallCheck(this, treeNode);

        this.value = val;
        this.edges = [];
        this.searched = false;
        this.parent = null;
    }

    _createClass(treeNode, [{
        key: "addEdge",
        value: function addEdge(node) {
            this.edges.push(node);
            node.edges.push(this);
        }
    }]);

    return treeNode;
}();
