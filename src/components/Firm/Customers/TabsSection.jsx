import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import {
  Accounts,
  Certificates,
  Logs,
  Orders,
  Overview,
  Payouts,
  Verification,
} from "./TabElements";

const tabStyle = { fontSize: "13px !important", fontWeight: "500 !important" };

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
        <Box sx={{ py: 2, maxWidth: "calc(100vw - 680px)" }}>
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

export default function TabsSection() {
  const [value, setValue] = React.useState(0);
  const smallScreen = useMediaQuery("(max-width:1335px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(smallScreen);

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          maxWidth: smallScreen
            ? { sm: "350px", md: "450px", lg: "550px" }
            : "900",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
        >
          <Tab sx={tabStyle} label="Overview" {...a11yProps(0)} />
          <Tab sx={tabStyle} label="Orders" {...a11yProps(1)} />
          <Tab sx={tabStyle} label="Accounts" {...a11yProps(2)} />
          <Tab sx={tabStyle} label="Tickets" {...a11yProps(0)} />
          <Tab sx={tabStyle} label="Certificates" {...a11yProps(1)} />
          <Tab sx={tabStyle} label="Payouts" {...a11yProps(2)} />
          <Tab sx={tabStyle} label="Verification" {...a11yProps(0)} />
          <Tab sx={tabStyle} label="Logs" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Overview />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Orders />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Accounts />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}></CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Certificates />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Payouts />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Verification />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <Logs />
      </CustomTabPanel>
    </Box>
  );
}
