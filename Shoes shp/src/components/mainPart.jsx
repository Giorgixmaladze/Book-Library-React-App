import Nav from "./nav"
import Sidebar from "./sidebar"
function MainPart(){
    let condition = localStorage.getItem("sidebar-condition")
    
    return(


        <div id="container">
            <Nav/>
            {condition?(<Sidebar disp={condition}/>):(<p></p>)}
        </div>
    )
}

export default MainPart