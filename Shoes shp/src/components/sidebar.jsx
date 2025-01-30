import { useEffect } from "react";

function Sidebar({ disp, closeSidebar }) {
    return (
        <div
            id="sidebar"
            style={{ display: disp ? "flex" : "none" }} // This handles showing and hiding the sidebar
        >
            <div id="sidebar-temp">
                <div id="closeNav">

                    <p id="close" onClick={closeSidebar} style={{ color: "black" }}>X</p>
                </div>


                <nav id="sideNav">
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Products</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
}

export default Sidebar;