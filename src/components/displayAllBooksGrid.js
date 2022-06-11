import React, { useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import useBooks from "../hooks/useBooks";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Error from "./Error";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function DisplayAllBooksGrid({ id }) {
  const { error, books } = useBooks(id);
  console.log(
    "🚀 ~ file: displayAllBooksGrid.js ~ line 17 ~ DisplayAllBooksGrid ~ books",
    books
  );

  // const { addToCart } = useContext(AppContext);

  const navigate = useNavigate();
  const handleAddToCart = (book) => {
    // addToCart(book);
    alert(`You have added ${book.title} to your Cart`);
  };

  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }

  if (!books) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  // if (books === "undefined") {
  //   return (
  //     <Box sx={{ display: "flex" }}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // } else
  return (
    <ImageList cols={3}>
      {books.books.map((book) => (
        <ImageListItem key={book.id}>
          <img
            src={`${book.img}`}
            srcSet={`${book.img}`}
            alt={book.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={book.title}
            subtitle={"$" + book.pages.toFixed(2)}
            actionIcon={
              <>
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${book.title}`}
                  onClick={() => navigate("/shop/" + book.id)}
                >
                  <InfoIcon />
                </IconButton>
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${book.title}`}
                  onClick={() => {
                    handleAddToCart(book);
                  }}
                >
                  <AddShoppingCartTwoToneIcon />
                </IconButton>
              </>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}