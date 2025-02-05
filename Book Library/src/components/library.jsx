import { useEffect, useState } from "react";
import Navigation from "./nav";

function Library() {
    const [library, setLibrary] = useState([]);

    useEffect(() => {
        const lib = JSON.parse(localStorage.getItem("Library"));
        if (lib) {
            setLibrary(lib);
        }
    }, []);

    return (
        <>
            <Navigation />

            <div id="books">
                {library.map((item, index) => {
                    return (
                        <div key={index} className="book">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div>
                    );
                })}
            </div>
        </>

    );
}

export default Library;