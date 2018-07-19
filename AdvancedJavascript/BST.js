function BST () {
    this.root = null;
}
function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

// var first = new BST();
// first.root = new Node(30);
// first.root.right = new Node(50);


BST.prototype.insert = function (val){
    var root = this.root;
    if (this.root == null){
        this.root = new Node(val);
        return this
    }
    var currentNode = root;
    var newNode = new Node(val);
    while(newNode){
        if (newNode.value < currentNode.value){
            if (currentNode.left == null){
                currentNode.left = newNode;
                currentNode = currentNode.left;
                return this
            }
            else{
                currentNode = currentNode.left;
            }
        }
        if (newNode.value > currentNode.value){
            if (currentNode.right == null){
                currentNode.right = newNode;
                currentNode = currentNode.right;
                return this
            }
            else{
                currentNode = currentNode.right;
            }
        }
    }
}
BST.prototype.preorder = function(){
    var array = [];
    var thisNode = this.root;
    console.log("At the root");
    array.push(thisNode.value);
    while(thisNode){
        if (thisNode.left){
            thisNode = thisNode.left;
            array.push(thisNode.value);
            console.log("Traversed Left");
        }
        if (thisNode.right){
            thisNode = thisNode.right;
            array.push(thisNode.value);
            console.log("Traversed Right");
        }
        else{
            console.log(array)
            return array
        }
    }
}
BST.prototype.postorder = function(){

}
BST.prototype.inorder = function(){

}
// var second = new BST();
// second.insert(40).insert(30).insert(25).insert(15).insert(65).insert(75).insert(0).insert(120).insert(10);
// console.log(second.root)

var third = new BST();
third.insert(40).insert(50).insert(20).insert(25)

third.preorder()
