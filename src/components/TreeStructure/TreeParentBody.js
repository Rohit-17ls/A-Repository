import React from 'react';
import classes from './TreeParentBody.module.css';

const TreeParentBody = (props) => {

    return(

        <section className={`${classes.treeparentbody} ${props.className}`}>{props.children}</section>

    )





}

export default TreeParentBody;