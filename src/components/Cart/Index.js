import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import CartItem from './CartItem'
import { AppContext } from '../../context/AppContext'

export default function Index() {
    const {cart} = useContext(AppContext)

    return (
        <>
            <Box sx={{mb:15}}>
                {
                    [...new Set(cart?.map(JSON.stringify))]?.map(JSON.parse)?.map(
                        (book)=><CartItem key={book.id} book={book}/>
                    )
                }
            </Box>
        </>
        )
  }
  