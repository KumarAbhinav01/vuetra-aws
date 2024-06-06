import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import {
  Button,
  FormControl,
  Paper,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { Close, Help } from "@mui/icons-material";
import FormInput from "../../ui/FormInput";
import FormSelect from "../../ui/FormSelect1";
import FormSwitch from "../../ui/FormSwitch";

const TextArea = styled("textarea")(({ theme }) => ({
  width: "100%",
  height: "100px",
  background: theme.palette.color.bg4,
  color: theme.palette.color.secondary,
  border: `1px solid ${theme.palette.color.inputborder}`,
  padding: "12px",
  borderRadius: "8px",
  resize: "none",
  outline: "none",
  fontFamily: "inherit",
  fontSize: "13px",
  fontWeight: "500",
  "::placeholder": {
    color: theme.palette.color.secondary,
  },
}));

const CreateSnippetPopup = ({ open, handleClose }) => {
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={handleClose}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            borderRadius: "0px",
          },
        }}
      >
        <Paper
          sx={{
            width: "513px",
            height: "100vh",
            overflow: "hidden",
            background: (theme) => theme.palette.color.bg,
            borderRadius: "none",
          }}
        >
          <Box
            sx={{
              height: "100%",
              p: "24px",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h4">Snippet</Typography>
              <Close
                sx={{
                  fontSize: "22px",
                  cursor: "pointer",
                  color: (theme) => theme.palette.color.secondary,
                }}
                onClick={handleClose}
              />
            </Stack>
            <Stack
              sx={{
                my: "24px",
              }}
              spacing={3}
            >
              <FormInput
                label2="Title"
                placeholder="Enter title"
                spacing="6px"
                labelStyle={{
                  color: (theme) => theme.palette.color.primary,
                }}
              />
              <FormSelect
                label2="Language"
                placeholder="Select language"
                spacing="6px"
                labelStyle={{
                  color: (theme) => theme.palette.color.primary,
                }}
                options={[
                  { value: "english", label: "English" },
                  { value: "spanish", label: "Spanish" },
                  { value: "french", label: "French" },
                ]}
                flexDirection="row"
                defaultValue="english"
                fullWidth={false}
              />
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
                  <Typography variant="subtitle1">
                    Start writing your snippet content here
                  </Typography>
                  <Help sx={{ fontSize: "15px" }} />
                </Stack>
                <TextArea placeholder="Type a message" />
              </FormControl>
              <Stack direction="row" alignItems="center" spacing={1}>
                <FormSwitch
                  flex
                  label2="State"
                  labelsx={{
                    color: (theme) => theme.palette.color.primary,
                  }}
                  spacing="6px"
                />
                <Typography
                  sx={{
                    padding: "4px 6px",
                    background: (theme) =>
                      alpha(theme.palette.color.green, 0.15),
                    color: (theme) => theme.palette.color.green,
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Used by Fin
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
            sx={{
              padding: "16px 32px",
              background: (theme) => theme.palette.color.bg4,
              position: "sticky",
              height: "70px",
              bottom: 0,
              borderTop: (theme) => `1px solid ${theme.palette.color.border}`,
            }}
          >
            <Button
              sx={{
                background: (theme) =>
                  alpha(theme.palette.color.secondary, 0.15),
                color: (theme) => theme.palette.color.primary,
                borderRadius: "9px",
                ":hover": {
                  background: (theme) =>
                    alpha(theme.palette.color.secondary, 0.15),
                },
              }}
              onClick={() => {
                handleClose();
              }}
            >
              Delete
            </Button>
            <Button sx={{ borderRadius: "9px" }} variant="contained">
              Save and close
            </Button>
          </Stack>
        </Paper>
      </Drawer>
    </React.Fragment>
  );
};

export default CreateSnippetPopup;
