import { Box } from "@mui/material";
import React from "react";
import AllIcon from "../../Icons/All";

const Menu = () => {
  return (
    <Box
      sx={{
        display: { xs: "block", lg: "none" },
      }}
    >
      <AllIcon />
    </Box>
  );
};

export default Menu;
