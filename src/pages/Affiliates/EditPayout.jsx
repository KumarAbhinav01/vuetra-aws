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
import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

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

const EditPayout = ({ open, handleClose }) => {
  const [page, setPage] = useState(0);
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
              background: (theme) => theme.palette.color.bg4,
              color: (theme) => theme.palette.color.primary,
              width: "fit-content",
            }}
          >
            <PiCurrencyCircleDollar size={28} />
          </Box>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "600",
            }}
          >
            Payment Accept
          </Typography>
          <Typography variant="body3">
            Aliquet feugiat nunc sed accumsan blandit sit.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ p: "12px", background: (theme) => theme.palette.color.bg2 }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              background: (theme) => theme.palette.color.red,
              color: (theme) => theme.palette.color.paper,
              borderRadius: "9px",
              ":hover": {
                background: (theme) => alpha(theme.palette.color.red, 0.9),
              },
            }}
          >
            Reject
          </Button>
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
            Accept
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default EditPayout;
