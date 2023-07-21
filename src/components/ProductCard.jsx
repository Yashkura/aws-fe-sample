import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="150"
        width="150"
        sx={{ objectFit: "contain" }}
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Box display="flex" alignItems="center" marginTop={2}>
          <Button variant="outlined" onClick={handleMinus}>
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

export default ProductCard;
