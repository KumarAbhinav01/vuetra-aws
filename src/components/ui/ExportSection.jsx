import React from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Paper,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import { BiExport } from "react-icons/bi";
import { FiDownloadCloud } from "react-icons/fi";
import CustomCheckbox from "./CustomCheckbox";
import { Close, Done } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  border: (theme) => `1px solid
   ${theme.palette.color.border}`,
  borderRadius: "12px",
  background: (theme) => theme.palette.color.bg,
};

const ExportSection = () => {
  const [open, setOpen] = React.useState(false);
  const [formats, setFormats] = React.useState([]);
  const [res, setRes] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setRes("");
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          color: (theme) => theme.palette.color.secondary,
          fontSize: "11.5px",
          py: "7px",
          px: "13px",
          bgcolor: (theme) => theme.palette.color.bg,
          border: (theme) =>
            `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
          borderRadius: "50px",
          ":hover": {
            border: (theme) =>
              `1px solid ${alpha(theme.palette.color.secondary, 0.35)}`,
            backgroundColor: (theme) => theme.palette.color.bg2,
          },
          height: "30px",
        }}
      >
        <BiExport style={{ marginRight: "5px" }} /> Export
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Paper sx={style}>
          {!res && (
            <Box>
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
                          setFormats(
                            formats.filter((format) => format !== item)
                          );
                        } else {
                          setFormats([...formats, item]);
                        }
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
              <Divider sx={{ p: "12px" }} />
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  p: "12px",
                  background: (theme) => theme.palette.color.bg4,
                }}
              >
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
                  onClick={() => {
                    setRes("failed");
                  }}
                >
                  Close
                </Button>
                <Button
                  onClick={() => setRes("success")}
                  variant="contained"
                  fullWidth
                >
                  Continue
                </Button>
              </Stack>
            </Box>
          )}
          {res === "success" && (
            <Stack
              sx={{ p: "24px", width: "100%" }}
              spacing={2}
              alignItems="center"
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: "4px",
                  right: "4px",
                  color: (theme) => theme.palette.color.secondary,
                }}
              >
                <Close />
              </IconButton>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: "16px",
                  borderRadius: "50%",
                  background: (theme) => alpha(theme.palette.color.green, 0.15),
                }}
              >
                <Done
                  sx={{
                    color: (theme) => theme.palette.color.green,
                    fontSize: "26px",
                  }}
                />
              </Box>
              <Typography
                variant="h4"
                sx={{ color: (theme) => theme.palette.color.tertiary }}
              >
                Account Exported Successfully
              </Typography>
              <Typography
                sx={{
                  fontSize: "11.5px",
                  color: (theme) => theme.palette.color.secondary,
                  textAlign: "center",
                  lineHeight: "20px",
                }}
              >
                Your account has been exported successfully. You can download
                the file from the download section.
              </Typography>
            </Stack>
          )}
          {res === "failed" && (
            <Stack
              sx={{ p: "24px", width: "100%" }}
              spacing={2}
              alignItems="center"
            >
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: "4px",
                  right: "4px",
                  color: (theme) => theme.palette.color.secondary,
                }}
              >
                <Close />
              </IconButton>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: "16px",
                  borderRadius: "50%",
                  background: (theme) => alpha(theme.palette.color.red, 0.15),
                }}
              >
                <Close
                  sx={{
                    color: (theme) => theme.palette.color.red,
                    fontSize: "26px",
                  }}
                />
              </Box>
              <Typography
                variant="h4"
                sx={{ color: (theme) => theme.palette.color.tertiary }}
              >
                Account Export Failed
              </Typography>
              <Typography
                sx={{
                  fontSize: "11.5px",
                  color: (theme) => theme.palette.color.secondary,
                  textAlign: "center",
                  lineHeight: "20px",
                }}
              >
                Your account export has failed. Please try again later.
              </Typography>
            </Stack>
          )}
        </Paper>
      </Modal>
    </div>
  );
};

export default ExportSection;
