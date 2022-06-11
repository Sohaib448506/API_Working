import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
import useBook from "../hooks/useBooks";
import Error from "./Error";
import { CircularProgress } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BookDisplayCard() {
  const { bookID } = useParams();
  const { book, error } = useBook(bookID);

  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Error>{error}</Error>
      </Box>
    );
  }
  if (!book) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Grid
      container
      spacing={1}
      sx={{ m: 1, pr: 2, border: "1px solid", borderRadius: 1 }}
    >
      <Grid book sm={12} xs={12} md={12}>
        <Item sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt={book.title}
            sx={{ height: "30%", width: "30%" }}
            variant="rounded"
            src={book.img}
          />
        </Item>
      </Grid>
      <Grid book sm={12} xs={12} md={12}>
        <Item sx={{ height: "100%", alignContent: "center" }}>
          <Typography variant="subtitle1">
            <strong>Book Title:</strong>
          </Typography>
          <Typography variant="body1">{book.title}</Typography>
        </Item>
      </Grid>
      <Grid book sm={6} xs={6} md={6}>
        <Item sx={{ height: "100%" }}>
          <Typography variant="subtitle1">
            <strong>Pages:</strong>
          </Typography>
          <Typography variant="body1">{book.pages}</Typography>
        </Item>
      </Grid>
      <Grid book sm={6} xs={6} md={6}>
        <Item sx={{ height: "100%" }}>
          <Typography variant="subtitle1">
            <strong>Book ID:</strong>
          </Typography>
          <Typography variant="body1">{book.id}</Typography>
        </Item>
      </Grid>
      <Grid book sm={12} xs={12} md={12}>
        <Item sx={{ height: "100%" }}>
          <Typography variant="subtitle1">
            <strong>Author:</strong>
          </Typography>
          <Typography variant="body1">{book.desc}</Typography>
        </Item>
      </Grid>
      <Grid book sm={12} xs={12} md={12}>
        <Item sx={{ height: "100%" }}>
          <Typography variant="subtitle1">
            <strong>Summary:</strong>
          </Typography>
          <Typography variant="body1">{book.desc}</Typography>
        </Item>
      </Grid>
      <Grid book sm={12} xs={12} md={12}>
        <Item sx={{ height: "100%" }}>
          <Typography variant="subtitle1">
            <strong>Subject:</strong>
          </Typography>
          <Typography variant="body1">{book.title}</Typography>
        </Item>
      </Grid>
    </Grid>
  );
}
