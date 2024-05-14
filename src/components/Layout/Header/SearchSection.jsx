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
import React from "react";
import { BiCommand } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { searchItems } from "../../../static/header";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "512px",
  border: (theme) => `1px solid ${theme.palette.color.border}`,
  borderRadius: "5px",
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

export default function SearchSection() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          border: (theme) => `1px solid ${theme.palette.color.border}`,
          borderRadius: "5px",
          background: "transparent",
          py: 0.7,
          px: 2,
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        {/* <StyledInput placeholder="Type a command or search ..." /> */}
        <Typography variant="subtitle2_500">
          Type a command or search ...
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#8A96A626",
            borderRadius: "5px",
            fontSize: "11px",
            px: 1,
            py: 0.5,
            height: "fit-content",
            color: (theme) => theme.palette.color.secondary,
          }}
        >
          <BiCommand size={12} />
          <Typography sx={{ fontSize: "11px", ml: "3px", color: "inherit" }}>
            K
          </Typography>
        </Box>
      </Box>
      {/* <StyledInput
        onClick={handleOpen}
        placeholder="Type a command or search ..."
      /> */}
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
            />
            <IconButton onClick={handleClose}>
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
            sx={{ p: "12px", height: "300px", overflowY: "auto" }}
            spacing={2}
          >
            {searchItems.map((item, index) => (
              <Stack spacing={2}>
                <Typography variant="body3">{item.title}</Typography>
                {item.items.map((childItem) => (
                  <Stack direction="row" justifyContent="space-between">
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{ color: (theme) => theme.palette.color.secondary }}
                    >
                      {childItem.icon}
                      <Typography variant="subtitle1_500">
                        {childItem.title}
                      </Typography>
                    </Stack>
                    {childItem.shortcut && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#8A96A626",
                          borderRadius: "5px",
                          fontSize: "11px",
                          px: 1,
                          py: 0.5,
                          height: "fit-content",
                          color: (theme) => theme.palette.color.secondary,
                        }}
                      >
                        <BiCommand size={12} />
                        <Typography
                          sx={{ fontSize: "11px", ml: "3px", color: "inherit" }}
                        >
                          {childItem.shortcut}
                        </Typography>
                      </Box>
                    )}
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        </Paper>
      </Modal>
    </div>
  );
}
