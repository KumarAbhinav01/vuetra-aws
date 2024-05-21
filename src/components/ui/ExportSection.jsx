import React from "react";
import {
  Button,
  Divider,
  Modal,
  Paper,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import { BiExport } from "react-icons/bi";
import { FiDownloadCloud } from "react-icons/fi";
import CustomCheckbox from "./CustomCheckbox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  border: (theme) => `1px solid
   ${theme.palette.color.border}`,
  borderRadius: "16px",
  background: (theme) => theme.palette.color.bg3,
};

const ExportSection = () => {
  const [open, setOpen] = React.useState(false);
  const [formats, setFormats] = React.useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Typography
        sx={{
          color: (theme) => theme.palette.color.secondary,
          fontSize: "11.5px",
          py: "3px",
          px: "8px",
          border: (theme) =>
            `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        <BiExport /> Export
      </Typography>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={style}>
          <Stack sx={{ p: "24px", overflowY: "auto" }} spacing={2}>
            <Stack
              spacing={3}
              sx={{
                color: (theme) =>
                  theme.palette.mode === "dark"
                    ? theme.palette.color.primary
                    : theme.palette.color.lightText,
                pt: "12px",
              }}
              alignItems="center"
            >
              <FiDownloadCloud size={26} />
              <Stack spacing={1} alignItems="center">
                <Typography
                  variant="h3"
                  sx={{ color: (theme) => theme.palette.color.tertiary }}
                >
                  Select file type
                </Typography>
                <Typography variant="body3">
                  Choose one or multiple types you want to export.
                </Typography>
              </Stack>
            </Stack>
            <Divider />

            <Stack spacing={3}>
              {["PDF", "CSV", "Excel Sheet", "Docs"].map((item) => (
                <CustomCheckbox
                  key={item}
                  label={item}
                  checked={formats.includes(item)}
                  onChange={() => {
                    if (formats.includes(item)) {
                      setFormats(formats.filter((format) => format !== item));
                    } else {
                      setFormats([...formats, item]);
                    }
                  }}
                />
              ))}
            </Stack>
          </Stack>
          <Divider sx={{ p: "12px" }} />
          <Stack direction="row" spacing={1} sx={{ p: "12px" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: (theme) =>
                  alpha(theme.palette.color.secondary, 0.15),
                color: (theme) => theme.palette.color.primary,
                boxShadow: "none",
                ":hover": {
                  background: (theme) =>
                    alpha(theme.palette.color.secondary, 0.15),
                  boxShadow: "none",
                },
              }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button onClick={handleClose} variant="contained" fullWidth>
              Continue
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </div>
  );
};

export default ExportSection;
