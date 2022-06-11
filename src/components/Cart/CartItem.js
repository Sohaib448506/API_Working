import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import CartCard from "./CartCard";
import ChangeCartItemQuanitity from "./ChangeCartItemQuanitity";
import { AppContext } from "../../context/AppContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CartItem({ book }) {
  const { cart } = useContext(AppContext);

  useEffect(() => {
    setQty(cart.filter((cartItem) => cartItem.id === book.id).length);
  }, [cart, book]);

  const [qty, setQty] = useState(
    cart.filter((cartItem) => cartItem.id === book.id).length
  );
  return (
    <Grid
      container
      spacing={2}
      sx={{ m: 1, pr: 2, borderRadius: 1, alignItems: "stretch" }}
    >
      <Grid book md={4} sm={6} xs={12}>
        <Item sx={{ height: "100%" }}>
          <Avatar
            alt={book.title}
            variant="rounded"
            src={book.img}
            sx={{ height: "100%", width: "100%" }}
          />
        </Item>
      </Grid>
      <Grid book md={3} sm={6} xs={12}>
        <Item sx={{ height: "100%" }}>
          <CartCard book={book} />
        </Item>
      </Grid>
      <Grid book md={2} sm={6} xs={12}>
        <Item sx={{ height: "100%", alignContent: "center" }}>
          <ChangeCartItemQuanitity qty={qty} book={book} setQty={setQty} />
        </Item>
      </Grid>
      <Grid book md={3} sm={6} xs={12}>
        <Item sx={{ height: "100%" }}>
          {/* <div>
                  <strong>Book Subtotal </strong>
                  <br/>
                  ${(book.pages*qty).toFixed(2)}
              </div> */}
        </Item>
      </Grid>
    </Grid>
  );
}
