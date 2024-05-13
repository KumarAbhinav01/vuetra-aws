import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import WestIcon from "@mui/icons-material/West";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

import { toggleOpen } from "../../../../slices/openModalSlice";
import { Button, Grid, IconButton, Paper, Stack, alpha } from "@mui/material";
import { BsSquareHalf } from "react-icons/bs";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { TbLink } from "react-icons/tb";
import ProgressBar from "../../../ui/ProgressBar";
import General from "./General";
import Rules from "./Rules";
import Payouts from "./Payouts";

const AddProduct = () => {
  const [page, setPage] = React.useState(0);
  const { open } = useSelector((state) => state.openModal);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Drawer
        sx={
          {
            // borderRadius: "14px 0 14px 0",
            // overflow: "hidden",
          }
        }
        open={open}
        onClose={() => dispatch(toggleOpen())}
        anchor="right"
      >
        <Paper
          sx={{
            width: "644px",
            height: "100vh",
            overflow: "hidden",
            background: (theme) => theme.palette.color.paper,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            sx={{
              height: "50px",
              background: (theme) => theme.palette.color.bg4,
              px: "24px",
            }}
          >
            <Stack direction="row" spacing={0}>
              <IconButton onClick={() => dispatch(toggleOpen())}>
                <WestIcon
                  sx={{
                    color: (theme) => theme.palette.color.secondary,
                    fontSize: "16px",
                  }}
                />
              </IconButton>
              <IconButton>
                <OpenInFullIcon
                  sx={{
                    color: (theme) => theme.palette.color.secondary,
                    fontSize: "16px",
                  }}
                />
              </IconButton>
              <IconButton
                sx={{ color: (theme) => theme.palette.color.secondary }}
              >
                <BsSquareHalf size={12} />
              </IconButton>
            </Stack>
            <Stack direction="row" spacing={0}>
              <IconButton
                sx={{ color: (theme) => theme.palette.color.secondary }}
              >
                <TbLink size={18} />
              </IconButton>
              <IconButton
                sx={{ color: (theme) => theme.palette.color.secondary }}
              >
                <HiOutlineArchiveBoxArrowDown size={18} />
              </IconButton>
              <IconButton
                sx={{ color: (theme) => theme.palette.color.secondary }}
              >
                <MdDeleteOutline size={18} />
              </IconButton>
            </Stack>
          </Stack>

          <Box sx={{ width: "100%", height: "100px" }}>
            <ProgressBar
              steps={["General Info", "Rules & objectives", "Payouts/ scaling"]}
              page={page}
            />
          </Box>
          <Box
            sx={{
              height: "calc(100vh - 230px)",
              overflowY: "auto",
            }}
          >
            {page === 0 && <General />}
            {page === 1 && <Rules />}
            {page === 2 && <Payouts />}
          </Box>
          <Grid
            container
            spacing={1}
            sx={{
              padding: "16px 32px",
              background: (theme) => theme.palette.color.bg4,
              position: "sticky",
              height: "80px",
              bottom: 0,
            }}
          >
            <Grid item xs={4}>
              <Button
                fullWidth
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
                  setPage(0);
                  dispatch(toggleOpen());
                }}
              >
                Save as Draft
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button
                fullWidth
                sx={{ width: "100%", borderRadius: "9px" }}
                variant="contained"
                onClick={() => {
                  if (page === 2) {
                    dispatch(toggleOpen());
                  }
                  setPage((prev) => (prev + 1) % 3);
                }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Drawer>
    </React.Fragment>
  );
};

export default AddProduct;
