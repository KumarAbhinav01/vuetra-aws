import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Divider, useTheme } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { ticketItems } from "../../static/dashboardItem";
import Notification from "./Notification";
import MenuIcon from "../Icons/MenuIcon";
import TicketIcon from "../Icons/TicketsIcon";
import AffiliateIcon from "../Icons/AffiliateIcon";
import FlagIcon from "../Icons/FlagIcon";
import PayoutIcon from "../Icons/PayoutsIcon";

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

  const theme = useTheme();
  return (
    <Stack direction="row" spacing={3} sx={{ my: 3 }}>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          border: (theme) => `1px solid ${theme.palette.color.border}`,
          borderRadius: "12px",
          overflow: "hidden",
          background: (theme) => theme.palette.color.bg2,
        }}
      >
        <Box
          sx={{
            paddingTop: "14px",
            px: "14px",
            width: "100%",
            borderBottom: (theme) => `1px solid ${theme.palette.color.border}`,
          }}
        >
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
              sx={{
                ".css-145v6pe-MuiButtonBase-root-MuiTabScrollButton-root.Mui-disabled":
                  {
                    display: "none",
                  },
              }}
            >
              <Tab
                label="All"
                icon={
                  <MenuIcon
                    color={
                      theme.palette.color[value === 0 ? "primary" : "secondary"]
                    }
                  />
                }
                iconPosition="start"
                {...a11yProps(0)}
              />
              <Tab
                label="Tickets"
                icon={
                  <TicketIcon
                    color={
                      theme.palette.color[value === 1 ? "primary" : "secondary"]
                    }
                  />
                }
                iconPosition="start"
                {...a11yProps(1)}
              />
              <Tab
                label="Payouts"
                icon={
                  <PayoutIcon
                    color={
                      theme.palette.color[value === 2 ? "primary" : "secondary"]
                    }
                  />
                }
                iconPosition="start"
                {...a11yProps(2)}
              />
              <Tab
                label="Affiliate"
                icon={
                  <AffiliateIcon
                    color={
                      theme.palette.color[value === 3 ? "primary" : "secondary"]
                    }
                  />
                }
                iconPosition="start"
                {...a11yProps(3)}
              />
              <Tab
                label="Flagged Profiles"
                icon={
                  <FlagIcon
                    color={
                      theme.palette.color[value === 4 ? "primary" : "secondary"]
                    }
                  />
                }
                iconPosition="start"
                {...a11yProps(3)}
              />
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
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "100%",
            height: "74px",
            background: (theme) =>
              `linear-gradient(180deg, rgba(11, 13, 15, 0) 0%, ${theme.palette.color.bg2} 100%)`,
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          border: (theme) => `1px solid ${theme.palette.color.border}`,
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
