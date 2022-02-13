import React from 'react';
import './Line.css';

const Line = (props) => {

    const width = !(props.exceptRoot) ? (props.width/2) : props.width;
    const inclination = (props.width/2)-10;

    return(

        <div className="--arrow-holder" style={{width: `${width}%`}}> 
            <svg style={{transform:`rotate(${inclination}deg)`, stroke:'black'}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="28px" height="150px" viewBox="0 0 9 47" version="1.1">
            <g id="surface1">
            <path style={{fill: 'none', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', stroke: 'black', strokeOpacity: 1, strokeMiterlimit: 4}} d="M -0.754961 -95.123573 L 0.754947 95.923632 " transform="matrix(0.248359,0,0,0.244459,4.312502,23.402209)"></path>
            <path style={{fill: 'none', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', stroke: 'black', strokeOpacity: 1, strokeMiterlimit: 4}} d="M -9.05946 12.834643 L 9.059437 -12.827937 " transform="matrix(0.248359,0,0,0.244459,6.750003,43.518712)"></path>
            <path style={{fill: 'none', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', stroke: 'black', strokeOpacity: 1, strokeMiterlimit: 4}} d="M 9.059445 12.834643 L -9.059451 -12.827937 " transform="matrix(0.248359,0,0,0.244459,2.250001,43.518712)"></path>
            </g>
            </svg>

            <svg style={{transform:`rotate(-${inclination}deg)`, stroke:'black'}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="28px" height="150px" viewBox="0 0 9 47" version="1.1">
            <g id="surface1">
            <path style={{fill: 'none', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', stroke: 'black', strokeOpacity: 1, strokeMiterlimit: 4}} d="M -0.754961 -95.123573 L 0.754947 95.923632 " transform="matrix(0.248359,0,0,0.244459,4.312502,23.402209)"></path>
            <path style={{fill: 'none', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', stroke: 'black', strokeOpacity: 1, strokeMiterlimit: 4}} d="M -9.05946 12.834643 L 9.059437 -12.827937 " transform="matrix(0.248359,0,0,0.244459,6.750003,43.518712)"></path>
            <path style={{fill: 'none', strokeWidth: 3, strokeLinecap: 'butt', strokeLinejoin: 'miter', stroke: 'black', strokeOpacity: 1, strokeMiterlimit: 4}} d="M 9.059445 12.834643 L -9.059451 -12.827937 " transform="matrix(0.248359,0,0,0.244459,2.250001,43.518712)"></path>
            </g>
            </svg>
        </div>

    )


    
}

export default Line;
