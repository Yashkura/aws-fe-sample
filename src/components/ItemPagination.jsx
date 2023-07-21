// Pagination.js
import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ItemPagination = ({ pageCount, currentPage, onPageChange }) => {
  const handlePageChange = (event, page) => {
    onPageChange(page);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
      />
    </Stack>
  );
};

export default ItemPagination;
