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

    let result,id1,id2,show1,show2,value1,value2;
    // id1='nodeleft';
    // id2='noderight';
    result = props.setId();
    id1 = result[0];
    id2 = result[1];
    show1 = result[2];
    show2 = result[3];
    value1 = result[4];
    value2 = result[5];

    // console.log(show1, show2);
    // console.log('id1, id2 : ',id1, id2);

    return (
        <div className={classes.pair} style={{width:`${props.pairwidth}%`, justifyContent: ``}}>
            <TreeNode inputChangeHandler={props.inputChangeHandler} value={value1} identifier={id1} show={show1}></TreeNode>
            <TreeNode inputChangeHandler={props.inputChangeHandler} value={value2} identifier={id2} show={show2}></TreeNode>
        </div>
    )


}


export default TreeNodePair;