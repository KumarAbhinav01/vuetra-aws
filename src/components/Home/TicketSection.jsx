import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { ticketItems } from "../../static/dashboardItem";
import Notification from "./NotificationSection";

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

const TicketSection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack direction="row" spacing={3} sx={{ my: 3 }}>
      <Box
        sx={{
          width: "100%",
          border: (theme) => `1px solid ${theme.palette.color.border}`,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            paddingTop: "14px",
            px: "14px",
            width: "100%",
            background: (theme) => theme.palette.color.bg2,
            borderBottom: (theme) => `1px solid ${theme.palette.color.border}`,
          }}
        >
          <Box>
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
        </Box>
        <Stack
          sx={{
            height: "360px",
            overflowY: "auto",
          }}
          spacing={1}
        >
          {[0, 1, 2, 3].map((v, index) => (
            <CustomTabPanel value={value} index={index} key={index}>
              <Stack spacing={1}>
                {ticketItems
                  .filter((item) => item.access.includes(value))
                  .map((item, index) => (
                    <Box sx={{ pl: 2 }}>
                      <Notification item={item} selected={true} index={index} />
                    </Box>
                  ))}
              </Stack>
            </CustomTabPanel>
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          border: (theme) => `1px solid ${theme.palette.color.border}`,
          background: (theme) => theme.palette.color.bg2,
          borderRadius: "12px",
        }}
      >
        {[
          { label: "Open Tickets", value: 24 },
          { label: "Open Payout Requests", value: 6 },
          { label: "Accounts Flagged", value: 0 },
        ].map((item, index) => (
          <>
            <Stack
              sx={{
                height: "140px",
                p: "24px",
              }}
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  color: (theme) => theme.palette.color.secondary,
                }}
              >
                <Typography variant="caption">{item.label}</Typography>
                <HelpIcon sx={{ fontSize: "15px" }} />
              </Stack>
              <Typography variant="h1">{item.value}</Typography>
            </Stack>
            {index !== 2 && <Divider />}
          </>
        ))}
      </Box>
    </Stack>
  );
};

export default TicketSection;
