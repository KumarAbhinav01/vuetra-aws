import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import {
  Button,
  FormControl,
  Paper,
  Stack,
  Tooltip,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { Add, Close, Help } from "@mui/icons-material";
import FormInput from "../../ui/FormInput";
import FormSelect from "../../ui/FormSelect1";
import FormSwitch from "../../ui/FormSwitch";
import { HiMiniArrowTopRightOnSquare, HiOutlineTrash } from "react-icons/hi2";
import DeletePopup from "../../ui/DeletePopup";

const ManageResourcesPopup = ({ open, handleClose }) => {
  const [checked, setChecked] = React.useState(true);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
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
            width: "520px",
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
              <Typography variant="h4">Manage Resources</Typography>
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
                py: "36px",
              }}
              spacing={3}
            >
              <Stack
                spacing={3}
                sx={{
                  p: "16px",
                  background: (theme) => theme.palette.color.bgblue,
                  borderRadius: "8px",
                }}
              >
                <Stack spacing={1}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h5">External URL Resources</Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="caption_500">Learn more</Typography>
                      <HiMiniArrowTopRightOnSquare size={16} />
                    </Stack>
                  </Stack>
                  <Typography variant="body3">
                    Admin will use the external public content below to answer
                    customer questions.
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  startIcon={<Add sx={{ fontSize: "14px" }} />}
                  sx={{
                    width: "fit-content",
                    py: 0.7,
                  }}
                >
                  New URL sources
                </Button>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="heading">
                  Synced external sources
                </Typography>
                <Typography variant="body3">
                  Admin will automaticaly generate response using following
                  external sources:
                </Typography>
                <Stack
                  spacing={1}
                  sx={{
                    p: "12px",
                    border: (theme) =>
                      `1px solid ${theme.palette.color.border}`,
                    background: (theme) => theme.palette.color.bg3,
                    borderRadius: "8px",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: "fit-content",
                      }}
                    >
                      <FormSwitch
                        label="https://www.ftmo.com"
                        flex
                        flexDirection="row-reverse"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                      />
                    </Box>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography
                        sx={{
                          fontSize: "13px",
                          color: (theme) => theme.palette.color.green,
                          background: (theme) =>
                            alpha(theme.palette.color.green, 0.15),
                          borderRadius: "7px",
                          padding: "4px 8px",
                        }}
                      >
                        Used by Fin
                      </Typography>
                      <Tooltip title="Delete your source and all its content">
                        <Box
                          sx={{
                            color: (theme) => theme.palette.color.red,
                            cursor: "pointer",
                          }}
                          onClick={() => setDeleteOpen(true)}
                        >
                          <HiOutlineTrash size={18} />
                        </Box>
                      </Tooltip>
                    </Stack>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Stack
                      justifyContent="space-between"
                      sx={{
                        height: "60px",
                        padding: "8px",
                        width: "100%",
                        border: (theme) =>
                          `1px solid ${theme.palette.color.border}`,
                        borderRadius: "4px",
                      }}
                    >
                      <Typography variant="body3">Pages imported</Typography>
                      <Typography variant="heading">17</Typography>
                    </Stack>
                    <Stack
                      justifyContent="space-between"
                      sx={{
                        height: "60px",
                        padding: "8px",
                        width: "100%",
                        border: (theme) =>
                          `1px solid ${theme.palette.color.border}`,
                        borderRadius: "4px",
                      }}
                    >
                      <Typography variant="body3">Last synced</Typography>
                      <Typography variant="heading">2 hours ago</Typography>
                    </Stack>
                    <Stack
                      justifyContent="space-between"
                      sx={{
                        height: "60px",
                        padding: "8px",
                        width: "100%",
                        border: (theme) =>
                          `1px solid ${theme.palette.color.border}`,
                        borderRadius: "4px",
                      }}
                    >
                      <Typography variant="body3">Sync behaviour</Typography>
                      <Typography variant="heading">automatic</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Paper>
      </Drawer>
      <DeletePopup
        open={deleteOpen}
        handleClose={() => setDeleteOpen(false)}
        title="Delete this Source"
        description="This action is permanent and can't be undo. This source and all the synced content will be deleted and no longer by admin"
      />
    </React.Fragment>
  );
};

export default ManageResourcesPopup;
