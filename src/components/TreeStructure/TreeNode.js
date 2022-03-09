import React from 'react';
import classes from './TreeNode.module.css'

const TreeNode = (props) => {


    // console.log(props.show);



    // return (<input className={classes.node} placeholder={props.value} type="number"></input>);
    return (<input className={`${classes.node} ${!props.show ? 'hidden' : ''}`} placeholder={props.value || ''} type="number" onChange={props.inputChangeHandler} data-id={props.identifier} style={{visibility: !props.show ? 'hidden' : 'visible'}}></input>);
}

export default TreeNode;