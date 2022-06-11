import { useState } from "react";
import BookDisplayCard from "../components/bookDisplayCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function SingleBook() {
  const [book, setbook] = useState();

  return (
    <>
      <Typography variant="h3">{book.title}</Typography>
      {/* <Box sx={{display:'flex', justifyContent:"center", alignContent:"center", width:'100%', mb:2}}>
    </Box> */}

      <BookDisplayCard id={book?.id} />
    </>
  );
}
