import {useState} from 'react'
import DisplayAllBooksGrid from '../components/DisplayAllBooksGrid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function ListOfBooksInStore() {
    const [book, setbook]=useState()

  return (
  <>
    <Typography variant='h3'>Shop Our Wares</Typography>
    <Box sx={{display:'flex', justifyContent:"center", alignContent:"center", width:'100%', mb:2}}>
    <BookDisplayCard handleClick={()=>(setBook())}/>
    </Box>

    <DisplayAllBooksGrid id={book?.id}/>
  </>
  )
}
