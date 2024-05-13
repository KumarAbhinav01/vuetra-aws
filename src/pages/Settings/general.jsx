import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import FormInput from "../../components/ui/FormInput";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FormSelect from "../../components/ui/FormSelect1";
import CustomSwitch from "../../components/ui/Switch";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const General = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "24px",
          py: "7px",
        }}
      >
        <Typography variant="h5" sx={{ m: "3", mb: "0" }}>
          Store settings
        </Typography>
        <Button variant="contained">Save</Button>
      </Box>

      <Divider />
      <Box
        sx={{
          p: "24px",
        }}
      >
        <Grid container spacing={2} rowSpacing={3}>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: (theme) => theme.palette.color.green,
                  color: (theme) => theme.palette.color.primary,
                  fontWeight: "600",
                  fontSize: "28.5px",
                  padding: "10px",
                  width: "50px",
                  height: "50px",
                }}
              >
                J
              </Avatar>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                sx={{
                  background: (theme) => theme.palette.color.bg4,
                  ":hover": {
                    background: (theme) => theme.palette.color.bg2,
                  },
                  color: (theme) => theme.palette.color.primary,
                  height: "fit-content",
                }}
              >
                Choose
                <VisuallyHiddenInput type="file" />
              </Button>
              <Typography variant="caption">
                JPG, GIF or PNG. 1MB Max.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <Typography variant="heading">Store name *</Typography>
              <Typography variant="caption" sx={{ fontWeight: "500" }}>
                Appears on receipts, invoices, and more
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInput placeholder="Enter store name" defaultValue="Vuetra" />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <Typography variant="heading">Store URL *</Typography>
              <Typography variant="caption" sx={{ fontWeight: "500" }}>
                Your store is visible at this address
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInput
              placeholder="Enter store url"
              defaultValue="www.yourdomain.com"
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <Typography variant="heading">Contact email *</Typography>
              <Typography variant="caption" sx={{ fontWeight: "500" }}>
                Where customers can contact you for support. Appears on receipts
                and invoices.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormInput
              startAdornment={
                <InputAdornment position="end">
                  <MailOutlineIcon
                    sx={{
                      fontSize: "18px",
                    }}
                  />
                </InputAdornment>
              }
              placeholder="Enter contact email"
              defaultValue="info@vuetra.com"
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <Typography variant="heading">Country *</Typography>
              <Typography variant="caption" sx={{ fontWeight: "500" }}>
                Where your business is registered
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormSelect
              placeholder="Select country"
              defaultValue="Netherlands"
              options={[
                { value: "Netherlands", label: "Netherlands" },
                { value: "Germany", label: "Germany" },
                { value: "France", label: "France" },
              ]}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <Typography variant="heading">Currency *</Typography>
              <Typography variant="caption" sx={{ fontWeight: "500" }}>
                Your store's main currency
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormSelect
              placeholder="Select currency"
              defaultValue="euro"
              options={[
                { value: "euro", label: "EUR - Euro" },
                { value: "usd", label: "USD - US Dollar" },
              ]}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <Typography variant="heading">Tax-inclusive pricing</Typography>
              <Typography
                variant="caption"
                sx={{ fontWeight: "500", width: "90%" }}
              >
                Should prices include sales tax and be deducted from the total,
                or calculated separately and charged on top? · Help↗
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <CustomSwitch />
              <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                Enable tax-inclusive pricing
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <Typography variant="heading">Apple Pay</Typography>
              <Typography
                variant="caption"
                sx={{ fontWeight: "500", width: "90%" }}
              >
                Allow customers to pay using Apple Pay
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <CustomSwitch />
              <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                Accept Apple Pay payments
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <Typography variant="heading">Google Pay</Typography>
              <Typography
                variant="caption"
                sx={{ fontWeight: "500", width: "90%" }}
              >
                Allow customers to pay using Google Pay
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <CustomSwitch />
              <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                Accept Google Pay payments
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <Typography variant="heading">
                Subscription renewal emails
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontWeight: "500", width: "90%" }}
              >
                Send customers email receipts for subscription payments
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <CustomSwitch />
              <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                Enable subscription renewal emails
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default General;
