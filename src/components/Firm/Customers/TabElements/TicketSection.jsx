import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button, Divider, IconButton, alpha } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { ticketItems } from "../../../../static/dashboardItem";

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
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
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
              <Stack spacing={4}>
                {ticketItems
                  .filter((item) => item.access.includes(value))
                  .map((item, index) => (
                    <Notification item={item} selected={true} index={index} />
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

const Notification = ({ item, selected, index }) => {
  return (
    <Box
      key={index}
      sx={{
        transition: "all 1000ms ease-in-out",
        transform: selected ? "none" : "translateX(0) translateY(64px)",
        overflow: selected ? "visible" : "hidden",
        pl: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: 2,
        }}
      >
        <IconButton
          sx={{
            p: 0.9,
            borderRadius: "50%",
            height: "fit-content",
            backgroundColor: (theme) => alpha(theme.palette.color.blue, 0.17),
            color: (theme) => theme.palette.color.blue,
          }}
        >
          <item.icon size={16} />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box
              sx={{
                p: 0.5,
                w: "fit-content",
                h: "fit-content",
                alignSelf: "start",
                // mt: 1,
                my: "auto",
                borderRadius: "50%",
                backgroundColor: (theme) => theme.palette.color.yellow,
              }}
            />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "11.5px",
                lineHeight: "20px",
                color: (theme) => theme.palette.color.secondary,
                "& span": {
                  mx: 0.5,
                  color: (theme) => theme.palette.color.primary,
                },
              }}
            >
              {item.name && (
                <span>
                  {item.name} {"  "}
                </span>
              )}{" "}
              {item.message1}
              {"  "}
              <span>{item.account}</span> {item.message2}
            </Typography>
          </Box>
          <Typography
            variant="caption"
            sx={{
              fontSize: "11px",
              "& span": {
                mr: 1,
                fontSize: "12px",
              },
            }}
          >
            <span>•</span> {item.time}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            {item.buttons.map((button, index) => (
              <Button
                key={index}
                sx={{
                  padding: "4px 10px",
                  fontSize: "11px",
                  fontWeight: 600,
                  transition: "all 500ms ease-in-out",
                  borderRadius: "sm",
                  outline: "none",
                  opacity: 1,
                  "&:hover": {
                    opacity: 0.35,
                  },
                  ...(button.color === "blue" && {
                    color: (theme) => theme.palette.color.blue,
                    backgroundColor: (theme) =>
                      alpha(theme.palette.color.blue, 0.1),
                  }),
                  ...(button.color === "gray" && {
                    color: (theme) => theme.palette.color.secondary,
                    backgroundColor: (theme) =>
                      alpha(theme.palette.color.secondary, 0.1),
                  }),
                  ...(button.color === "red" && {
                    color: (theme) => theme.palette.color.red,
                    backgroundColor: (theme) =>
                      alpha(theme.palette.color.red, 0.1),
                  }),
                }}
              >
                {button.text}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
