"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var treeNode = function () {
      function treeNode(val, x, y) {
            _classCallCheck(this, treeNode);

            this.val = val;
            this.left = null;
            this.right = null;
            this.x = x;
            this.y = y;
      }

      _createClass(treeNode, [{
            key: "addNode",
            value: function addNode(n) {
                  if (n.val < this.val) {
                        if (this.left == null) {
                              this.left = n;
                              this.left.x = this.x - 10;
                              this.left.y = this.y + 20;
                        } else {
                              this.left.addNode(n);
                        }
                  } else if (n.val > this.val) {
                        if (this.right == null) {
                              this.right = n;
                              this.right.x = this.x + 20;
                              this.right.y = this.y + 20;
                        } else {
                              this.right.addNode(n);
                        }
                  }
            }
      }, {
            key: "visit",
            value: function visit(parent) {

                  if (this.left != null) {
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
                  if (this.right != null) {
                        this.right.visit(this);
                  }
            }
      }, {
            key: "search",
            value: function search(val) {
                  return val == this.val ? this.val : val < this.val && this.left != null ? this.left.search(val) : val > this.val && this.right != null ? this.right.search(val) : null;
            }
      }]);

      return treeNode;
}();

var Tree = function () {
      function Tree() {
            _classCallCheck(this, Tree);

            this.root = null;
      }

      _createClass(Tree, [{
            key: "addValue",
            value: function addValue(val) {
                  var n = new treeNode(val);
                  if (this.root == null) {
                        this.root = n;
                        this.root.x = width / 2;
                        this.root.y = 20;
                  } else {
                        this.root.addNode(n);
                  }
            }
      }, {
            key: "traverse",
            value: function traverse() {
                  this.root.visit(this.root);
            }
      }, {
            key: "search",
            value: function search(val) {
                  var res = this.root.search(val);
                  return res;
            }
      }]);

      return Tree;
}();
