import { useEffect, useState } from "react";
import Navigation from "./nav";

function Library({ book,lib,readed}) {
    const [library,setLibrary] = lib
    const [read,setReaded] = readed
    function removeBook(index){
        const updatedLib = library.filter((__,i) => i !== index)
        setLibrary(updatedLib)
        localStorage.setItem("Library", JSON.stringify(updatedLib));
    }


    function toReaded(index){
        const book = library[index]
        let updated = [...read]
        let updatedBooks = [...library]
        if(readed.some(read => read.title === book.title)){
            updated = updated.filter((item) => item.title !== book.title)
        }else{
            updatedBooks = updatedBooks.filter((_,i) =>i !== index)
            setLibrary(updatedBooks)
            updated.push(book)
        }
        setReaded(updated)
        localStorage.setItem("Readed", JSON.stringify(updated))
        localStorage.setItem("Library",JSON.stringify(updatedBooks))
    }

    return (
        <>
            <Navigation book={book} />

            <div id="lib-books">
                {library.map((item, index) => {
                    return (
                        <div key={index} className="book">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                            <div>
                                <label htmlFor="readed">Readed</label>
                                <input type="checkbox" id="readed" checked={readed.some(read => read.title === item.title)} onChange={() => toReaded(index)}/>
                            </div>
                            <button onClick={() => removeBook(index)}>Delete</button>

                        </div>
                    );
                })}
            </div>
        </>

    );
}

export default Library;