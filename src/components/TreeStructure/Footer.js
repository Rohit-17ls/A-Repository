import React from 'react';
import classes from './Footer.module.css';
import InstagramIcon from '../Icons/InstagramIcon';


const Footer = () => {


    return(<section className={classes.footer}>
        <div className={classes.icons}>
            <a href="https://www.instagram.com/depth_exceeded/" className={classes.icon}><InstagramIcon/></a>
        </div>

    </section>)


    
}


export default Footer;