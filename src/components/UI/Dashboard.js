import React from 'react';
import classes from './Dashboard.module.css';
import Button from './Button';

const Dashboard = (props) => {
    return (
        <section className={classes.dashboard} ref={props.dashRef}>
          {/* style={{transform: props.expanded ? 'translateX(0%)' : 'translateX(-100%)'}}>  */}
            <span className={classes.header}>DASHBOARD</span>
            <div className={classes.dashboardControls}>

                <Button type="button" onClick={props.addRow}>Add a new row</Button>
                <Button type="button" onClick={props.toggleNullState}>{props.nullState} Empty Nodes</Button>
                <Button type="button" onClick={props.invertBinaryTree}>Invert Binary Tree</Button>
                
                {/* <Button type="button" onClick={props.addRow}>Add a new row</Button>
                <Button type="button" onClick={props.toggleNullState}>{props.nullState} Empty Nodes</Button>
                <Button type="button" onClick={props.invertBinaryTree}>Invert Binary Tree</Button>
                <Button type="button" onClick={props.addRow}>Add a new row</Button>
                <Button type="button" onClick={props.toggleNullState}>{props.nullState} Empty Nodes</Button>
                <Button type="button" onClick={props.invertBinaryTree}>Invert Binary Tree</Button> */}

               <Button type="button" onClick={() => {props.treeActionFunction(1)}}>Inorder Traversal</Button>
               <Button type="button" onClick={() => {props.treeActionFunction(2)}}>Preorder Traversal</Button>
               <Button type="button" onClick={() => {props.treeActionFunction(3)}}>Postorder Traversal</Button>
                
                <span><a href="https://www.instagram.com/depth_exceeded/">Instagram</a></span>

            
                {/* <a href="#userConsole"><Button type="button" onClick={() => {props.treeActionFunction(1)}}>Inorder Traversal</Button></a>
                <a href="#userConsole"><Button type="button" onClick={() => {props.treeActionFunction(2)}}>Preorder Traversal</Button></a>
                <a href="#userConsole"><Button type="button" onClick={() => {props.treeActionFunction(3)}}>Postorder Traversal</Button></a>
             */}
                
            
            </div>
            
        </section>
    );
}


export default Dashboard;