// import { func} from './TreeMethods';
const helper = require('./CGenerator.json')[0];


export const starter = `#include <stdio.h>
#include <stdlib.h>


struct Node{
    int val;
    struct Node *left;
    struct Node *right;
}

struct Node *createNode(int data){
    struct Node *newnode = (struct Node *) malloc(sizeof(struct Node));
      newnode->data = data;
      newnode->left = NULL;
      newnode->right = NULL;
      return newnode;
}

void preOrderTraversal(struct Node *root){
    if(root!=NULL){        
        printf("%d ", root->data);
        inOrderTraversal(root->left);    
        inOrderTraversal(root->right);
    }
    printf("\n");
}

void inOrderTraversal(struct Node *root){
    if(root!=NULL){
        inOrderTraversal(root->left);
        printf("%d ", root->data);
        inOrderTraversal(root->right);
    }
    printf("\n");
}

void postOrderTraversal(struct Node *root){
      if(root!=NULL){
        postOrderTraversal(root->left);
            postOrderTraversal(root->right);
            printf("%d", root->data);
      }
    printf("\n");
}

void InvertBinaryTree(struct Node *node){

  if(node != NULL){
    InvertBinaryTree(node->left);
    InvertBinaryTree(node->right);

    struct Node *temp = node->left;
    node->left = node->right;
    node->right = temp;
  }

}`

export const CDriverCode = () => {


    let driver = '';
    // let Tree = func(0, true);
    driver += helper.header;
    driver += helper.nodeStructure;
    driver += helper.createNode;
    driver += helper.preOrderTraversal;
    driver += helper.inOrderTraversal;
    driver += helper.postOrderTraversal;
    driver += helper.invertBinaryTree;
    // console.log(driver);
    return driver;
    // let resultantDriver = '';
    // console.log(helper[0].header);
    // console.log(helper[0].structure);
    

}