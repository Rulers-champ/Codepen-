import React from "react";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import { useState } from "react/cjs/react.development";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompressAlt,faExpandAlt} from '@fortawesome/free-solid-svg-icons';


function Editor(props)
{
    const {language,name,value,onchange}=props;

    function handleChange(editor,data,value){
        onchange(value);
    }

    const [open,setopen]=useState(true);


    return <div class={`editor-container ${open?'':"collapse-container"}`}>
             <div className="editor-heading-tab">
                 <h3>{name}</h3>
                 <button onClick={()=>setopen(prev=>!prev)}>
                  <FontAwesomeIcon icon={open?faCompressAlt:faExpandAlt} />
                 </button>
             </div>
             <ControlledEditor 
                 onBeforeChange={handleChange}
                 value={value}
                 className="editor-block"
                 options={{
                     lineWrapping:true,
                     lint:true,
                     mode:language,
                     theme:'material',
                     lineNumbers:true
                 }}
             />
           </div>;
}

export default Editor;