import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import WestIcon from "@mui/icons-material/West";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

import {
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  alpha,
} from "@mui/material";
import { BsSquareHalf, BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { TbLink } from "react-icons/tb";
import { toggleOpen } from "../../slices/openModalSlice";
import { FaKey } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import GeneralTab from "./generalTab";
import TradersActivity from "./TradersActivity";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ViewAccount = () => {
  const [page, setPage] = React.useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
              <IconButton>
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
            </Stack>
            <Stack direction="row" spacing={0}>
              <IconButton
                sx={{ color: (theme) => theme.palette.color.secondary }}
              >
                <IoKeyOutline size={16} />
              </IconButton>
              <IconButton
                sx={{ color: (theme) => theme.palette.color.secondary }}
              >
                <BsThreeDotsVertical size={16} />
              </IconButton>
            </Stack>
          </Stack>
          <Box
            sx={{
              maxHeight: "calc(100vh - 50px)",
              overflowY: "auto",
              p: "24px",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: (theme) => theme.palette.color.green,
                }}
              ></Box>
              <Typography
                variant="h4"
                sx={{
                  transition: "all 0.3s ease",
                  ":hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                    opacity: 0.35,
                  },
                }}
              >
                Customer name
              </Typography>
            </Stack>
            <Grid container spacing={1} sx={{ mt: "12px" }}>
              <Grid item xs={12} sm={8}>
                <Stack spacing={1.5} sx={{ px: "24px" }}>
                  <Typography variant="heading">102911050</Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="space-between"
                  >
                    <Typography variant="caption" sx={{ fontWeight: "500" }}>
                      Tradelocker
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Stack spacing={1}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="caption" sx={{ fontWeight: "500" }}>
                      Balance:
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                      $110.000.00
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="caption" sx={{ fontWeight: "500" }}>
                      Equity:
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                      $110.000.00
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="caption" sx={{ fontWeight: "500" }}>
                      Floating:
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>

            <Divider sx={{ my: 1 }} />
            <Box sx={{}}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="General" {...a11yProps(0)} />
                <Tab label="Statistics" {...a11yProps(1)} />
                <Tab label="User information" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <GeneralTab />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
            <TradersActivity />
          </Box>
        </Paper>
      </Drawer>
    </React.Fragment>
  );
};

export default ViewAccount;
