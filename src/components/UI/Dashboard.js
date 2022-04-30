import React, {useState} from 'react';
import classes from './Dashboard.module.css';
import Button from './Button';




const Dashboard = (props) => {

    const [dashboardButtons, setDashboardButtons] = useState([{text:'Add a new row',  action: props.actions[0]}, 
    {text:'Inorder Traversal', action: props.actions[1]},
    {text:'Preorder Traversal', action: props.actions[2]},
    {text:'Postorder Traversal', action: props.actions[3]},
    {text:'Invert Binary Tree', action: props.actions[4]}, 
    {text:`${props.nullState} Empty Nodes`,action: props.actions[5]}]); 

    const [dynamicButtonOrdering, setDynamicButtonOrdering] = useState(true);



    return (
        <section className={classes.dashboard} ref={props.dashRef}>
          {/* style={{transform: props.expanded ? 'translateX(0%)' : 'translateX(-100%)'}}>  */}
            <span className={classes.header}>DASHBOARD</span>
            <div className={classes.dashboardControls}>

                {/* <Button type="button" onClick={props.addRow}>Add a new row</Button>
                <Button type="button" onClick={props.toggleNullState}>{props.nullState} Empty Nodes</Button>
                <Button type="button" onClick={props.invertBinaryTree}>Invert Binary Tree</Button>
                

               <Button type="button" onClick={() => {props.treeActionFunction(1)}}>Inorder Traversal</Button>
               <Button type="button" onClick={() => {props.treeActionFunction(2)}}>Preorder Traversal</Button>
               <Button type="button" onClick={() => {props.treeActionFunction(3)}}>Postorder Traversal</Button>
                 */}
                
                <Button type="button" onClick={props.actions[0]}>Add a new row</Button>

                {[...Array(6)].map((i, ind) => <Button type="button" onClick={() => {
                    // Reorder Array
                    dashboardButtons[ind].action();
                    if(dynamicButtonOrdering){
                        setDashboardButtons(prevState => {
                            if(ind > 0){
                                return [prevState[ind]].concat(prevState.slice(0,ind)).concat(prevState.slice(ind+1,));
                            }else{
                                return prevState;
                            }
                        })

                    }

                }} key={ind}> {dashboardButtons[ind].text} </Button>)}


                <div className={classes.utilites}>
                   <div className={classes.utility}>
                        Dynamic Button ordering 
                        <input type="checkbox" checked={dynamicButtonOrdering} onChange={() => {setDynamicButtonOrdering(prevState => prevState ? false : true)}}></input></div>
                    
                </div>


                {/* <Button type="button" onClick={props.toggleNullState}>{props.nullState} Empty Nodes</Button> */}

                
                {/* <span><a>Instagram</a></span> */}

            
                
            
            </div>
            
        </section>
    );
}


export default Dashboard;









