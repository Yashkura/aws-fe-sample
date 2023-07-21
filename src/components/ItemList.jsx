// ItemList.js
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import ItemPagination from "./ItemPagination";
import Box from "@mui/material/Box";

const items = [
  {
    id: 1,
    name: "Dolo 650",
    description: "Paracetemol tablets IP",
    imageUrl:
      "https://i1.wp.com/medigram.in/wp-content/uploads/2020/08/Dolo-650-Mg-tablet.png?fit=668%2C436&ssl=1",
  },
  {
    id: 2,
    name: "Colpol Syrup",
    description: "Paracetemol Pediatric Oral Suspension",
    imageUrl:
      "https://static2.medplusmart.com/products/_0add325_/CALP0003_L.jpg",
  },
  {
    id: 3,
    name: "Cofsils Syrup",
    description: "COFSILS DX Syrup 100ml",
    imageUrl:
      "https://www.netmeds.com/images/product-v1/600x600/1062701/cofsils_dx_cough_syrup_100ml_507078_0_0.jpg",
  },
  {
    id: 4,
    name: "Leeford leekuf Syrup",
    description: "Leeford leekuf Syrup",
    imageUrl: "https://m.media-amazon.com/images/I/71gauJHvnPS.jpg",
  },
  {
    id: 5,
    name: "Dolo 650",
    description: "Paracetemol tablets IP",
    imageUrl:
      "https://i1.wp.com/medigram.in/wp-content/uploads/2020/08/Dolo-650-Mg-tablet.png?fit=668%2C436&ssl=1",
  },
  {
    id: 6,
    name: "Colpol Syrup",
    description: "Paracetemol Pediatric Oral Suspension",
    imageUrl:
      "https://static2.medplusmart.com/products/_0add325_/CALP0003_L.jpg",
  },
  {
    id: 7,
    name: "Cofsils Syrup",
    description: "COFSILS DX Syrup 100ml",
    imageUrl:
      "https://www.netmeds.com/images/product-v1/600x600/1062701/cofsils_dx_cough_syrup_100ml_507078_0_0.jpg",
  },
  {
    id: 8,
    name: "Leeford leekuf Syrup",
    description: "Leeford leekuf Syrup",
    imageUrl: "https://m.media-amazon.com/images/I/71gauJHvnPS.jpg",
  },
  {
    id: 9,
    name: "Dolo 650",
    description: "Paracetemol tablets IP",
    imageUrl:
      "https://i1.wp.com/medigram.in/wp-content/uploads/2020/08/Dolo-650-Mg-tablet.png?fit=668%2C436&ssl=1",
  },
  {
    id: 10,
    name: "Colpol Syrup",
    description: "Paracetemol Pediatric Oral Suspension",
    imageUrl:
      "https://static2.medplusmart.com/products/_0add325_/CALP0003_L.jpg",
  },
  {
    id: 11,
    name: "Cofsils Syrup",
    description: "COFSILS DX Syrup 100ml",
    imageUrl:
      "https://www.netmeds.com/images/product-v1/600x600/1062701/cofsils_dx_cough_syrup_100ml_507078_0_0.jpg",
  },
  {
    id: 12,
    name: "Leeford leekuf Syrup",
    description: "Leeford leekuf Syrup",
    imageUrl: "https://m.media-amazon.com/images/I/71gauJHvnPS.jpg",
  },
  // Add more products here
];

const ItemList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(items.slice(startIndex, endIndex));
  }, [currentPage]);

  const handleQuantityChange = (itemId, newQuantity) => {
    // Add your backend integration logic here to update the item quantity
    // based on the itemId and newQuantity
    console.log(`Item ${itemId} quantity updated to ${newQuantity}`);
  };

  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        sx={{ mt: 1 }}
      >
        {currentItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </Box>
      <br />
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        <ItemPagination
          pageCount={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </Box>
    </>
  );
};

export default ItemList;
