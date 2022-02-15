import React from 'react';
import classes from './TreeSandwich.module.css';
import Line from './Line';

const TreeSandwich = (props) => {


    const arrows = (props.exceptRoot) ? 1 : (props.pairs)*2;

    // const arrows = (props.pairs)*2;




    return (
        
        <div className={classes.sandwich}>
            {props.endif !== props.pairs && [...Array(arrows)].map((i,e) => <Line width={100/props.pairs} exceptRoot={props.exceptRoot}></Line>)}
        </div>

    )
}


export default TreeSandwich;