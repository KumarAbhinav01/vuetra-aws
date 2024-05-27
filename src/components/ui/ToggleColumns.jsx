import {
  Box,
  Button,
  InputAdornment,
  InputBase,
  Menu,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import SearchIcon from "@mui/icons-material/Search";

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    backgroundColor: theme.palette.color.bg3,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontSize: "11.5px",
    paddingTop: "3px",
    paddingBottom: "3px",
  },
  background: theme.palette.color.bg3,
}));

export default function ToggleColumns({
  columns,
  selectedColumns,
  setSelectedColumns,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = useState("");

  return (
    <>
      <Button
        variant="outlined"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          background: "transparent",
          color: (theme) => theme.palette.color.secondary,
          border: (theme) =>
            `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
          ":hover": {
            border: (theme) =>
              `1px solid ${alpha(theme.palette.color.secondary, 0.45)}`,
            background: "transparent",
          },
          fontSize: "11.5px",
          height: "26px",
        }}
      >
        Toggle Columns <BiChevronDown />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <Stack
          sx={{
            borderRadius: "10px",
            p: "10px",
            background: (theme) => theme.palette.color.bg2,
            // border: (theme) => `1px solid ${theme.palette.color.border}`,
            width: "300px",
            mr: "10px",
            maxHeight: "400px",
            overflowY: "auto",
          }}
          spacing={1}
        >
          <StyledInput
            sx={{
              border: (theme) => `1px solid ${theme.palette.color.border}`,

              px: 1,
              width: "100%",
            }}
            placeholder="Search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: "13px" }} />
              </InputAdornment>
            }
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Stack spacing={1} sx={{ px: 1 }}>
            {columns
              .filter((column) =>
                column.label.toLowerCase().includes(value.toLowerCase())
              )
              .map((column) => (
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  onClick={() => {
                    if (selectedColumns.includes(column.id)) {
                      setSelectedColumns(
                        selectedColumns.filter((col) => col !== column.id)
                      );
                    } else {
                      setSelectedColumns([...selectedColumns, column.id]);
                    }
                  }}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      width: "10px",
                      height: "10px",
                      background: (theme) =>
                        selectedColumns.includes(column.id)
                          ? theme.palette.color.green
                          : theme.palette.color.bg3,
                      transition: "all 500ms ease-in-out",
                      borderRadius: "1px",
                    }}
                  ></Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: (theme) => theme.palette.color.primary,
                      fontWeight: "400",
                    }}
                  >
                    {column.label}
                  </Typography>
                </Stack>
              ))}
          </Stack>
        </Stack>
        {/* <Button variant="text" sx={{ fontSize: "11.5px" }}>
          Select All
        </Button> */}
        <Stack spacing={1}></Stack>
      </Menu>
    </>
  );
}
