import { useEffect } from "react";
import close from "./navImages/close.png"
import { Link } from "react-router-dom";

function Sidebar({disp, closeSb }) {
    return (
        <div
            id="sidebar"
            style={{ display: disp ? "flex" : "none" }} // This handles showing and hiding the sidebar
        >
            <div id="sidebar-temp">
                <div id="closeNav">

                    <img id="close" onClick={closeSb} src={close} alt="" />
                </div>


                <nav id="sideNav">
                    <ul>
                        <li>
                            <Link to="/">Books Catalog</Link>
                        </li>
                        <li>
                           
                            <Link to="/library">My Library</Link>
                        </li>
                        <li>
                            <Link to="/readed">Readed</Link>
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