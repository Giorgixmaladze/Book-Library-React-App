import { useEffect, useState } from "react"
import Nav from "./components/Body"
import Sidebar from "./components/sidebar"
import { Route, Routes } from "react-router-dom"
import Library from "./components/library"
import { use } from "react"
import Readed from "./components/Readed"
function App() {
    


    const [books,setBooks] = useState(JSON.parse(localStorage.getItem("books")))
    const [readed,setReaded] = useState([])



    let condition = localStorage.getItem("sidebar-condition")
    const [lib, setLib] = useState([]);
    return (


        <div id="container">
           
                <Routes>
                    <Route path="/" element={<Nav opened ={condition} lib={[lib,setLib]}/>} />
                    <Route path="/library" element = {<Library readed={[readed,setReaded]} book={[books,setBooks]} lib={[lib,setLib]}/>} />
                    <Route path="/readed" element = {<Readed book={[books,setBooks]} readed={[readed,setReaded]} />} />
                </Routes>
          

            {condition ? (<Sidebar disp={condition} />) : (<p></p>)}

        </div>
    )
}

export default App