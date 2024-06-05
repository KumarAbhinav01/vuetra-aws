import React from "react";
import {
  Box,
  Button,
  Modal,
  Paper,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";

import { FiUploadCloud } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "580px",
  border: (theme) => `1px solid
   ${theme.palette.color.border}`,
  borderRadius: "12px",
  background: (theme) => theme.palette.color.bg,
};

const VisuallyHiddenInput = styled("input")({
  height: "100%",
  position: "absolute",
  width: "100%",
  opacity: 0,
  top: 0,
  left: 0,
  cursor: "pointer",
});

const CreateContent = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper sx={style}>
        <Box
          sx={{
            p: "24px",
          }}
        >
          <Stack spacing={4}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                color: (theme) => theme.palette.color.primary,
              }}
            >
              <FaArrowLeft
                style={{ cursor: "pointer" }}
                onClick={handleClose}
                size={22}
              />
              <Typography variant="h3">Create New Content</Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="heading">PDF Upload</Typography>
              <Stack
                spacing={1}
                alignItems="center"
                sx={{
                  py: "24px",
                  position: "relative",
                  width: "100%",
                  border: (theme) => `1px dashed ${theme.palette.color.border}`,
                  cursor: "pointer",
                  borderRadius: "8px",
                  background: (theme) => theme.palette.color.bg2,
                }}
              >
                <Box
                  sx={{
                    background: (theme) => theme.palette.color.bg3,
                    borderRadius: "50%",
                    border: (theme) =>
                      `2px solid ${alpha(theme.palette.color.secondary, 0.2)}`,
                    color: (theme) => theme.palette.color.primary,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <FiUploadCloud size={24} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: (theme) => theme.palette.color.primary,
                    "& span": {
                      fontSize: "13.5px",
                      color: (theme) => theme.palette.color.secondary,
                    },
                  }}
                >
                  Click to upload PDF <span>or drag and drop</span>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: (theme) => theme.palette.color.secondary,
                  }}
                >
                  PDF (max. 45 MB)
                </Typography>
                <VisuallyHiddenInput type="file" />
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: (theme) => theme.palette.color.secondary,
                  }}
                />
                <Typography variant="caption_500">
                  Provide a PDF file and we'll fetch all the text data inside.
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: (theme) => theme.palette.color.secondary,
                  }}
                />
                <Typography variant="caption_500">
                  Images and multiple text columns are not supported.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={2}
          sx={{
            p: "12px",
            background: (theme) => theme.palette.color.bg4,
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: (theme) => alpha(theme.palette.color.secondary, 0.15),
              color: (theme) => theme.palette.color.primary,
              boxShadow: "none",
              ":hover": {
                background: (theme) =>
                  alpha(theme.palette.color.secondary, 0.15),
                boxShadow: "none",
              },
              width: "140px",
              borderRadius: "8px",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              width: "140px",
              borderRadius: "8px",
            }}
          >
            Upload
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default CreateContent;
