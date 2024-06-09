import Search from "@mui/icons-material/Search";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FormSwitch from "../../../components/ui/FormSwitch";
import { BiChevronDown } from "react-icons/bi";
import CustomerDetails from "../../../components/Customer-service/Conversations/CustomerDetails";
import AiAssistant from "../../../components/Customer-service/Conversations/AiAssistant";
import ClientConversation from "../../../components/Customer-service/Conversations/ClientConversation";

const customerData = {
  verified: true,
  platform: 'Dashboard',
  firstName: 'Jens',
  lastName: 'van der Blij',
  country: 'Netherlands',
  city: 'Hardenberg',
  zip: '7772NM',
  email: 'sales@vuetra.com',
  phone: '+3160000000',
  timezone: '+1 CET',
  activeAccounts: 1,
  kyc: 'Successful',
};

const Conversations = () => {
  return (
    <Box
      sx={{
        display: "flex",
        borderLeft: (theme) => `1px solid ${theme.palette.color.border}`,
      }}
    >
      <Paper
        sx={{
          width: "236px",
          height: "100vh",
          background: (theme) => theme.palette.background.default,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            p: "12px",
            height: "60px",
            borderBottom: (theme) => `1px solid ${theme.palette.color.border}`,
          }}
        >
          <Typography variant="h4">Client name</Typography>
          <Search
            sx={{
              color: (theme) => theme.palette.color.secondary,
              fontSize: "16px",
            }}
          />
        </Stack>
        <Stack sx={{ p: "12px" }}>
          <FormSwitch
            label="Customer details"
            flex={"row"}
            labelsx={{
              fontSize: "13px",
              fontWeight: "500",
              color: (theme) => theme.palette.color.secondary + " !important",
            }}
          />
          <FormSwitch
            label="AI Assistant"
            flex={"row"}
            labelsx={{
              fontSize: "13px",
              fontWeight: "500",
              color: (theme) => theme.palette.color.secondary + " !important",
            }}
          />
          <FormSwitch
            label="Client conversation"
            flex={"row"}
            labelsx={{
              fontSize: "13px",
              fontWeight: "500",
              color: (theme) => theme.palette.color.secondary + " !important",
            }}
          />
          <Divider
            sx={{
              my: "6px",
            }}
          />

          <FormSwitch
            label="Sync chats"
            flex={"row"}
            labelsx={{
              fontSize: "13px",
              fontWeight: "500",
              color: (theme) => theme.palette.color.secondary + " !important",
            }}
          />
          <Divider
            sx={{
              my: "6px",
            }}
          />
        </Stack>
        <Accordion
          defaultExpanded={true}
          sx={{
            ":before": { display: "none" },
            "& .Mui-expanded": {
              margin: "0px !important",
              minHeight: "0 !important",
            },
            "& .MuiPaper-root": {},

            // marginBottom: "0px !important",
            background: "transparent",
          }}
        >
          <AccordionSummary expandIcon={<BiChevronDown size={18} />}>
            <Typography variant="subtitle1_500">
              Previous conversations
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              spacing={3}
              sx={{
                pt: "12px",
              }}
            >
              {[
                {
                  title: "Conversation",
                  user: "@jens",
                  time: "Today",
                  color: "yellow",
                },
                {
                  title: "Conversation",
                  user: "@AI",
                  time: "Today",
                  color: "red",
                },
                {
                  title: "Conversation",
                  user: "@AI",
                  time: "Today",
                  color: "green",
                },
              ].map((item) => (
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Box
                        sx={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: (theme) =>
                            theme.palette.color[item.color],
                        }}
                      ></Box>
                      <Typography variant="caption_500">
                        {item.title}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{
                        ml: "12px !important",
                      }}
                    >
                      {item.user}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ fontWeight: "500" }}>
                    {item.time}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>

        
        <Button
            variant="contained"
            sx={{
                position: 'fixed',
                bottom: '20px',
                mx: '12px',
                px: '50px',
                backgroundColor: '#F6F9FA',
                color: '#9CA3AF',
                borderRadius: '8px',
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                    backgroundColor: '#F6F9FA',
                    boxShadow: 'none',
                },
                '&:active': {
                    boxShadow: 'none',
                },
                '&:focus': {
                    boxShadow: 'none',
                },
            }}
        >
            Close ticket
        </Button>
      </Paper>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          maxHeight: "100vh",
          overflowY: "auto",
          width: "100%",
        }}
      >
          <Box flex={3}>
            <ClientConversation />
          </Box>
          <Box flex={3}>
            <AiAssistant />
          </Box>
          <Box flex={2}>
            <CustomerDetails customer={customerData}/>
          </Box>


      </Box>
    </Box>
  );
};

export default Conversations;
