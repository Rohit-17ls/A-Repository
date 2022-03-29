import React from 'react';
import classes from './MenuIcon.module.css'


const MenuIcon = (props) => {
    
    let initWidth = -100;

    let clicked = () => {
        initWidth = !initWidth ? -100 : 0;
        // console.log("Here");
        props.expandSidebar(initWidth);
        
    }
    
    return (
        // <button>
            <div className={classes.holder} onClick={clicked}>
                {/* <div className={classes.stripe}></div>
                <div className={classes.stripe}></div>
                <div className={classes.stripe}></div> */}
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="18" rx="10" ry="10"></rect>
                    <rect y="30" width="100" height="18" rx="10" ry="10"></rect>
                    <rect y="60" width="100" height="18" rx="10" ry="10"></rect>
                </svg>

        
               

            </div>
        // {/* </button> */}
    )

}

export default MenuIcon;