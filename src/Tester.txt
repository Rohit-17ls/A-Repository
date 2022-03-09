import React, { useState } from 'react';
import Navbar from './components/UI/Navbar';
import TreeParentBody from './components/TreeStructure/TreeParentBody';
import TreeRow from './components/TreeStructure/TreeRow';
import TreeSandwich from './components/TreeStructure/TreeSandwich';
// import { ThemeConsumer } from 'styled-components';
// import classes from './TreeNodePair.module.css';


const App = () => {
  
  class TreeNode{
    constructor(value){
      this.value = value;
      this.descendants = [];
      this.parent = null;
    }

    get left(){
      return this.descendants[0];
    }

    set left(node){
      this.descendants[0] = node;
      if(node){
        node.parent = this;
      }
    }

    get right(){
      return this.descendants[1];
    }

    set right(node){
      this.descendants[1] = node;
      if(node){
        node.parent = this;
      }
    }
  }

  let root = new TreeNode({parent:null, id:'node1'});
  let rootId = 'node1';
  // root.descendants.push(null);

  

  const [rows, setRows] = useState([0,1]);
  const [nullState, setNullState] = useState("Show");
  const [nullVisibility, setNullVisibility] = useState('');
  const [currentLevel, setCurrentLevel] = useState(root);
  const [currentParent, setCurrentParent] = useState(root);

  // let currentParent = root;
  let currentChild = 0;
  
  // const [nodeIds, setNodeIds] = useState(['node1']);
  let nodeIds = ['node1'];
  let currentDepth = 0;
  let currentHeight = 1;
  let proxyParent = root;
  let futureParents = [];
  // const [tree, setTree] = useState(root);
  
  
  
  // const left = 0;
  
  
  // const right = 1;


  const getId = () => {
    let newId ;
    
    do{
      newId = parseInt(Math.random()*1000);
    }while(nodeIds.includes(`node${newId}`));
    
    return newId;
  }
  
  const setId = () => {
    // let newId = nodeIds.at(nodeIds.length-1);
    // while(!nodeIds.includes(`node${newId}`)){
    //   newId = Math.floor((Math.random())*1000);
    // }
    
    
    let id1, id2;
    id1 = getId();
    id2 = getId();
    
    nodeIds.push(`node${id1}`, `node${id2}`);
    
    // console.log(nodeIds);

    if(rows.length === 2){
      let leftChild = new TreeNode({parent:currentParent, id: `node${id1}`});
      let rightChild = new TreeNode({parent:currentParent, id: `node${id2}`});
      // currentParent.descendants.push(leftChild, rightChild);
      console.log("Proxy Parent  ",proxyParent);
      proxyParent.descendants.push(leftChild, rightChild);
      proxyParent = [...proxyParent.descendants];
      // setCurrentParent(proxyParent);
    }else{
      
      console.log("Current Parent After: ",proxyParent);
      let leftChild = new TreeNode({parent:proxyParent[currentChild], id: `node${id1}`});
      let rightChild = new TreeNode({parent:proxyParent[currentChild], id: `node${id2}`});
      // proxyParent[currentChild].descendants.push(leftChild, rightChild);
      // console.log("Current Parents [] : ", proxyParent[currentChild], currentChild);
      proxyParent[currentChild].descendants.push(leftChild, rightChild);
      currentChild++;
      futureParents.push(leftChild, rightChild);
      // setCurrentParent(proxyParent);
    }


    // console.log("Current Parent Before: ",currentParent);
    // console.table(currentParent);
    // }else{
    //   currentParent.foreach(x => x.descendants.push)
    // }
    return [`node${id1}`, `node${id2}`];

  }  
  

  const addRow = () => {
    // console.log("Hello");
    if(rows.length<5){

      setRows(prevState => [...rows, rows.at(rows.length-1)*2]);
      if(rows.length>3){
        proxyParent = [...futureParents];
        futureParents = [];
      }
    }

  }

  const toggleNullState = () => {
    let newState = nullState==="Show" ? "Hide" : "Show";
    setNullState(newState);

    if(nullState === "Show"){
      console.log("Hello");
    }else if(nullState === "Hide"){
      console.log("Hello World");

    }
  }

  const inputChangeHandler = (event) => {
    // console.log(event.target.value);
    let x = event.target;
    // console.log(x.dataset.id);
  }

  return (
    <>
      <Navbar addRow={addRow} toggleNullState={toggleNullState} nullState={nullState}/>
      <TreeParentBody>
        {/* <TreeRow></TreeRow> */}
        {rows.map(x => <><TreeRow currentLevel={currentLevel} rootNode={root} setId={setId} inputChangeHandler={inputChangeHandler} key={Math.random()*1000}  pairs={x} rootId={rootId}/><TreeSandwich pairs={x} endif={rows.at(rows.length-1)}/></>)}
      </TreeParentBody>

     

    </>
  );
};

export default App;
