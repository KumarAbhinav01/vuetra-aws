import React from "react";
import { Box, Grid, Modal, Paper, Stack, Typography } from "@mui/material";

import { Close } from "@mui/icons-material";
import { IoDocumentOutline } from "react-icons/io5";
import { TbPdf } from "react-icons/tb";
import { RiLinkM } from "react-icons/ri";

const items = [
  {
    title: "Snippets",
    description: "Plain text, simply to contain specific answers to questions",
    icon: <IoDocumentOutline size={18} />,
    value: "snippets",
  },
  {
    title: "PDF",
    description: "Provide a PDF file and we'll fetch all the text data inside",
    icon: <TbPdf size={18} />,
    value: "pdf",
  },
  {
    title: "Public sources",
    description:
      "Provide a top-level domain and we will fetch all the sub domain pages",
    icon: <RiLinkM size={18} />,
    value: "publicresources",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "650px",
  border: (theme) => `1px solid
   ${theme.palette.color.border}`,
  borderRadius: "12px",
  background: (theme) => theme.palette.color.bg,
  padding: "24px",
};

const NewDataSource = ({ open, setOpen, setPopupType }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper sx={style}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              fontSize: "13.78px",
              fontWeight: "500",
              color: (theme) => theme.palette.color.primary,
            }}
          >
            New Data Source
          </Typography>
          <Close
            sx={{
              cursor: "pointer",
              color: (theme) => theme.palette.color.secondary,
            }}
            onClick={handleClose}
          />
        </Stack>
        <Grid
          container
          spacing={2}
          sx={{
            pt: "8px",
          }}
        >
          {items.map((item) => (
            <Grid item xs={4}>
              <Stack
                spacing={2}
                sx={{
                  padding: "12px",
                  background: (theme) =>
                    theme.palette.mode === "dark"
                      ? theme.palette.color.bg2
                      : "#f3f5f6",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setPopupType(item.value);
                  setOpen(false);
                }}
              >
                <Box
                  sx={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: (theme) => theme.palette.color.bg3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <IoDocumentOutline size={18} /> */}
                  {item.icon}
                </Box>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography
                  sx={{
                    fontSize: "13.56px",
                    fontWeight: "500",
                    color: (theme) => theme.palette.color.secondary,
                  }}
                >
                  {item.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Modal>
  );
};

export default NewDataSource;
