import React, { useState,useEffect } from "react";
import TextEditor from "./TextEditor";

function App()
{
    const [html,sethtml]=useState("");
    const [css,setcss]=useState("");
    const [js,setjs]=useState("");
    const [srcdoc,setsrcdoc]=useState("");

    useEffect(()=>{
      const timeout=setTimeout(()=>{
        setsrcdoc(`
                  <html>
                  <body>${html}</body>
                  <style>${css}</style>
                  <script>${js}</script>
                  </html>
                 `)
      },250);

      return ()=>clearTimeout(timeout)
    },[html,css,js]);


    
    
    return <div>

            <div className="upperSection">
              <TextEditor language="xml" name="HTML" value={html} onchange={sethtml} />
              <TextEditor language="css" name="CSS" value={css} onchange={setcss}/>
              <TextEditor language="javascript" name="JS" value={js} onchange={setjs}/>
            </div>
            <div className="tab">
               <iframe
                   srcDoc={srcdoc}
                   title="output"
                   sandbox="allow-scripts"
                   frameborder="0"
                   width="100%"
                   height="100%"
               />
            </div>
           </div>;
}

export default App;