import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Grid, IconButton, Stack, Tooltip, alpha } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { PiWarningDiamondBold } from "react-icons/pi";
import { MdDone } from "react-icons/md";

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

const items = [
  {
    title: "Total Scanned",
    value: "1841",
    tooltip: "Active accounts that are doing a evaluation, funded are on trial",
  },
  {
    title: "Total copy traders",
    value: "32",
    tooltip: "All inactive accounts",
    icon: PiWarningDiamondBold,
    color: "red",
  },
  {
    title: "Total passed",
    value: "1799",
    tooltip: "All inactive accounts",
    icon: MdDone,
    color: "green",
  },
];

export default function FlaggedAccounts() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", p: "24px" }}>
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

      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  width: "100%",
                  border: (theme) => `1px solid ${theme.palette.color.border}`,
                  background: (theme) => theme.palette.color.bg3,
                  borderRadius: "24px",
                  overflow: "hidden",
                  padding: "24px",
                  cursor: "pointer",
                }}
              >
                <Stack spacing={3}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="caption">{item.title}</Typography>
                    <Tooltip title={item.tooltip} placement="top">
                      <HelpIcon
                        sx={{
                          fontSize: "15px",
                          cursor: "pointer",
                        }}
                      />
                    </Tooltip>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center">
                    {item.icon && (
                      <IconButton
                        sx={{
                          color: (theme) => theme.palette.color[item.color],
                          background: (theme) =>
                            alpha(theme.palette.color[item.color], 0.15),
                          ":hover": {
                            background: (theme) =>
                              alpha(theme.palette.color[item.color], 0.25),
                          },
                        }}
                      >
                        <item.icon size={20} />
                      </IconButton>
                    )}

                    <Typography
                      variant="h1"
                      sx={{
                        ...(item.color && {
                          color: (theme) => theme.palette.color[item.color],
                        }),
                        fontWeight: "600",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
