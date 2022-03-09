import React from 'react';
import classes from './UserConsole.module.css';
import Copy from '../Icons/Copy';


const UserConsole = (props) => {
    
    const copyToClipboard = () => {
        let text = document.getElementById("results").innerText;
        navigator.clipboard.writeText(text);
    }


    return (
        <>
            <section className= {classes.consoleHolder} id={"userConsole"}>
                <div className={classes.console}>
                    <div className={classes.consoleHeader}><h3 style={{fontWeight : 'bold'}}>Console : </h3>{!props.message[0] || <button onClick={copyToClipboard}><Copy/></button>}</div>
                    <pre id={"results"} style={{color: !props.message[0] ? 'red' : 'white'}}>{props.message[1]}</pre>
                </div>
            </section>
        </>
    )
}

export default UserConsole;