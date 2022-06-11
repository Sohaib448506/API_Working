import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiBook from '../api/apiBook'
import { AppContext } from '../context/AppContext'


export default function useCreateBook(book) {
    const {user, setAlert} = useContext(AppContext)

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (book?.title){
                (async()=>{
                    response = await apiBook.post(user?.token, book, source.token)
                    if (response){
                        setAlert({'msg':`Book: ${book.title} Created`, cat:'success'})
                    }else if(response === false && response !== undefined){
                        setAlert({'msg':`Please reauthorize you account`, cat:'warning'})
                    }
                })()
            }
            return ()=>{source.cancel()}
        },[book, user.token]
    )
}
