import React from 'react'

const bookList = [

    {
        id : 0,
        title : "book 0",
        author : "author 0"
    },
    {
        id : 1,
        title : "book 1",
        author : "author 1"
    },
    {
        id : 2,
        title : "book 2",
        author : "author 2"
    }

];
function Books() {
    return (
            <section>

                {bookList.map((book) => {
                    return <Book key={book.id} {...book}></Book>;
                })}

            </section>
    );
}
const Book = ({id,title,author}) => {

    return (
        <article>
           <h3>{title}</h3>
           <h5> {author}</h5>
           <p>{id}</p>
        </article>
    );
}

export default Books;
