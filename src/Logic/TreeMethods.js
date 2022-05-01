import {tree} from "../App";

export const func = (opt, driver=false) => {
    
    let  nodeLeftPos, nodeRightPos, nodes = [];
    let res = [];
    let count = 0;
    


    class Node{
        constructor(value){
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
    
    class BinarySearchTree{
        constructor(arr){
            this.arr = arr;
            this.root = new Node(arr[0]);
    
        
        }
    
        Validate(node = this.root){
            count++;
            console.log(`Left : ${node.left.value} Right : ${node.right.value}`);
            if(node.left.value < node.right.value){
                this.Validate(node.left);
                this.Validate(node.right);
                
            }else{
                return [0,count];
            }
            return [1,1];
        }

        InorderTraversal(node = this.root){
            
            if(node.value !== 0){
                this.InorderTraversal(node.left);
                // console.log(node.value);
                res.push(node.value);
                this.InorderTraversal(node.right);
            }
    
            
        }

        PostorderTraversal(node = this.root){
            if(node.value !== 0){
                this.PreorderTraversal(node.left);
                this.PreorderTraversal(node.right);
                // console.log(node.value);
                res.push(node.value);
            }
        }

        PreorderTraversal(node = this.root){
            if(node.value !== 0){
                // console.log(node.value);
                res.push(node.value);
                this.PostorderTraversal(node.left);
                this.PostorderTraversal(node.right);
            }
        }
    
    
        start(){
            
            
            for(let x of this.arr.slice(1,)){
                nodes.push(new Node(x));
            }
    
            nodes = [this.root, ...nodes];
    
            this.root.left = nodes[1];
            this.root.right = nodes[2];
    
            nodeLeftPos = 3;
            nodeRightPos = 4;
    
        }
    
        init(){
    
    
            let counter = 1;
            while(nodeRightPos<nodes.length){
                nodes[counter].left = nodes[nodeLeftPos];
                nodes[counter].right = nodes[nodeRightPos];
                nodeLeftPos += 2;
                nodeRightPos += 2;
                counter++;
            }
    
            
            
        }
    }
    let ele = (Object.values(tree)).map(x => x.value);
    
    let Tree = new BinarySearchTree(ele);
    Tree.start();
    Tree.init();

    if(driver) return Tree;
    
    console.log(nodes);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            if((Tree.Validate())[0]){
                switch(opt){
                    case 1:
                        console.log("Inorder Traversal");
                        Tree.InorderTraversal();
                        break;
                    case 2:
                        console.log("Preorder Traversal");
                        Tree.PreorderTraversal();
                        break;
                    case 3:
                        console.log("Postorder Traversal");
                        Tree.PostorderTraversal();
                        break;
                    default:
                        break;
                }
    
                resolve([1,res]);
    
            }else{
                resolve([0, count]);
            }
        }, 200);
    })

    
        // return new Promise((resolve) => {
        //     if((Tree.Validate())[0]){
        //         switch(opt){
        //             case 1:
        //                 console.log("Inorder Traversal");
        //                 Tree.InorderTraversal();
        //                 break;
        //             case 2:
        //                 console.log("Preorder Traversal");
        //                 Tree.PreorderTraversal();
        //                 break;
        //             case 3:
        //                 console.log("Postorder Traversal");
        //                 Tree.PostorderTraversal();
        //                 break;
        //         }

        //         resolve([1,res]);

        //     }else{
        //         resolve([0, count]);
        //     }
        // });
    


}

