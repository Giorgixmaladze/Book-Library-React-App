import { useState, useEffect } from "react"

function BooksCatalog({ bookData,library }) {

    const [book, setBooks] = bookData
    const [lib,setLib] = library




    return (


        <div id="bookContainer">
            <div id="background">
                <h1>Find Your Favourite Books Here</h1>
                <h2>The Premium Books is Here</h2>

            </div>

            <h2>Last searched: </h2>
            <div id="books">
                {
                    book.length > 0 ? (
                        book.map((item,index) => {
                            return (
                                <>
                                    <div key={index} className="book">
                                        <img src={item.image} alt="" />
                                        <h3>Title: {item.title}</h3>
                                        <p>{item.subtitle}</p>
                                        <button>Add To Library</button>
                                    </div>
                                </>
                            )
                        })
                    ) : (<p>Search a book</p>)
                }
            </div>

        </div>


    )




}

export default BooksCatalog