import { Help } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  FormControl,
  Modal,
  Paper,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const TextArea = styled("textarea")(({ theme }) => ({
  width: "100%",
  height: "100px",
  background: theme.palette.color.bg4,
  color: theme.palette.color.secondary,
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  resize: "none",
  outline: "none",
  fontFamily: "inherit",
  fontSize: "13px",
  fontWeight: "500",
}));

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

  const closePopup = () => {
    setPage(0);
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={closePopup}
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
              background: (theme) =>
                page === 0
                  ? theme.palette.color.bg4
                  : alpha(theme.palette.color.red, 0.15),
              color: (theme) =>
                theme.palette.color[page === 0 ? "primary" : "red"],
              width: "fit-content",
            }}
          >
            {page === 0 ? (
              <PiCurrencyCircleDollar size={28} />
            ) : (
              <IoMdClose size={28} />
            )}
          </Box>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "600",
            }}
          >
            {page === 0 ? "Edit Payout" : "Reject Request"}
          </Typography>
          <Typography variant="body3">
            {page === 0
              ? "Aliquet feugiat nunc sed accumsan blandit sit."
              : "Are you sure to reject this request?"}
          </Typography>
          {page === 1 && (
            <FormControl fullWidth>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  color: (theme) => theme.palette.color.secondary,
                  mb: "8px",
                }}
              >
                <Typography variant="heading">Reason for Rejection</Typography>
                <Help sx={{ fontSize: "15px" }} />
              </Stack>
              <TextArea placeholder="Type a message" />
            </FormControl>
          )}
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ p: "12px", background: (theme) => theme.palette.color.bg2 }}
        >
          {page === 0 ? (
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
              onClick={() => setPage(1)}
            >
              Reject
            </Button>
          ) : (
            <Button
              sx={{
                background: (theme) =>
                  alpha(theme.palette.color.secondary, 0.15),
                color: (theme) => theme.palette.color.secondary,
                borderRadius: "9px",
                ":hover": {
                  background: (theme) =>
                    alpha(theme.palette.color.secondary, 0.15),
                },
              }}
              fullWidth
              disabled
            >
              Cancel
            </Button>
          )}
          {page === 0 ? (
            <Button
              sx={{
                background: (theme) =>
                  alpha(theme.palette.color.secondary, 0.15),
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
          ) : (
            <Button sx={{}} fullWidth onClick={closePopup}>
              Accept
            </Button>
          )}
        </Stack>
      </Paper>
    </Modal>
  );
};

export default EditPayout;
