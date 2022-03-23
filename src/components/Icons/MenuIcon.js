import React from 'react';
import classes from './MenuIcon.module.css'


const MenuIcon = (props) => {
    
    let initWidth = -100;

    let clicked = () => {
        initWidth = !initWidth ? -100 : 0;
        console.log("Here");
        props.expandSidebar(initWidth);
        
    }
    
    return (
        // <button>
            <div className={classes.holder} onClick={clicked}>
                <div className={classes.stripe}></div>
                <div className={classes.stripe}></div>
                <div className={classes.stripe}></div>

        
               

            </div>
        // {/* </button> */}
    )

}

export default MenuIcon;