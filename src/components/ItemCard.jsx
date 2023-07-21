// ItemCard.js
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ItemCard = ({ item, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onQuantityChange(item.id, quantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onQuantityChange(item.id, quantity - 1);
    }
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="150"
        width="150"
        sx={{ objectFit: "contain" }}
        image={item.imageUrl}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Box display="flex" alignItems="center" marginTop={2}>
          <Button variant="outlined" onClick={handleSubtract}>
            -
          </Button>
          <Typography variant="body1" component="div" marginX={2}>
            {quantity}
          </Typography>
          <Button variant="outlined" onClick={handleAdd}>
            +
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
