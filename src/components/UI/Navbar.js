import React from 'react';
import classes from './Navbar.module.css';
import Button from './Button';

const Navbar = (props) => {

    return (
        <>
            <div className={classes.navbar}>
                <span>Broccoli <small style={{fontSize:'0.7em'}}>by Unamed Inc</small></span>
            {/* <Button type="button" onClick={props.addRow}>Add new row</Button>
            <Button type="button" onClick={props.toggleNullState}>{props.nullState} Empty Nodes</Button>
            <Button type="button" onClick={props.invertBinaryTree}>Invert Binary Tree</Button> */}
            </div>
            
        
        </>
    
    );



}

export default Navbar;