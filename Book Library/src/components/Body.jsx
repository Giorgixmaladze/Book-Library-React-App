import "./nav.css";
import { useEffect, useState } from "react";
import BooksCatalog from "./booksCatalog";
import Navigation from "./nav";

function Nav({lib}) {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem("books")) || []);
  const [library, setLibrary] = lib

 

  return (
    <>
      <Navigation book={[books,setBooks]} />
      <BooksCatalog books={[books,setBooks]} library={[library,setLibrary]}/>
    </>
  );
}

export default Nav;