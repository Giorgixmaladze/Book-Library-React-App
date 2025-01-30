import heart from "./navImages/heart.png";
import cart from "./navImages/cart.png";
import { Link } from "react-router-dom";
import "./nav.css";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";

function Nav() {
  const [opened, setOpened] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("sidebar-condition", opened);
//   }, [opened]);

  function handleOpen() {
    setOpened(!opened);
  }

  function closeSidebar(){
    setOpened(false)
  }

  return (
    <>
      <header>
        <div id="head">
          <h1>Shoes</h1>
          <div>
            <input type="search" name="search" placeholder="search" />
            <img src={heart} width={25} alt="" />
            <img src={cart} alt="" />
            <nav>
              <button>
                <a href="">Log in</a>
              </button>

              <button onClick={handleOpen}>Menu</button>
            </nav>
          </div>
        </div>
      </header>

      <Sidebar disp={opened} closeSidebar={closeSidebar} />
    </>
  );
}

export default Nav;