import React from "react";

import {
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";

import HelpIcon from "@mui/icons-material/Help";
import PercentIcon from "@mui/icons-material/Percent";
import CustomAccordion from "../../../ui/CustomAccordion";
import FormInput from "../../../ui/FormInput";
import FormSwitch from "../../../ui/FormSwitch";
import FormSelect from "../../../ui/FormSelect1";
import CustomSwitch from "../../../ui/Switch";

const Payouts = () => {
  return (
    <Stack sx={{ px: "24px", py: "12px" }} spacing={0}>
      <CustomAccordion color="secondary" title={"Profit split"}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormInput
              checkbox={true}
              label2="Profit split trader %"
              placeholder="Enter profit split"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <PercentIcon
                      sx={{
                        fontSize: "16px",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                fontSize: "13px !important",
                background: (theme) => theme.palette.color.bg4,
              }}
              defaultValue={80}
            />
          </Grid>
          <Grid item xs={12}>
            <FormSwitch label2="Consistent profitablity" flex />
          </Grid>
          <Grid xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <FormSwitch label2="Account gain without payout" flex />
          </Grid>
          <Grid item xs={3} sx={{ paddingTop: "14px !important" }}>
            <Typography variant="caption">Gain of at least:</Typography>
          </Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormInput
              placeholder="Enter profit split"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <PercentIcon
                      sx={{
                        fontSize: "16px",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                fontSize: "13px !important",
                background: (theme) => theme.palette.color.bg4,
              }}
              defaultValue={80}
            />
          </Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormSelect
              options={[{ value: "average", label: "Average" }]}
              defaultValue={"average"}
              fullWidth
            />
          </Grid>
          <Grid item xs={3} sx={{ paddingTop: "14px !important" }}>
            <Typography variant="caption">Without payout</Typography>
          </Grid>

          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormSelect
              options={[{ value: "cycles", label: "Cycles" }]}
              defaultValue={"cycles"}
              fullWidth
            />
          </Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormInput
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <PercentIcon
                      sx={{
                        fontSize: "16px",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                fontSize: "13px !important",
                background: (theme) => theme.palette.color.bg4,
              }}
              defaultValue={4}
            />
          </Grid>
          <Grid item xs={3} sx={{ paddingTop: "14px !important" }}>
            <Typography variant="caption">Then</Typography>
          </Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}></Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormInput
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <PercentIcon
                      sx={{
                        fontSize: "16px",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                fontSize: "13px !important",
                background: (theme) => theme.palette.color.bg4,
              }}
              defaultValue={90}
            />
          </Grid>

          <Grid item xs={12}>
            <FormSwitch label2="Continue the cycles" flex />
          </Grid>
        </Grid>
      </CustomAccordion>
      <CustomAccordion color="secondary" title={"Payout rules"}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormSwitch label2="No open positions" />
          </Grid>
          <Grid item xs={6}>
            <FormSwitch label2="Contract required" />
          </Grid>
          <Grid item xs={6}>
            <FormSwitch label2="Min. trading days" />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              label2="Min. trading days"
              placeholder="Enter min. trading days"
              defaultValue={5}
            />
          </Grid>
          <Grid item xs={6}>
            <FormSwitch label2="Min. profit in %" />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              label2="At least in profit"
              placeholder="Enter min. profit in %"
              defaultValue={5}
            />
          </Grid>
        </Grid>
      </CustomAccordion>
      <CustomAccordion color="secondary" title={"Account Scaling"}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormSwitch label2="Consistent Profitability:" flex />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  color: (theme) => theme.palette.color.secondary,
                }}
              >
                <Typography variant="heading">
                  #1 - Account gain without payout
                </Typography>
                <HelpIcon sx={{ fontSize: "15px" }} />
              </Stack>
              <CustomSwitch />
            </Stack>
          </Grid>
          <Grid item xs={3} sx={{ paddingTop: "14px !important" }}>
            <Typography variant="caption">Gain of at least:</Typography>
          </Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormInput
              placeholder="Enter profit split"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <PercentIcon
                      sx={{
                        fontSize: "16px",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                fontSize: "13px !important",
                background: (theme) => theme.palette.color.bg4,
              }}
              defaultValue={80}
            />
          </Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormSelect
              options={[{ value: "average", label: "Average" }]}
              defaultValue={"average"}
              fullWidth
            />
          </Grid>
          <Grid item xs={3} sx={{ paddingTop: "14px !important" }}>
            <Typography variant="caption">Without payout</Typography>
          </Grid>

          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormSelect
              options={[{ value: "cycles", label: "Cycles" }]}
              defaultValue={"cycles"}
              fullWidth
            />
          </Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormInput
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <PercentIcon
                      sx={{
                        fontSize: "16px",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                fontSize: "13px !important",
                background: (theme) => theme.palette.color.bg4,
              }}
              defaultValue={4}
            />
          </Grid>
          <Grid item xs={3} sx={{ paddingTop: "14px !important" }}>
            <Typography variant="caption">Then</Typography>
          </Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}></Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormInput
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <PercentIcon
                      sx={{
                        fontSize: "16px",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                fontSize: "13px !important",
                background: (theme) => theme.palette.color.bg4,
              }}
              defaultValue={90}
            />
          </Grid>

          <Grid item xs={12}>
            <FormSwitch label2="Continue the cycle" flex />
          </Grid>
          <Grid item xs={12}>
            <FormSwitch label2="Custom cycles" flex />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="heading">#2 - Cycle</Typography>
          </Grid>
          <Grid item xs={3} sx={{ paddingTop: "14px !important" }}>
            <Typography variant="caption">Gain of at least:</Typography>
          </Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormInput
              placeholder="Enter profit split"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <PercentIcon
                      sx={{
                        fontSize: "16px",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                fontSize: "13px !important",
                background: (theme) => theme.palette.color.bg4,
              }}
              defaultValue={80}
            />
          </Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormSelect
              options={[{ value: "average", label: "Average" }]}
              defaultValue={"average"}
              fullWidth
            />
          </Grid>
          <Grid item xs={3} sx={{ paddingTop: "14px !important" }}>
            <Typography variant="caption">Without payout</Typography>
          </Grid>

          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormSelect
              options={[{ value: "cycles", label: "Cycles" }]}
              defaultValue={"cycles"}
              fullWidth
            />
          </Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormInput
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <PercentIcon
                      sx={{
                        fontSize: "16px",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                fontSize: "13px !important",
                background: (theme) => theme.palette.color.bg4,
              }}
              defaultValue={4}
            />
          </Grid>
          <Grid item xs={3} sx={{ paddingTop: "14px !important" }}>
            <Typography variant="caption">Then</Typography>
          </Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}></Grid>
          <Grid item xs={4.5} sx={{ paddingTop: "14px !important" }}>
            <FormInput
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <PercentIcon
                      sx={{
                        fontSize: "16px",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                fontSize: "13px !important",
                background: (theme) => theme.palette.color.bg4,
              }}
              defaultValue={90}
            />
          </Grid>

          <Grid item xs={12}>
            <FormSwitch label2="Continue the cycle" flex />
          </Grid>
        </Grid>
      </CustomAccordion>
    </Stack>
  );
};

export default Payouts;
