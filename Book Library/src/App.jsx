import { useState } from "react"
import Nav from "./components/booksPart"
import Sidebar from "./components/sidebar"
function App(){




    
    let condition = localStorage.getItem("sidebar-condition")
    
    return(


        <div id="container">
            <Nav/>
            {condition?(<Sidebar disp={condition}/>):(<p></p>)}
            
        </div>
    )
}

export default App