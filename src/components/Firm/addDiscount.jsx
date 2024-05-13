import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

// import { toggleOpen } from "../../../../";
import {
  Button,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import FormInput from "../ui/FormInput";
import CustomAccordion from "../ui/CustomAccordion";
import FormSwitch from "../ui/FormSwitch";
import { toggleOpen } from "../../slices/openModalSlice";
import FormRadio from "../ui/Radio";

const AddDiscount = () => {
  const { open } = useSelector((state) => state.openModal);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Drawer
        sx={
          {
            // borderRadius: "14px 0 14px 0",
            // overflow: "hidden",
          }
        }
        open={open}
        onClose={() => dispatch(toggleOpen())}
        anchor="right"
      >
        <Paper
          sx={{
            width: "644px",
            height: "100vh",
            overflow: "hidden",
            background: (theme) => theme.palette.color.bg,
          }}
        >
          <Box
            sx={{
              height: "calc(100vh - 80px)",
              overflowY: "auto",
              padding: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "500" }}>
                Add Discount
              </Typography>
              <IconButton onClick={() => dispatch(toggleOpen())}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Stack direction="row" spacing={1} sx={{ my: "24px" }}>
              <Typography variant="heading" sx={{ fontWeight: "400" }}>
                Create a discount code for all or some of your products
              </Typography>
              <Link
                href="#"
                variant="heading"
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

            <Stack spacing={3}>
              <FormInput
                label="Name"
                placeholder="Enter Name"
                helperTexts={["This will appear on your customer’s invoice"]}
              />
              <FormInput label="Code" placeholder="Enter code" />
              <FormInput
                label="Amount"
                placeholder="Enter amount"
                type="number"
              />
              <FormRadio
                options={[
                  { value: "percentage", label: "Percentage" },
                  { value: "fixed", label: "Fixed" },
                ]}
              />
              <CustomAccordion title="Products">
                <FormSwitch
                  label="Discount applies to specific products or account sizes?"
                  flex
                  helperTexts={[
                    "Select which product(s) the discount applies to. Discounts apply to all products if left unchecked.",
                  ]}
                />
              </CustomAccordion>
              <CustomAccordion title="Settings">
                <Stack spacing={2}>
                  <FormSwitch
                    label="Discount has a start date?"
                    flex
                    helperTexts={[
                      "Schedule the discount to activate in the future",
                    ]}
                  />
                  <FormSwitch label="Discount has an expiry date?" flex />
                </Stack>
              </CustomAccordion>
            </Stack>
          </Box>
          <Grid
            container
            spacing={1}
            sx={{
              padding: "16px 32px",
              background: (theme) => theme.palette.color.bg4,
              position: "sticky",
              height: "80px",
              bottom: 0,
            }}
          >
            <Grid item xs={4}>
              <Button
                fullWidth
                sx={{
                  background: (theme) =>
                    alpha(theme.palette.color.secondary, 0.15),
                  color: (theme) => theme.palette.color.primary,
                  borderRadius: "9px",
                  ":hover": {
                    background: (theme) =>
                      alpha(theme.palette.color.secondary, 0.15),
                  },
                }}
                onClick={() => {
                  dispatch(toggleOpen());
                }}
              >
                Save as Draft
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button
                fullWidth
                sx={{ width: "100%", borderRadius: "9px" }}
                variant="contained"
              >
                Publish Discount
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Drawer>
    </React.Fragment>
  );
};

export default AddDiscount;
