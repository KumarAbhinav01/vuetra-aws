import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Tooltip,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";
import InfoBox from "../../components/ui/InfoBox";
import FormSelect from "../../components/ui/FormSelect1";
import FormInput from "../../components/ui/FormInput";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import HelpIcon from "@mui/icons-material/Help";
import { TbRectangleFilled } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { FaRegFlag, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RxCursorArrow } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";

const items = [
  {
    title: "Open Payouts",
    value: "$10,500.15",
    tooltip: "Total amount due affiliate payouts",
  },
  {
    title: "Review commissions",
    value: "145",
    tooltip: "Amount of conversions that needs to be reviewed",
  },
  {
    title: "Review affiliates",
    value: "10",
    tooltip: "The % of conversions",
  },
  {
    title: "Active affiliates",
    value: "1,305",
    tooltip: "Total amount of affiliates in your network",
  },
  {
    title: "Total conversions",
    value: "145",
    tooltip: "Amount of conversions",
  },
  {
    title: "Conversion rate",
    value: "22.5%",
    tooltip: "The % of conversions",
  },
];

const data = [
  {
    name: "Ara K.",
    type: "new",
    action: "click",
    on: "on {affiliate program}",
    time: "1h ago",
    icon: RxCursorArrow,
  },
  {
    name: "Johny W. ",
    type: "joined your",
    on: "{affiliate program}",
    time: "1h ago",
    icon: IoPersonOutline,
  },
  {
    name: "Johny W.",
    type: "new conversion of",
    green: "${amount}",
    time: "1h ago",
    icon: FaRegFlag,
  },
  {
    name: "Johny W.",
    type: "new customer",
    time: "1h ago",
    icon: IoPersonOutline,
  },
];

const Overview = () => {
  return (
    <Box
      sx={{
        p: "24px",
      }}
    >
      <Grid container spacing={0}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <InfoBox item={item} index={index} indices={[0, 1, 3, 4]} />
            <Divider />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} sx={{ my: "12px" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: "12px",
              height: "420px",
              border: (theme) => `1px solid ${theme.palette.color.border}`,
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="subtitle1">Share sign up</Typography>
              <Typography
                variant="caption"
                sx={{ fontWeight: "500", my: "8px" }}
              >
                Share your affiliate sign up page on your own website (e.g. in
                your footer), your email signature, or add it to your upcoming
                newsletter. You could even add it to your order confirmation
                email!
              </Typography>
              <FormSelect
                options={[
                  { value: "1", label: "Program 1" },
                  { value: "2", label: "Program 2" },
                  { value: "3", label: "Program 3" },
                ]}
                defaultValue="1"
                fullWidth
              />
              <FormInput
                defaultValue="https://www.example.com/affiliate-sign-up"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <ContentCopyIcon
                        sx={{
                          fontSize: "16px",
                          color: (theme) => theme.palette.color.secondary,
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
            <Stack direction="row" spacing={3}>
              {[
                { icon: TbRectangleFilled },
                {
                  icon: FiInstagram,
                },
                {
                  icon: FaXTwitter,
                },
                {
                  icon: FaLinkedin,
                },
              ].map((item, index) => (
                <IconButton key={index}>
                  <item.icon size={22} />
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "420px",
              background: (theme) => theme.palette.color.bg2,
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                p: "12px",
                pt: "24px",
              }}
            >
              <Typography variant="caption">Recent activity</Typography>
              <Tooltip
                title="Amount of unresolved open tickets"
                placement="top"
              >
                <HelpIcon
                  sx={{
                    fontSize: "15px",
                    color: (theme) => theme.palette.color.secondary,
                  }}
                />
              </Tooltip>
            </Stack>
            <Stack
              sx={{
                py: "12px",
              }}
            >
              {data.map((d) => (
                <Box sx={{ display: "flex", gap: "14px", p: "10px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                      background: (theme) =>
                        alpha(theme.palette.color.lightText, 0.17),
                      borderRadius: "50%",
                      height: "fit-content",
                    }}
                  >
                    <d.icon size={18} />
                  </Box>

                  <Stack spacing={1}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "500",
                        "& span": {
                          color: (theme) => theme.palette.color.secondary,
                        },
                        "& span:nth-of-type(3)": {
                          color: (theme) => theme.palette.color.green,
                        },
                      }}
                    >
                      {d.name} <span>{d.type}</span> {d.action}{" "}
                      <span>{d.on}</span>
                      <span>{d.green}</span>
                    </Typography>
                    <Typography variant="body3">• {d.time}</Typography>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
