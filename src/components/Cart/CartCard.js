import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddRemoveCartItem from './AddRemoveCartItem';


export default function CartCard({book}) {
  return (
    <Card sx={{height:"100%"}}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.desc.slice(0,20)}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          ${book.price?.toFixed(2)}
        </Typography>
        
      </CardContent>
      <CardActions>
        <AddRemoveCartItem book={book}/>
      </CardActions>
    </Card>
  );
}
