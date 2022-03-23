import React from 'react';
import classes from './Navbar.module.css';
import Button from './Button';
import MenuIcon from '../Icons/MenuIcon';



const Navbar = (props) => {

    

    return (
        <>
            <div className={classes.navbar}>
            {/* <span  onClick={expandSidebar}><MenuIcon/></span> */}
            <MenuIcon expandSidebar={props.expandSidebar}/>
                <span className={classes.header}>Broccoli <small style={{fontSize:'0.7em'}}>by Unamed Inc</small></span>
            {/* <Button type="button" onClick={props.addRow}>Add new row</Button>
            <Button type="button" onClick={props.toggleNullState}>{props.nullState} Empty Nodes</Button>
            <Button type="button" onClick={props.invertBinaryTree}>Invert Binary Tree</Button> */}
            </div>
            
        
        </>
    
    );



}

export default Navbar;