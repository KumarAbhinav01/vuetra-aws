import {
  Box,
  Button,
  Drawer,
  IconButton,
  Paper,
  Stack,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";
import { FaRegPenToSquare, FaRss } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import {
  MdChatBubble,
  MdChatBubbleOutline,
  MdOutlineChatBubble,
} from "react-icons/md";
import FormInput from "../../ui/FormInput";
import { ChevronRight } from "@mui/icons-material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ height: "100%" }}
      {...other}
    >
      {value === index && // <Box sx={{ py: 3 }}>
        //   <Typography>{children}</Typography>
        // </Box>
        children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Chat() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [hoveredChat, setHoveredChat] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Tooltip title="AI Assistant" placement="right">
        <Box
          sx={{
            display: "flex",
            color: (theme) => theme.palette.color.secondary,
            p: "12px",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          <MdChatBubble size={18} />
        </Box>
      </Tooltip>
      <Drawer
        open={open}
        onClose={handleClose}
        anchor="left"
        sx={{
          "& .MuiDrawer-paper": {
            borderRadius: "0",
            boxShadow: "0px 12px 1px -7px rgba(41, 41, 41, .14)",
          },
        }}
      >
        <Paper
          sx={{
            width: "591px",
            height: "100vh",
            overflow: "hidden",
            background: (theme) => theme.palette.color.paper,
            p: " 12px",
          }}
        >
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
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: (theme) => theme.palette.color.blue,
                },
              }}
              variant="fullWidth"
            >
              <Tab
                label="Assistant"
                {...a11yProps(0)}
                icon={<FaRegPenToSquare size={18} />}
                iconPosition="start"
                sx={{
                  fontSize: "14px !important",
                }}
              />
              <Tab
                label="Chats"
                {...a11yProps(1)}
                icon={<MdChatBubbleOutline size={18} />}
                iconPosition="start"
                sx={{
                  fontSize: "14px !important",
                  height: "60px !important",
                }}
              />
              <Tab
                label="Help center"
                {...a11yProps(2)}
                icon={<IoBookOutline size={18} />}
                iconPosition="start"
                sx={{
                  fontSize: "14px !important",
                }}
              />
              <Tab
                label="News"
                {...a11yProps(3)}
                iconPosition="start"
                sx={{
                  fontSize: "14px !important",
                }}
                icon={<FaRss size={18} />}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Stack sx={{ height: "85%" }} justifyContent="center">
              <Stack spacing={1}>
                <Typography variant="h2" sx={{ fontWeight: "600" }}>
                  Ask anything
                </Typography>
                <Typography variant="subtitle2_500">
                  You can get help here, powered by artificial intelligence.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ width: "fit-content", fontSize: "12px" }}
                >
                  Explore Prompts
                </Button>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <FormInput
                sx={{
                  width: "100%",
                  background: (theme) => theme.palette.color.bg2,
                  border: "none",
                  ":focus": {
                    border: "none",
                    outline: "none",
                  },
                  ":focus-within": {
                    border: "none",
                    outline: "none",
                  },
                }}
                placeholder="Ask me anything"
              />
              <IconButton
                sx={{
                  borderRadius: "10px",
                  background: (theme) => theme.palette.color.blue,
                  color: "black",
                  ":hover": {
                    background: (theme) => theme.palette.color.blue,
                  },

                  px: "18px",
                }}
              >
                <MdOutlineChatBubble size={24} />
              </IconButton>
            </Stack>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Stack sx={{ height: "85%", py: "24px" }} spacing={5}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  onMouseEnter={() => setHoveredChat(index)}
                  onMouseLeave={() => setHoveredChat(null)}
                >
                  <Stack
                    spacing={1.5}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      ":hover": {
                        opacity: 0.35,
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography variant="h4">Title</Typography>
                      <Typography variant="body3">• 1h ago</Typography>
                    </Stack>
                    <Typography variant="caption_500">
                      Everything you need to know to get started
                    </Typography>
                  </Stack>
                  <ChevronRight
                    sx={{
                      color: (theme) => theme.palette.color.green,
                      opacity: index === hoveredChat ? 1 : 0,
                      transition: "all 0.3s",
                    }}
                  />
                </Stack>
              ))}
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button
                sx={{
                  background: (theme) =>
                    alpha(theme.palette.color.secondary, 0.15),
                  color: (theme) => theme.palette.color.primary,
                  ":hover": {
                    background: (theme) =>
                      alpha(theme.palette.color.secondary, 0.2),
                  },
                }}
                variant="contained"
                color="info"
                fullWidth
              >
                Clear chats
              </Button>
              <Button variant="contained" fullWidth>
                New chat
              </Button>
            </Stack>
          </CustomTabPanel>
        </Paper>
      </Drawer>
    </div>
  );
}
