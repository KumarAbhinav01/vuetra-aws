import {
  Backdrop,
  Box,
  Button,
  Modal,
  Paper,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  background: (theme) => theme.palette.color.bg,
  borderRadius: "8px",
  overflow: "hidden",
};

const DeletePopup = ({ open, handleClose, title, description }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper sx={style}>
        <Stack
          spacing={2}
          alignItems="center"
          sx={{
            p: "24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              padding: "16px",
              background: (theme) => alpha(theme.palette.color.red, 0.15),
              color: (theme) => theme.palette.color.red,
              width: "fit-content",
            }}
          >
            <HiOutlineTrash size={24} />
          </Box>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "600",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body3"
            sx={{
              lineHeight: "2em",
              textAlign: "center",
            }}
          >
            {description}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ p: "12px", background: (theme) => theme.palette.color.bg2 }}
        >
          <Button
            sx={{
              background: (theme) => alpha(theme.palette.color.secondary, 0.15),
              color: (theme) => theme.palette.color.secondary,
              borderRadius: "9px",
              ":hover": {
                background: (theme) =>
                  alpha(theme.palette.color.secondary, 0.15),
              },
            }}
            fullWidth
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button fullWidth variant="contained" sx={{ borderRadius: "9px" }}>
            Delete
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default DeletePopup;
