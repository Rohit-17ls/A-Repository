import React, {useRef, useState, useEffect} from 'react';
import hljs from 'highlight.js/lib/core';
import c from 'highlight.js/lib/languages/c';
import 'highlight.js/styles/night-owl.css';
import classes from './Editor.module.css'
import CLanguageIcon from '../Icons/CLanguageIcon';
import CPPLanguageIcon from '../Icons/CPPLanguageIcon';
import GoLanguageIcon from '../Icons/GoLanguageIcon';
import JSLanguageIcon from '../Icons/JSLangaugeIcon';
import Copy from '../Icons/Copy';
import Locked from '../Icons/Locked';

const obj = [{langName:'C', langCode:'c'}, {langName:'C++', langCode:'cpp'}, {langName:'Go', langCode:'go'}, {langName:'Javascript', langCode:'js'} ];


const Editor = () => {
    
    
    
    const codeBlockRef = useRef();
    const [language, setLanguage] = useState(0);
    const [driverCode, setDriverCode] = useState(`#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[]){\n\treturn 0;\n\n}`);
    // console.log(driverCode);
    // const editorRef = useRef();
    
    useEffect(() => {
        if(driverCode!==false){
            console.log("used effect");
            hljs.registerLanguage('c', c);
            hljs.highlightElement(codeBlockRef.current);

        }
        

    },[driverCode]);


    useEffect(() => {
        switch(language){
            case 0:
                console.log("C");
                setDriverCode(`#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[]){\n\treturn 0;\n\n}`);
                break;
            case 1:
                console.log("C++");
                setDriverCode(false);
                break;
            case 2:
                console.log("Go");
                setDriverCode(false);
                break;
            case 3:
                console.log("Javascript");
                setDriverCode(false);
                break;
            default:
                break;
            }
    },[language])

    

    return (<>

        <div id="editor" className={classes.editor}> 
        {/* style={{border:'2px solid white'}}> */}
        <div className={classes.languageBar}>
            <div className={classes.icons}>
                <span className={classes.icon} style={{background : language===0 ? 'linear-gradient(-157deg,#072026, #0e667c,#072026)' : 'linear-gradient(157deg,#000, #072026,#000)'}} onClick = {() => setLanguage(0)}><CLanguageIcon/></span>
                <span className={classes.icon} style={{background : language===1 ? 'linear-gradient(-157deg,#072026, #0e667c,#072026)' : 'linear-gradient(157deg,#000, #072026,#000)'}} onClick = {() => setLanguage(1)}><CPPLanguageIcon/></span>
                <span className={classes.icon} style={{background : language===2 ? 'linear-gradient(-157deg,#072026, #0e667c,#072026)' : 'linear-gradient(157deg,#000, #072026,#000)'}} onClick = {() => setLanguage(2)}><GoLanguageIcon/></span>
                <span className={classes.icon} style={{background : language===3 ? 'linear-gradient(-157deg,#072026, #0e667c,#072026)' : 'linear-gradient(157deg,#000, #072026,#000)'}} onClick = {() => setLanguage(3)}><JSLanguageIcon/></span>
            </div>
            <div className={classes.copy} onClick={() => {navigator.clipboard.writeText(codeBlockRef.current.innerText)}}>
                <Copy/>
            </div>
        </div>


        {!driverCode && <div className={classes.locked}><Locked/>Coming Soon in {obj[language].langName} !!!</div>}

        {driverCode && <pre ref={codeBlockRef} className={`hljs language-c ${classes.edit}`}>
            <code>
                {driverCode}


            </code>
        </pre>}
        </div>



        </>)
}

export default Editor;
