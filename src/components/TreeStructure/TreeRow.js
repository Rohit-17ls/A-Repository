import React from 'react';
import classes from './TreeRow.module.css';
import classes1 from './TreeNodePair.module.css';
import TreeNodePair from './TreeNodePair';
import TreeNode from './TreeNode';
// import Line from './Line';
import TreeSandwich from './TreeSandwich';

const TreeRow = (props) => {








    return(

        <div className={classes.row}>
            {props.pairs>0 && [...Array(props.pairs)].map((i,ind) => <TreeNodePair  key={Math.random(1,100)} pairwidth={100/props.pairs} inputChangeHandler={props.inputChangeHandler} setId={props.setId}/>)}
            {!props.pairs && <div className={classes.firstrow}><div className={classes1.singlenode}><TreeNode value={props.rootValue} inputChangeHandler={props.inputChangeHandler} identifier={props.rootId} show={true}></TreeNode></div><TreeSandwich endif={0} pairs={1} exceptRoot={1}/></div>}
        </div>

    );
}

export default TreeRow;