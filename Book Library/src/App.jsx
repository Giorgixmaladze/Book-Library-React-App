import { useEffect, useState } from "react"
import Nav from "./components/Body"
import Sidebar from "./components/sidebar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Library from "./components/library"
import { use } from "react"
function App() {
    


    useEffect(() =>{
        
    })

    let condition = localStorage.getItem("sidebar-condition")

    return (


        <div id="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav opened ={condition}/>} />
                    <Route path="/library" element = {<Library/>} />
                </Routes>
            </BrowserRouter>

            {condition ? (<Sidebar disp={condition} />) : (<p></p>)}

        </div>
    )
}

export default App