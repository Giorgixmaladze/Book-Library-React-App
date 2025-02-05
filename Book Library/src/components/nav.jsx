import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import heart from "./navImages/heart.png"

function Navigation({book}) {
    const [opened, setOpened] = useState(false);
    const [search, setSearch] = useState("");
    const [books,setBooks] = book
    useEffect(() => {
        if (!search) return;

        async function fetchData() {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
            const data = await res.json();

            if (data.items) {
                data.items.forEach(item => {
                    setBooks(prev => [
                        ...prev,
                        {
                            title: item.volumeInfo.title,
                            author: item.volumeInfo.authors || "Unknown author",
                            image: item.volumeInfo.imageLinks?.thumbnail || 'default-image.jpg',
                            subtitle: item.volumeInfo.subtitle || "",
                            id: item.id
                        }
                    ]);
                });
            }
        }

        fetchData();
        setBooks([])
    }, [search]);

    useEffect(() => {
        if (books.length > 0) {
            localStorage.setItem("books", JSON.stringify(books));
        }
    }, [books]);

    function handleOpen() {
        setOpened(!opened);
    }

    function closeSidebar() {
        setOpened(false);
    }

    function handleSearch(e) {
        e.preventDefault();
        setSearch(e.target.search.value);
        e.target.reset();
    }

    return (
        <header>
            <div id="head">
                <h1>Books</h1>
                <div>
                    <form onSubmit={handleSearch}>
                        <input id="search" type="search" name="search" placeholder="search" />
                    </form>

                    <img src={heart} width={25} alt="Heart icon" />
                    <nav id="navigation">
                        <button>
                            <a href="">Log in</a>
                        </button>

                        <button onClick={handleOpen}>Menu</button>
                    </nav>
                </div>
            </div>
            <Sidebar disp={opened} closeSb={closeSidebar} />
        </header>
    );
}

export default Navigation;