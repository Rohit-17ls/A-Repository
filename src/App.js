import React, { useState, useRef } from 'react';
import Navbar from './components/UI/Navbar';
import TreeParentBody from './components/TreeStructure/TreeParentBody';
import TreeRow from './components/TreeStructure/TreeRow';
import TreeSandwich from './components/TreeStructure/TreeSandwich';
import Message from './components/UI/Message';
import Dashboard from './components/UI/Dashboard';
import UserConsole from './components/UI/UserConsole';
import {func} from './Logic/TreeMethods'
import { CDriverCode } from './Logic/CDriver';
import Footer from './components/TreeStructure/Footer';
import Editor from './components/UI/Editor';


// import { ThemeConsumer } from 'styled-components';
// import classes from './TreeNodePair.module.css';




export let tree = {
  'node-0-0': { parent: null, show: true, value: 0, left: '1-0', right: '1-1', error: 0 },
    'node-1-0': { parent: '0-0', show: true, value: 0,  left: '2-0',  right: '2-1', error: 0 },
    'node-1-1': { parent: '0-0', show: true, value: 0,  left: '2-2',  right: '2-3', error: 0 },
    'node-2-0': { parent: '1-0', show: true, value: 0,  left: '3-0',  right: '3-1', error: 0 },
    'node-2-1': { parent: '1-0', show: true, value: 0,  left: '3-2',  right: '3-3', error: 0 },
    'node-2-2': { parent: '1-1', show: true, value: 0,  left: '3-4',  right: '3-5', error: 0 },
    'node-2-3': { parent: '1-1', show: true, value: 0,  left: '3-6',  right: '3-7', error: 0 },
    'node-3-0': { parent: '2-0', show: true, value: 0,  left: '4-0',  right: '4-1', error: 0 },
    'node-3-1': { parent: '2-0', show: true, value: 0,  left: '4-2',  right: '4-3', error: 0 },
    'node-3-2': { parent: '2-1', show: true, value: 0,  left: '4-4',  right: '4-5', error: 0 },
    'node-3-3': { parent: '2-1', show: true, value: 0,  left: '4-6',  right: '4-7', error: 0 },
    'node-3-4': { parent: '2-2', show: true, value: 0,  left: '4-8',  right: '4-9', error: 0 },
    'node-3-5': { parent: '2-2', show: true, value: 0, left: '4-10', right: '4-11', error: 0 },
    'node-3-6': { parent: '2-3', show: true, value: 0, left: '4-12', right: '4-13', error: 0 },
    'node-3-7': { parent: '2-3', show: true, value: 0, left: '4-14', right: '4-15', error: 0 },
    'node-4-0': { parent: '3-0', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-1': { parent: '3-0', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-2': { parent: '3-1', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-3': { parent: '3-1', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-4': { parent: '3-2', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-5': { parent: '3-2', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-6': { parent: '3-3', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-7': { parent: '3-3', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-8': { parent: '3-4', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-9': { parent: '3-4', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-10': { parent: '3-5', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-11': { parent: '3-5', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-12': { parent: '3-6', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-13': { parent: '3-6', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-14': { parent: '3-7', show: true, value: 0, left: null, right: null, error: 0 },
    'node-4-15': { parent: '3-7', show: true, value: 0, left: null, right: null }
  }
  
  let indices = ['node-1-0', 'node-1-1', 'node-2-0', 'node-2-1', 'node-2-2', 'node-2-3', 'node-3-0', 'node-3-1', 'node-3-2', 'node-3-3', 'node-3-4', 'node-3-5', 'node-3-6', 'node-3-7', 'node-4-0', 'node-4-1', 'node-4-2', 'node-4-3', 'node-4-4', 'node-4-5', 'node-4-6', 'node-4-7', 'node-4-8', 'node-4-9', 'node-4-10', 'node-4-11', 'node-4-12', 'node-4-13', 'node-4-14', 'node-4-15'];
  
  
let rootId = 'node-0-0';
let lastUnbalancedNode = null;


let expanded = false;


const App = () => {
  
  
  
  
  
  
  // const [rows, setRows] = useState([0,1]);
  const [nullState, setNullState] = useState("Hide");
  const [consoleMessage, setConsoleMessage] = useState([0,'']);
  const [height, setHeight] = useState([0,1]);
  const [dummy, setDummy] = useState(0);
  const [loading, setLoading] = useState(false);
  const dashRef = useRef();
  let currentPair = [0,1];
  let  nodes = 0;
  console.log(dummy);
  // const [currentPair, setCurrentPair] = useState([0,1]);
  // const [tree, setTree] = useState([]);
  
  
  // let tree = [];
  
  
  
  // const left = 0;

  if(lastUnbalancedNode){
    // console.log(lastUnbalancedNode)
    // console.log(element);
    let element = document.querySelector(`input[data-id=${indices[lastUnbalancedNode]}]`);
    element.style.background = 'red'; 
  }


  const swap = (i,j) => {
    if(i<j){
      // console.log(i,j);
      const temp = tree[indices[j]].value;
      console.log('temp', temp);
      tree[indices[j]].value =  tree[indices[i]].value;
      tree[indices[i]].value = temp;
      swap(i+1, j-1);
    }
  }
  
  
  const invertBinaryTree = () => {
    expandSidebar(-100);
    // console.log(tree);
    for(let i=0; i<(height.length); i+=2){
      swap(i,(2*i)+1);
    }
    console.log(tree);
    setDummy(prevState =>  !prevState);
    
    // return App();
  }
  

  const setId = () => {
    let a = indices[currentPair[0]]; 
    let b = indices[currentPair[1]];
    // console.log(tree[a], tree[b]);
    // console.log(a,b);
    let res = [a, b, tree[a].show, tree[b].show, tree[a].value, tree[b].value];
    currentPair = currentPair.map(x => x+2);
    nodes+=2
    // console.log("Current Pair " ,currentPair);
    // console.log(res);
    return res;
  }
  

  const addRow = () => {
    console.log("Adding Row");
    expandSidebar(-100);
    setHeight(prevState => [...height, height.at(height.length-1)*2]);
    currentPair = [0,1];


  }

  const toggleNullState = () => {
    expandSidebar(-100);
    let newState = nullState==="Show" ? "Hide" : "Show";
    for(let i=0; i<nodes; i++){
      if(!tree[indices[i]].value){
        tree[indices[i]].show = false;
      }
    }
    setNullState(newState);
    // console.log(tree);

  
  }

  const inputChangeHandler = (event) => {
    // console.log(event.target.value);
    let x = event.target;
    // console.log(x.dataset.id);
    tree[x.dataset.id].value = event.target.value;
    // console.log(tree.map(i => i.value));
    
  }

  const treeActionFunction = async(opt) => {
    // console.log("Hey");
    expandSidebar(-100);
    setLoading(true);
    let res = await func(opt);
    console.log("result",);
    if(!res[0]){
      setLoading(false);
      setConsoleMessage([0, "Please Balance the Tree !!!"]);
      lastUnbalancedNode = res[1]-1;
      // tree[indices[lastUnbalancedNode]].error = 1;
      console.log(indices[lastUnbalancedNode]);
      let element = document.querySelector(`input[data-id=${indices[lastUnbalancedNode]}]`);
      // element.style.background = 'red';
      element.classList.add('errorNode');
      // console.log(element);
      
      
      
    }else{
      setLoading(false);
      // tree[indices[lastUnbalancedNode]].error = 0;
      res[1] = res[1].toString();
      setConsoleMessage(res);
      // document.querySelector(`div[data-id='${indices[lastUnbalancedNode]}']`).style.border = '0px';
    }
  }

  const expandSidebar = (newWidth) => {
    dashRef.current.style.transform = `translateX(${newWidth}%)`;
    console.log(newWidth ? "Slid out" : "Slid in");
  }



  CDriverCode();

  return (
    <>
      <Navbar expandSidebar={expandSidebar} addRow={addRow} toggleNullState={toggleNullState} nullState={nullState} invertBinaryTree={invertBinaryTree}/>
      {/* <Dashboard dashRef={dashRef} expanded={expanded} treeActionFunction={treeActionFunction} addRow={addRow} toggleNullState={toggleNullState} nullState={nullState} invertBinaryTree={invertBinaryTree}/> */}
      <Dashboard dashRef={dashRef} expanded={expanded} nullState={nullState}  addRow={addRow} actions={[addRow,() => {treeActionFunction(1)},() => {treeActionFunction(2)},() => {treeActionFunction(3)}, invertBinaryTree, toggleNullState]}/>

      <UserConsole message={consoleMessage} loading={loading}/>
      <TreeParentBody>
        <Message message={'Please provide non-zero values for each node (Nodes with 0 value will be treated as null) and also do balance the Binary Tree'}/>
        {/* <TreeRow></TreeRow> */}
        {height.map(x => <><TreeRow rootValue={tree['node-0-0'].value} setId={setId} inputChangeHandler={inputChangeHandler} key={Math.random()*1000}  pairs={x} rootId={rootId}/><TreeSandwich pairs={x} endif={height.at(height.length-1)}/></>)}
      </TreeParentBody>
      <Editor/>
      {/* <DummyData/> */}
      <Footer/>
     

    </>
  );
};

export default App;
