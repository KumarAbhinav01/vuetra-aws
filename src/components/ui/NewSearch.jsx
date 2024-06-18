import React, { useState } from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const SearchBox = styled(Box)(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  border: `1px solid ${theme.palette.color.borderpure}`,
  color: theme.palette.color.active,
  borderRadius: 20,
  transition: "width 0.3s ease",
  paddingLeft: "10px",
  height: "35px",
  width: 40,
  "&:hover": {
    width: 200,
  },
  [theme.breakpoints.down("sm")]: {
    width: 30,
    "&:hover": {
      width: 150,
    },
  },
  ":focus-within": {
    border: `1px solid ${theme.palette.color.active}`,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  padding: "0px 5px",
  flex: 1,
  ":focus": {
    border: `1px solid ${theme.palette.color.active}`,
  },
  //   input: {
  input: {
    color: theme.palette.color.active,
    "::placeholder": {
      color: theme.palette.color.secondary,
    },
  },
  //   },
}));

const SearchInput = () => {
  const [focused, setFocused] = useState(false);
  const ref = React.useRef(null);

  return (
    <SearchBox
      open={focused}
      sx={{ width: focused ? 200 : 40, cursor: "pointer" }}
      onMouseEnter={() => {
        setFocused(true);
        ref.current.focus();
      }}
      onMouseLeave={() => setFocused(false)}
    >
      <SearchIcon
        sx={{
          color: (theme) => theme.palette.color.secondary,
          fontSize: "18px",
        }}
      />
      <StyledInputBase
        ref={ref}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        onFocus={() => {
          setFocused(true);
          ref.current.focus();
        }}
        onBlur={() => setFocused(false)}
        autoFocus={focused}
        sx={{ display: focused ? "block" : "none" }}
        open={focused}
      />
    </SearchBox>
  );
};

export default SearchInput;
