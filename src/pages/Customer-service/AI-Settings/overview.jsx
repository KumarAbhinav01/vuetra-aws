import { Add, ExpandMore, Help } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  InputBase,
  Link,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React from "react";
import { BiLogoDeviantart } from "react-icons/bi";
import { FaBookOpen, FaLink } from "react-icons/fa6";

const StyledInput = styled(InputBase)(({ theme }) => ({
  background: "rgb(14, 16, 17)",
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  color: "white",
  width: "100%",
  input: {
    "&::placeholder": {
      color: "black !important",
    },
  },

  "&:hover": {
    background: "rgb(14, 16, 17)",
  },
}));

const items = [
  {
    title: "Import external content",
    subtitle: "Enter the URL of your external support content.",
    link: "How to add external content to Vue Brain",
    icon: <FaLink size={16} />,
    button: "Add",
    content:
      "Enter the URL of your external support content. We will automatically import all of the pages from the website URL you provide. Provide your external help center homepage link for best results.",
    defaultExpanded: true,
  },
  {
    title: "Use custom content",
    subtitle: "Create your own custom content.",
    link: "How to add external content to Vue Brain",
    icon: <FaBookOpen size={16} />,
    button: "Create",
    content:
      "Create your own custom content. You can create your own content from scratch or import an existing document to Vue Brain.",
  },
  {
    title: "Import content from files",
    subtitle: "Import content from your local files.",
    link: "How to add external content to Vue Brain",
    icon: <FaLink size={16} />,
    button: "Import",
  },
  {
    title: "Use Custom Answers",
    subtitle: "Let Vue Brain learn how you talk and respond to questions",
    link: "How to add external content to Vue Brain",
    icon: <Help size={16} />,
    button: "Create",
  },
  {
    title: "Use your Vuetra Help Center",
    subtitle:
      "Let Vue Brain learn from the support content in your Help Center",
    link: "How to add external content to Vue Brain",
    icon: <Help size={16} />,
    button: "Create",
  },
];

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

