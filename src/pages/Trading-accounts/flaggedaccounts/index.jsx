import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

import CopyTraders from "./CopyTraders";
import HFT from "./HFT";
import Hedge from "./Hedge";
import IpAddress from "./IpAddress";

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

export default function FlaggedAccounts() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", p: "24px", position: "relative" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pr: "48px" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Copy traders" {...a11yProps(0)} />
          <Tab label="HFT" {...a11yProps(1)} />
          <Tab label="Hedge" {...a11yProps(2)} />
          <Tab label="IP-addresses" {...a11yProps(2)} />
        </Tabs>
      </Stack>

      <CustomTabPanel value={value} index={0}>
        <CopyTraders />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <HFT />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Hedge />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <IpAddress />
      </CustomTabPanel>
    </Box>
  );
}
