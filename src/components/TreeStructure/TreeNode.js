import React from 'react';
import classes from './TreeNode.module.css'

const TreeNode = (props) => {





    // return (<input className={classes.node} placeholder={props.value} type="number"></input>);
    return (<input className={classes.node}  type="number" onChange={props.inputChangeHandler} data-id={props.identifier}></input>);
}

export default TreeNode;