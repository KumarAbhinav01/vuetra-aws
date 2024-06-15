import {
  Box,
  Divider,
  InputBase,
  Modal,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import Search from "@mui/icons-material/Search";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "512px",
  border: (theme) => `1px solid ${theme.palette.color.border}`,
  background: (theme) => theme.palette.color.bg,
  borderRadius: "5px",
  p: "14px 24px",
  maxHeight: "386px",
  overflowY: "auto",
};

const StyledInput = styled(InputBase)({
  border: 0,
  outline: "none",
  backgroundColor: "transparent",
  fontSize: "16px",
  fontWeight: 500,

  "&::placeholder": {
    color: "inherit",
    fontSize: "16px",
    fontWeight: 500,
  },
  "& input": {
    fontSize: "16px",
    fontWeight: 500,
    color: "inherit",
  },
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const items = [
  {
    title: "Create announcement",
    shortcut: "Use + to quickly create an announcement",
  },
  {
    title: "Create coupon",
    shortcut: "Use $ to quickly create a coupon",
  },
  {
    title: "Find Client",
    shortcut: "Use /client to search or @ to direct search",
  },
  {
    title: "Find Trading account",
    shortcut: "Use /account to search or # to direct search",
  },
  {
    title: "Find Ticket",
    shortcut: "Use /ticket to search or & to direct search",
  },
];

export default function SearchSection() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Search
        sx={{
          fontSize: "22px",
        }}
        onClick={handleOpen}
      />

      <Modal open={open} onClose={handleClose}>
        <Paper sx={style}>
          <Box
            sx={{
              fontSize: "10px",
            }}
          >
            <StyledInput
              placeholder="/Search and run a command"
              sx={{
                color: (theme) => theme.palette.color.secondary,
              }}
            />
          </Box>
          <Box
            sx={{
              py: "12px",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  height: "1px",
                  width: "fit-content",
                },
              }}
            >
              <Tab
                sx={{ padding: "0px 12px" }}
                label="All"
                iconPosition="start"
                {...a11yProps(0)}
              />
              <Tab label="Tickets" iconPosition="start" {...a11yProps(1)} />
              <Tab label="Payouts" iconPosition="start" {...a11yProps(2)} />
              <Tab
                label="Flagged Profiles"
                iconPosition="start"
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ py: "8px" }}
          >
            <Typography variant="caption_500">Action</Typography>
            <Typography variant="caption_500">Shortcut</Typography>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Stack spacing={4} sx={{ mb: 2 }}>
            {items.map((item, index) => (
              <Stack spacing={1.5}>
                <Typography
                  variant="subtitle1_500"
                  sx={{
                    color: (theme) => theme.palette.color.tertiary,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant="caption_500">{item.shortcut}</Typography>
              </Stack>
            ))}
          </Stack>
        </Paper>
      </Modal>
    </div>
  );
}
