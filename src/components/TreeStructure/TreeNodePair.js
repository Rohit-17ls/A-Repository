import React from 'react';
import classes from './TreeNodePair.module.css';
import TreeNode from './TreeNode';

const TreeNodePair = (props) => {

    // const nodeSlant = props.type;
    // let slantSide;
    // if(nodeSlant){
    //     if(nodeSlant == 2){
    //         slantSide = "";
    //     }else if{nodeSlant == 1}{
    //         slantSide = "";
    //     }
    // }

    return (
        <div className={classes.pair} style={{width:`${props.pairwidth}%`, justifyContent: ``}}>
            <TreeNode value={Math.floor(Math.random()*100)}></TreeNode>
            <TreeNode value={Math.floor(Math.random()*100)}></TreeNode>
        </div>
    )


}


export default TreeNodePair;