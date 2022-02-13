import React, { useState } from 'react';
import Navbar from './components/UI/Navbar';
import TreeParentBody from './components/TreeStructure/TreeParentBody';
import TreeRow from './components/TreeStructure/TreeRow';
import TreeSandwich from './components/TreeStructure/TreeSandwich';
// import classes from './TreeNodePair.module.css';


const App = () => {
  
  const [rows, setRows] = useState([0,1]);
  const [nullState, setNullState] = useState("Show");
  const [nullVisibility, setNullVisibility] = useState('');

  const addRow = () => {
    console.log("Hello");
    if(rows.length<5){

      setRows(prevState => [...rows, rows.at(rows.length-1)*2])
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

  return (
    <>
      <Navbar addRow={addRow} toggleNullState={toggleNullState} nullState={nullState}/>
      <TreeParentBody>
        {/* <TreeRow></TreeRow> */}
        {rows.map(x => <><TreeRow key={Math.random()*1000} pairs={x}/><TreeSandwich pairs={x} endif={rows.at(rows.length-1)}/></>)}
      </TreeParentBody>

     

    </>
  );
};

export default App;
