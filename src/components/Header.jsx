import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Searchbox from "./Searchbox";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Global Medicals Online
        </Typography>
        {/* Add other header elements, e.g., navigation links, buttons, etc. */}
        <Searchbox />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
