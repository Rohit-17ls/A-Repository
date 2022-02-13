import React from 'react';
import classes from './Navbar.module.css';
import Button from './Button';

const Navbar = (props) => {

    return (
        <>
            <div className={classes.navbar}>Binary Trees
            <Button type="button" onClick={props.addRow}>Add new row</Button>
            <Button type="button" onClick={props.toggleNullState}>{props.nullState} Empty Nodes</Button>
            </div>
            
        
        </>
    
    );



}

export default Navbar;