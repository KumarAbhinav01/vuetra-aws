import React, { useState } from "react";
import Box from "@mui/material/Box";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import FormInput from "../../../ui/FormInput";
import CustomAccordion from "../../../ui/CustomAccordion";
import Add from "@mui/icons-material/Add";
import { Done } from "@mui/icons-material";
import FormSelect from "../../../ui/FormSelect1";

const VisuallyHiddenInput = styled("input")({
  height: "100%",
  position: "absolute",
  width: "100%",
  opacity: 0,
  top: 0,
  left: 0,
  cursor: "pointer",
  // display: "none",
});

const General = () => {
  const [pricing, setPricing] = useState("single");
  const [platforms, setPlatforms] = useState(["vuetra", "ctrader"]);
  const [accountSizes, setAccountSizes] = useState([10, 25, 50, 100, 250, 500]);
  const [certificateLayout, setCertificateLayout] = useState("layout1");
  return (
    <Stack sx={{ px: "24px", py: "12px" }} spacing={0}>
      <CustomAccordion title={"General"}>
        <Stack spacing={4}>
          <FormInput
            label="Name *"
            placeHolder="Enter Product Name"
            helperTexts={[
              "Give your product a short and clear name.",
              "50-60 characters is the recommended length for search engines.",
            ]}
          />
          <FormInput label="Description" placeHolder="Enter description" />
        </Stack>
      </CustomAccordion>
      <CustomAccordion
        title={
          <>
            {" "}
            Product Image <span>(not visible for clients)</span>
          </>
        }
      >
        <Stack
          spacing={1}
          alignItems="center"
          sx={{
            py: "33px",
            position: "relative",
            width: "100%",
            border: (theme) => `1px dashed ${theme.palette.color.border}`,
            cursor: "pointer",
          }}
        >
          <Add />
          <Typography
            sx={{
              fontSize: "14px",
              color: (theme) => theme.palette.color.primary,
            }}
          >
            Drop your images here, or click to browse
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              color: (theme) => theme.palette.color.secondary,
            }}
          >
            1600 x 1200 (4:3) recommended, up to 10MB each.
          </Typography>
          <VisuallyHiddenInput type="file" />
        </Stack>
      </CustomAccordion>
      <CustomAccordion title={"Pricing"}>
        <Grid container spacing={2}>
          {[
            {
              title: "Single Payment",
              value: "single",
              description: "Charge a one-time fee",
            },
            {
              title: "Subscription",
              value: "subscription",
              description: "Charge an ongoing fee",
            },
          ].map((item) => (
            <Grid item xs={6}>
              <Stack
                onClick={() => setPricing(item.value)}
                sx={{
                  width: "100%",
                  padding: "18px",
                  border: (theme) =>
                    `1px solid ${
                      item.value === pricing
                        ? theme.palette.color.blue1
                        : "transparent"
                    }`,
                  borderRadius: "10px",
                  background: (theme) =>
                    item.value === pricing
                      ? alpha(theme.palette.color.blue1, 0.05)
                      : "transparent",
                  gap: item.value === pricing ? "14px" : "2px",
                  height: "130px",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                }}
                // spacing={2}
              >
                <Typography variant="heading">{item.title}</Typography>
                <Typography sx={{ fontWeight: "500" }} variant="caption">
                  {item.description}
                </Typography>
                {item.value === pricing && (
                  <Box
                    sx={{
                      background: (theme) => theme.palette.color.button,
                      borderRadius: "50%",
                      padding: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "fit-content",
                    }}
                  >
                    <Done sx={{ fontSize: "14px" }} />
                  </Box>
                )}
              </Stack>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="caption" sx={{ fontWeight: "400" }}>
              Choose your desired account sizes, and the trading objectives will
              be automatically applied across all selected sizes. You will have
              the option to make individual edits to each account later in the
              process.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={1}>
              <Typography variant="caption" sx={{ fontWeight: "400" }}>
                Need some guidiance?
              </Typography>
              <Link
                href="#"
                variant="caption"
                sx={{
                  fontWeight: "400",
                  color: (theme) => theme.palette.color.blue,
                }}
              >
                Help{" "}
                <NorthEastIcon
                  sx={{ fontSize: "13px", mb: "-3px", ml: "-5px" }}
                />
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </CustomAccordion>
      <CustomAccordion title={"Platforms"}>
        <Grid container spacing={2}>
          {[
            {
              title: "Vuetra",
              value: "vuetra",
            },
            {
              title: "CTrader",
              value: "ctrader",
            },
            {
              title: "Tradelocker",
              value: "tradelocker",
            },
            {
              title: "Matchtrade",
              value: "matchtrade",
            },
          ].map((item) => (
            <Grid item xs={6}>
              <Stack
                onClick={() =>
                  setPlatforms((prev) => {
                    if (prev.includes(item.value)) {
                      return prev.filter((platform) => platform !== item.value);
                    } else {
                      return [...prev, item.value];
                    }
                  })
                }
                sx={{
                  width: "100%",
                  padding: "18px",
                  border: (theme) =>
                    `1px solid ${
                      platforms.includes(item.value)
                        ? theme.palette.color.blue1
                        : "transparent"
                    }`,
                  borderRadius: "10px",
                  background: (theme) =>
                    platforms.includes(item.value)
                      ? alpha(theme.palette.color.blue1, 0.05)
                      : "transparent",
                  gap: platforms.includes(item.value) ? "14px" : "2px",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                }}
                // spacing={2}
              >
                <Typography variant="heading">{item.title}</Typography>
                {platforms.includes(item.value) && (
                  <Box
                    sx={{
                      background: (theme) => theme.palette.color.button,
                      borderRadius: "50%",
                      padding: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "fit-content",
                    }}
                  >
                    <Done sx={{ fontSize: "14px" }} />
                  </Box>
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </CustomAccordion>
      <CustomAccordion title={"Accout sizes"}>
        <Stack spacing={2}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {[
              { label: "10K", value: 10 },
              { label: "25K", value: 25 },
              { label: "50K", value: 50 },
              { label: "100K", value: 100 },
              { label: "250K", value: 250 },
              { label: "500K", value: 500 },
            ].map((item) => (
              <FormControlLabel
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "13px !important",
                    fontWeight: "500",
                    color: (theme) => theme.palette.color.secondary,
                  },
                }}
                control={
                  <Checkbox
                    checked={accountSizes.includes(item.value)}
                    onChange={() =>
                      setAccountSizes((prev) => {
                        if (prev.includes(item.value)) {
                          return prev.filter((size) => size !== item.value);
                        }
                        return [...prev, item.value];
                      })
                    }
                    sx={{
                      "&.Mui-checked": {
                        color: (theme) => theme.palette.color.green,
                      },
                    }}
                  />
                }
                label={item.label}
              />
            ))}
          </Box>
          <Typography variant="caption" sx={{ fontWeight: "400" }}>
            Choose your desired account sizes, and the trading objectives will
            be automatically applied across all selected sizes. You will have
            the option to make individual edits to each account later in the
            process.
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: (theme) => theme.palette.color.button,
              color: (theme) => theme.palette.color.darkText,
              fontWeight: "500",

              ":hover": {
                background: (theme) => theme.palette.color.button,
                color: (theme) => theme.palette.color.darkText,
              },
            }}
          >
            Custom Acc. Size
          </Button>
        </Stack>
      </CustomAccordion>
      <CustomAccordion title={"Certificate"}>
        <Stack spacing={2}>
          <FormSelect
            label="Certificate Layout"
            options={[
              { label: "Layout 1", value: "layout1" },
              { label: "Layout 2", value: "layout2" },
              { label: "Layout 3", value: "layout3" },
            ]}
            value={certificateLayout}
            onChange={(e) => setCertificateLayout(e.target.value)}
            helperTexts={[
              " Choose the layout for your certificate, and the content will automatically adjust to highlight the trader's performance.You can edit your certificate here.",
            ]}
            fullWidth
            sx={{
              fontSize: "14px",
            }}
            placeholder="Select Certificate Layout"
          />
          {/* <Typography variant="caption" sx={{ fontWeight: "400" }}>
                    Choose the layout for your certificate, and the content will
                    automatically adjust to highlight the trader's performance.
                    You can edit your certificate here.
                  </Typography> */}
        </Stack>
      </CustomAccordion>
    </Stack>
  );
};

export default General;
