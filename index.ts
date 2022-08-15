const treeify = require("treeify");

class BST {
    root: any;
    constructor() {
        this.root = null;
    }

    insert(value: number) {
        const newNode = new NodeChild(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current: any = this.root;
        while (true) {
            if (value === current.value) {
                return
            }
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }

                current = current.left;
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }

        }
    };
}

class NodeChild {
    value: any;
    right: any;
    left: any;

    constructor(value: number) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

let tree = new BST();

tree.insert(20);
tree.insert(10);
tree.insert(21);
tree.insert(5);
tree.insert(15);
tree.insert(15);
console.log(treeify.asTree(tree, true));
