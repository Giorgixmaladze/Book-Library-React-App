import { useEffect } from "react";
import close from "./navImages/close.png"

function Sidebar({ disp, closeSidebar }) {
    return (
        <div
            id="sidebar"
            style={{ display: disp ? "flex" : "none" }} // This handles showing and hiding the sidebar
        >
            <div id="sidebar-temp">
                <div id="closeNav">

                    <img id="close" onClick={closeSidebar} src={close} alt="" />
                </div>


                <nav id="sideNav">
                    <ul>
                        <li>
                            <a href="">Books Catalog</a>
                        </li>
                        <li>
                            <a href="">Favorites</a>
                        </li>
                        <li>
                            <a href="">Readed</a>
                        </li>
                    </ul>
                </nav>

                <div id="conclusion">
                    <h2>Book Library</h2>
                    <p>All rights reserved</p>
                </div>


            </div>
        </div>
    );
}

export default Sidebar;