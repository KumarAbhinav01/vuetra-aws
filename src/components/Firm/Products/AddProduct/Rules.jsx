import React, { useState } from "react";
import Box from "@mui/material/Box";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import {
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import FormInput from "../../../ui/FormInput";
import CustomAccordion from "../../../ui/CustomAccordion";
import { Done } from "@mui/icons-material";
import HelpIcon from "@mui/icons-material/Help";
import PercentIcon from "@mui/icons-material/Percent";
import FormSelect from "../../../ui/FormSelect1";
import FormSwitch from "../../../ui/FormSwitch";

const Rules = () => {
  const [drawdownType, setDrawdownType] = useState("static");
  return (
    <Stack sx={{ px: "24px", py: "12px" }} spacing={0}>
      <CustomAccordion color="secondary" title={"Trading objectives"}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="caption" sx={{ fontWeight: "400" }}>
              You will have the option to make individual edits to each account
              size later in the process. You are also able to change the rules
              per trader in their account settings.
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
          <Grid item xs={6}>
            <FormSelect
              checkbox={true}
              label2="Levarage"
              options={[
                { value: "1", label: "1:100" },
                { value: "2", label: "1:200" },
                { value: "3", label: "1:300" },
              ]}
              defaultValue="1"
              fullWidth
              sx={{
                fontSize: "13px !important",
                background: (theme) => theme.palette.color.bg4,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              checkbox={true}
              label2="Profite target"
              placeholder="Enter value"
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
            />
          </Grid>
          <Grid item xs={12}>
            <FormInput
              placeholder="Enter value"
              label2="Interactivity period days"
              sx={{ background: (theme) => theme.palette.color.bg4 }}
              type="number"
              defaultValue={0}
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              placeholder="Enter max trading days"
              label2="Max trading days"
              sx={{ background: (theme) => theme.palette.color.bg4 }}
              defaultValue={0}
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              placeholder="Enter min trading days"
              label2="Min trading days"
              sx={{ background: (theme) => theme.palette.color.bg4 }}
              defaultValue={0}
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              placeholder="Enter max drawdown"
              label2="Max drawdown"
              sx={{ background: (theme) => theme.palette.color.bg4 }}
              defaultValue={0}
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              placeholder="Enter max daily drawdown"
              label2="Max daily drawdown"
              sx={{ background: (theme) => theme.palette.color.bg4 }}
              defaultValue={0}
              type="number"
            />
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                color: (theme) => theme.palette.color.secondary,
              }}
            >
              <Typography variant="caption">Drawdown type</Typography>
              <HelpIcon sx={{ fontSize: "15px" }} />
            </Stack>
          </Grid>
          {[
            {
              label: "Static drawdown",
              value: "static",
              description: "Decline from highest peak.",
            },
            {
              label: "Trailing drawdown",
              value: "trailing",
              description: "Decline from subsequent peaks.",
            },
          ].map((item, index) => (
            <Grid item xs={6}>
              <Box
                onClick={() => setDrawdownType(item.value)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "17px 17px 17px 21px",
                  width: "100%",
                  border: (theme) =>
                    `2px solid ${
                      drawdownType === item.value
                        ? theme.palette.color.purple
                        : "transparent"
                    }`,
                  borderRadius: "8px",
                  boxShadow: "rgb(112, 71, 235) 0px",
                  background: (theme) => theme.palette.color.bg4,
                  transition: "all 500ms ease-in-out",
                  cursor: "pointer",
                }}
              >
                <Stack spacing={0.5}>
                  <Typography variant="heading">{item.label}</Typography>
                  <Typography variant="caption" sx={{ fontWeight: "500" }}>
                    {item.description}
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    background: (theme) => theme.palette.color.blue,
                    color: (theme) => theme.palette.color.primary,
                    borderRadius: "50%",
                    padding: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "fit-content",
                    height: "fit-content",
                    opacity: drawdownType === item.value ? 1 : 0,
                    transition: "all 500ms ease-in-out",
                  }}
                >
                  <Done sx={{ fontSize: "14px" }} />
                </Box>
              </Box>
            </Grid>
          ))}
          <Grid item xs={6}>
            <FormInput
              placeholder="Enter max open slots"
              label2="Max open slots"
              sx={{ background: (theme) => theme.palette.color.bg4 }}
              defaultValue={0}
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <FormInput
              placeholder="Enter max risk per symbol"
              label2="Max risk per symbol"
              sx={{ background: (theme) => theme.palette.color.bg4 }}
              defaultValue={0}
              type="number"
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
            />
          </Grid>
        </Grid>
      </CustomAccordion>
      <CustomAccordion color="secondary" title={"Rules"}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="caption"
              sx={{ fontWeight: "400", lineHeight: "1.5em" }}
            >
              You will have the option to make individual edits to each account
              size later in the process. You are also able to change the rules
              per trader in their account settings.
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
          <Grid item xs={6}>
            <FormSwitch label2="Require stop loss" />
          </Grid>
          <Grid item xs={6}>
            <FormSelect
              label2="Consequence"
              options={[{ value: "soft", label: "Soft Breach" }]}
              defaultValue="soft"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormSwitch label2="Allow expert advisor" />
          </Grid>
          <Grid item xs={6}>
            <FormSelect
              label2="Consequence"
              options={[{ value: "hard", label: "Hard Breach" }]}
              defaultValue="hard"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormSwitch label2="Weekend holdings" />
          </Grid>
          <Grid item xs={6}>
            <FormSelect
              label2="Consequence"
              options={[{ value: "liquidate", label: "Liquidate friday" }]}
              defaultValue="liquidate"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormSwitch label2="KYC required" />
          </Grid>
          <Grid item xs={6}>
            <FormSwitch label2="Contract required" />
          </Grid>
        </Grid>
      </CustomAccordion>
    </Stack>
  );
};

export default Rules;
