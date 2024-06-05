import React from "react";
import {
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  Stack,
  Typography,
  alpha,
} from "@mui/material";

import { FaArrowLeft } from "react-icons/fa6";
import FormInput from "../../ui/FormInput";

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

const PublicResources = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper sx={style}>
        <Box
          sx={{
            p: "24px",
          }}
        >
          <Stack spacing={2}>
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
              <Typography variant="h3">Public Resources</Typography>
            </Stack>
            <Divider />
            <Stack spacing={2}>
              <Typography variant="heading_500">
                Enter the URL of your external support content
              </Typography>
              <Typography
                variant="caption_500"
                sx={{
                  lineHeight: "24px",
                }}
              >
                We'll fetch all of the pages from the website URL you provide.
                Please provide a top-level domain. We'll read from all the sub
                domain pages.
              </Typography>
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
                  <Typography
                    variant="caption_500"
                    sx={{
                      lineHeight: "24px",
                    }}
                  >
                    Provide your external help center homepage link for best
                    results.
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Box
                    sx={{
                      height: "100%",
                      paddingTop: "1px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: (theme) => theme.palette.color.secondary,
                        marginTop: "8px",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="caption_500"
                    sx={{
                      lineHeight: "18px",
                    }}
                  >
                    Top-level domains will give the best results (e.g.
                    https://myhelpcenter.com rather than
                    https://myhelpcenter.com/home)
                  </Typography>
                </Stack>
              </Stack>
              <FormInput
                label2="Link"
                labelStyle={{
                  color: (theme) => theme.palette.color.primary,
                }}
                placeholder="Annoucement 1https://myhrlpcenter.com"
                spacing="6px"
              />
              <Typography variant="heading">
                You can also provide a list of specific URLs to add content from
              </Typography>
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
              borderRadius: "8px",
            }}
          >
            Sync external source
          </Button>
        </Stack>
      </Paper>
    </Modal>
  );
};

export default PublicResources;