const SettingsOverview = () => {
  const [value, setValue] = React.useState(0);
  const [accordion, setAccordion] = React.useState([0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper
      sx={{
        p: "24px",
      }}
    >
      <Typography variant="h4">Overview</Typography>
      <Box
        sx={{
          py: "6px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              background: (theme) => theme.palette.color.blue,
            },
            "& .Mui-selected": {
              color: (theme) => theme.palette.color.blue + " !important",
            },
          }}
        >
          <Tab
            sx={{
              "& .Mui-selected": {
                color: (theme) => theme.palette.color.blue + " !important",
              },
            }}
            label="Add content"
            {...a11yProps(0)}
          />
          <Tab label="Set up and go live" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Stack direction="row" spacing={3} sx={{ my: 3 }}>
        <Stack spacing={2}>
          {items.map((item, index) => (
            <Box
              sx={{
                borderRadius: "6px",
                ...(accordion.includes(index) && {
                  border: (theme) => `1px solid ${theme.palette.color.purple}`,
                }),
              }}
            >
              <Accordion
                defaultExpanded={item.defaultExpanded}
                onChange={() => {
                  if (accordion.includes(index)) {
                    setAccordion(accordion.filter((i) => i !== index));
                  } else {
                    setAccordion([...accordion, index]);
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <FaLink size={16} />
                    <Stack spacing={1}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: (theme) => theme.palette.color.primary,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "13.56px",
                          fontWeight: "500",
                          color: "rgb(138, 150, 166)",
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    </Stack>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        py: "24px",
                        borderTop: (theme) => `1px solid #e8e8e8`,
                        borderBottom: (theme) => `1px solid #e8e8e8`,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13.56px",
                          fontWeight: "500",
                          color: (theme) => theme.palette.color.secondary,
                        }}
                      >
                        {item.content}
                      </Typography>
                    </Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{
                          color: (theme) => theme.palette.color.purple,
                        }}
                      >
                        <FaBookOpen size={16} />
                        <Link
                          sx={{
                            fontSize: "13.56px",
                            fontWeight: "500",
                            color: (theme) => theme.palette.color.purple,
                          }}
                        >
                          {item.link}
                        </Link>
                      </Stack>
                      <Button
                        sx={{
                          background: "#222",
                          color: (theme) => theme.palette.color.bg,
                          borderRadius: "8px",
                          padding: "5px 12px",
                          ":hover": {
                            background: "#222",
                          },
                        }}
                        variant="contained"
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            p: "1px",
                            background: "white",
                            borderRadius: "50%",
                            mr: "4px",
                          }}
                        >
                          <Add
                            sx={{
                              fontSize: "13px",
                              color: "black",
                            }}
                          />
                        </Box>
                        {item.button}
                      </Button>
                    </Stack>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </Stack>
        <Box
          sx={{
            width: "593px",
            height: "550px",
            background: "#131517",
            borderRadius: "16px",
            padding: "12px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              sx={{
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                pr: "24px",
              }}
            >
              <BiLogoDeviantart size={21} />
              <AvatarGroup max={4}>
                <Avatar
                  sx={{ width: 22, height: 22 }}
                  alt="Remy Sharp"
                  src="https://framerusercontent.com/images/PYHFLeJc9dbeNBPcqY0hbFP8A.jpg?scale-down-to=512"
                />
                <Avatar
                  sx={{ width: 22, height: 22 }}
                  alt="Remy Sharp"
                  src="https://framerusercontent.com/images/AJlqffb8Ur1MmMnaZnehIqeyGU.png"
                />
                <Avatar
                  sx={{ width: 22, height: 22 }}
                  alt="Remy Sharp"
                  src="https://framerusercontent.com/images/Y1dP8Sjj3x3ZbVB3aC5thMNK40.png"
                />
              </AvatarGroup>
            </Box>

            <Typography
              sx={{
                color: "white",
                mt: "12px",
                fontSize: "12px",
              }}
            >
              {" "}
              Orders:{" "}
            </Typography>

            <Stack
              spacing={1}
              sx={{
                py: "12px",
              }}
            >
              <Stack
                direction="row"
                sx={{
                  background: "#1a1d20",
                  p: "9px 14px",
                  borderRadius: "8px",
                }}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  sx={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: (theme) => theme.palette.color.green,
                  }}
                ></Box>
                <Typography variant="body3">#10525</Typography>
                <Typography variant="body3">04 Ap 2024</Typography>
                <Typography variant="body3">$595.95</Typography>
                <Typography variant="body3"> Elite 250K</Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  background: "#1a1d20",
                  p: "9px 14px",
                }}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  sx={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: (theme) => theme.palette.color.green,
                  }}
                ></Box>
                <Typography variant="body3">#10525</Typography>
                <Typography variant="body3">04 Ap 2024</Typography>
                <Typography variant="body3">$595.95</Typography>
                <Typography variant="body3"> Elite 250K</Typography>
              </Stack>
            </Stack>
            <Box
              sx={{
                background: (theme) => theme.palette.color.blue,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                p: "12px",
                borderRadius: "12px",
                float: "right",
                gap: 2,
                width: "233px",
                mt: "12px",
              }}
            >
              <Typography variant="subtitle1_500" sx={{ textAlign: "right" }}>
                I want to have a refund for order <br /> number: #10525.
              </Typography>
              <Typography
                variant="subtitle1_500"
                sx={{ textAlign: "right", lineHeight: "18px" }}
              >
                The reason for refund is that I don’t like trading and I feel I
                bought it with excident.
              </Typography>
            </Box>
          </Box>
          <Stack direction="row" alignItems="center" spacing={1}>
            <StyledInput placeholder="/type a command or send..." />
            <Button variant="contained">Send</Button>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default SettingsOverview;
