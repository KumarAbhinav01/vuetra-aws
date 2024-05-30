import { Close } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  Modal,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import Search from "@mui/icons-material/Search";

const searchItems = [
  {
    title: "Recent searches",
    items: [
      "John Doe",
      "20",
      "Harry Woods",
      "Ip-Address",
      "Purchase : 16",
      "Action",
      "523.65.63.321",
    ],
  },
  {
    title: "Trending",
    items: [
      "Purchase",
      "Customer",
      "Account",
      "Countries",
      "Scanned",
      "Last Scan",
      "Risk Scan",
    ],
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "512px",
  border: (theme) => `1px solid ${theme.palette.color.border}`,
  borderRadius: "5px",
  background: (theme) =>
    theme.palette.mode === "dark"
      ? theme.palette.color.bg2
      : theme.palette.color.bg,
};

const StyledInput = styled(InputBase)({
  border: 0,
  outline: "none",
  backgroundColor: "transparent",
  // color: "inherit",
  fontSize: "11.5px",
  fontWeight: 500,

  "&::placeholder": {
    color: "inherit",
    fontSize: "11px",
    fontWeight: 500,
  },
  "& input": {
    fontSize: "13px",
    fontWeight: 500,
    color: "inherit",
  },
});

export default function Searchbar({ value = "", setValue }) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // setValue("");
  };

  const debounceTimeoutRef = useRef(null);

  const debounce = (callback, delay) => {
    return (...args) => {
      clearTimeout(debounceTimeoutRef.current);
      debounceTimeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  const debouncedSetValue = debounce(setValue, 300);

  useEffect(() => {
    if (setValue) {
      debouncedSetValue(inputValue);
    }
  }, [inputValue, debouncedSetValue]);
  return (
    <div>
      <Search
        sx={{
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={handleOpen}
      />
      <Modal open={open} onClose={handleClose}>
        <Paper sx={style}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
            sx={{
              p: "12px",
              fontSize: "10px",
            }}
          >
            <StyledInput
              placeholder="Type a command or search ..."
              sx={{
                color: (theme) => theme.palette.color.secondary,
              }}
              startAdornment={
                <InputAdornment
                  position="start"
                  sx={{ color: (theme) => theme.palette.color.secondary }}
                >
                  <FiSearch size={20} />
                </InputAdornment>
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <IconButton
              onClick={() => {
                setInputValue("");
                if (setValue) setValue("");
                handleClose();
              }}
            >
              <Close
                sx={{
                  color: (theme) => theme.palette.color.secondary,
                  fontSize: "18px",
                }}
              />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            sx={{
              p: "12px",
              overflowY: "auto",
              background: (theme) => theme.palette.color.bg,
            }}
            spacing={2}
          >
            <Stack spacing={1}>
              {searchItems.map((searchItem) => (
                <Stack spacing={1}>
                  <Typography variant="body3">{searchItem.title}</Typography>
                  <Stack direction="row" flexWrap="wrap" spacing={0}>
                    {searchItem.items
                      .filter((item) =>
                        item.toLowerCase().includes(value.toLowerCase())
                      )
                      .map((item, index) => (
                        <Box
                          sx={{
                            background: (theme) =>
                              theme.palette.mode === "dark"
                                ? theme.palette.color.bg3
                                : theme.palette.color.bg2,
                            px: "14px",
                            height: "32px",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "8px",
                            color: (theme) => theme.palette.color.tertiary,
                            mr: "14px",
                            mb: "14px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setInputValue(item);
                          }}
                        >
                          {item}
                        </Box>
                      ))}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Paper>
      </Modal>
    </div>
  );
}
