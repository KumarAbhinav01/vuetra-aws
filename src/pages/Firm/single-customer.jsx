import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { BsSquareHalf } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import ActivitiesSection from "../../components/Firm/Customers/ActivitySection";
import TabsSection from "../../components/Firm/Customers/TabsSection";

const customerDetails = [
  { label: "First name", value: "Jens" },
  { label: "Last name", value: "van der Blij" },
  { label: "Country", value: "Netherlands" },
  { label: "City", value: "Amsterdam" },
  { label: "ZIP", value: "1012" },
  { label: "Email", value: "sales@vuetra.com" },
  { label: "Phone", value: "+31 6 12345678" },
  { label: "Timezone", value: "GMT+1" },
  { label: "Active accounts", value: "1" },
];

const SingleCustomer = () => {
  return (
    <Stack direction="row">
      <Box
        sx={{
          background: (theme) => theme.palette.color.bg2,
          width: "347px",
          px: 3,
          py: 2,
        }}
      >
        <Stack spacing={1.5}>
          <Typography variant="subtitle2">Client</Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={1}
              sx={{ color: (theme) => theme.palette.color.secondary }}
            >
              <BsSquareHalf size={10} />
              <Typography variant="subtitle1">Customer Name</Typography>
            </Stack>
            <IconButton
              sx={{ color: (theme) => theme.palette.color.secondary }}
            >
              <FiMoreVertical size={18} />
            </IconButton>
          </Stack>
          <Stack spacing={1.5}>
            {customerDetails.map((item, index) => (
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2">{item.label}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: (theme) => theme.palette.color.primary,
                  }}
                >
                  {item.value}
                </Typography>
              </Stack>
            ))}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2">KYC</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  sx={{
                    background: (theme) => theme.palette.color.green,
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                  }}
                ></Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: (theme) => theme.palette.color.green,
                  }}
                >
                  Successful
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider sx={{ my: 3 }} />
        <Stack spacing={1}>
          <Typography variant="subtitle1">Activities</Typography>
          <ActivitiesSection />
        </Stack>
      </Box>
      <TabsSection />
    </Stack>
  );
};

export default SingleCustomer;
