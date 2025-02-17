import { useState } from "react"
import Navigation from "./nav"


function Readed({book,readed}){
    const [read,setRead] = readed



    function remove(index){
        let updated = read.filter((_,i) => i !== index)
        setRead(updated)

    }

    return(
        <>
            <Navigation book={book}/>
            <div id="read-books">
            {read.map((item, index) => {
                    return (
                        <div key={index} className="book">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                            <button onClick={() => remove(index)}>Remove from readed books</button>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Readed