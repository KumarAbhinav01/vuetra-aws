import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import CachedIcon from "@mui/icons-material/Cached";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { FaBell } from "react-icons/fa6";
import { ticketItems } from "../../../static/dashboardItem";
import Notification from "../../Home/Notification";

const iconStyle = {
  color: (theme) => theme.palette.color.secondary,
  fontSize: "22px",
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ marginTop: "0" }}
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

export default function Notifications() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <FaBell size={16} />
      </IconButton>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            boxShadow: "-7px 1px 12px 0px rgba(41, 41, 41, .14)",
          },
        }}
        open={open}
        onClose={handleClose}
        anchor="right"
      >
        <Paper
          sx={{
            width: "540px",
            height: "100vh",
            overflow: "hidden",
            background: (theme) => theme.palette.color.paper,
            border: (theme) => `1px solid ${theme.palette.color.border}`,
            p: "32px 24px",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Notifications</Typography>
            <Stack direction="row" spacing={0}>
              <IconButton>
                <CachedIcon sx={iconStyle} />
              </IconButton>
              <IconButton>
                <FilterListIcon sx={iconStyle} />
              </IconButton>
              <IconButton>
                <MoreVertIcon sx={iconStyle} />
              </IconButton>
              <IconButton onClick={handleClose}>
                <CloseIcon sx={iconStyle} />
              </IconButton>
            </Stack>
          </Stack>
          <Divider sx={{ my: 1 }} />
          <Box
            sx={{
              width: "100%",
              borderBottom: (theme) =>
                `1px solid ${theme.palette.color.border}`,
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Tickets" {...a11yProps(1)} />
              <Tab label="Payouts" {...a11yProps(2)} />
              <Tab label="Flagged Profiles" {...a11yProps(3)} />
            </Tabs>
          </Box>

          <Stack
            sx={{
              height: "90%",
              overflowY: "auto",
            }}
            spacing={1}
          >
            {[0, 1, 2, 3].map((v, index) => (
              <CustomTabPanel value={value} index={index} key={index}>
                <Stack>
                  {ticketItems
                    .filter((item) => item.access.includes(value))
                    .map((item, index) => (
                      <Notification
                        item={item}
                        selected={true}
                        index={index}
                        divider
                      />
                    ))}
                </Stack>
              </CustomTabPanel>
            ))}
          </Stack>
        </Paper>
      </Drawer>
    </Box>
  );
}
