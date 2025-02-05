import "./nav.css";
import { useEffect, useState } from "react";
import BooksCatalog from "./booksCatalog";
import Navigation from "./nav";

function Nav() {
  const [books, setBooks] = useState([]);
  const [lib, setLib] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books"));
    if (storedBooks) {
      setBooks(storedBooks);
    }
  }, []);

  return (
    <>
      <Navigation book={[books,setBooks]} />
      <BooksCatalog books={[books,setBooks]} library={[lib,setLib]}/>
    </>
  );
}

export default Nav;