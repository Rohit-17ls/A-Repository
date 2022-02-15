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

    let ids,id1,id2;
    // id1='nodeleft';
    // id2='noderight';
    ids = props.setId();
    id1 = ids[0];
    id2 = ids[1];
    // console.log('id1, id2 : ',id1, id2);

    return (
        <div className={classes.pair} style={{width:`${props.pairwidth}%`, justifyContent: ``}}>
            <TreeNode currentLevel={props.currentLevel} inputChangeHandler={props.inputChangeHandler} value={Math.floor(Math.random()*100)} identifier={id1}></TreeNode>
            <TreeNode inputChangeHandler={props.inputChangeHandler} value={Math.floor(Math.random()*100)} identifier={id2}></TreeNode>
        </div>
    )


}


export default TreeNodePair;