import { useState } from "react"

export default function Library () {
    const [books, setBooks] = useState ([]);
    const handleBooks = () => {
        const newBooks = ['Doremon',' , ','Nimo'];
        setBooks (newBooks);
    }
    //  if (books.length !== 0) {
    //     return <p>new Books are : {books}</p>
    //  }
    //  return <p>Previous Books are : {books}</p>
     return (
        <div>
        {books.length !== 0 ? <p>new Books are : {books}</p> : <p>Previous Books are : {books}</p>}
        <h4>Click the button for see the new collection of books.</h4>
        <button onClick={handleBooks}>See Books</button>
        </div>
     )
} 