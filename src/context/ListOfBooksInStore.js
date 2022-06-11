import {createContext, useState} from "react";

export const AppContext = createContext();

const ListOfBooksInStore=({children})=>{
    
    const getBookFromLS = ()=>{
        let book = localStorage.getItem('books')
        if (book){
            return JSON.parse(book)
        }
    }
    const [book, _setBook] = useState(getBookFromLS())


    const setBook = (book)=>{
        let books = JSON.parse(localStorage.getItem('books'))
        books.push(book)

        localStorage.setItem('books', JSON.stringify(books))
        _setBook(books)
    }

    const values = {
        book,
        setBook
    }

    return (
        <ListOfBooksInStore.Provider value={values}>
            {children}
        </ListOfBooksInStore.Provider>
    )
}

export default ListOfBooksInStore