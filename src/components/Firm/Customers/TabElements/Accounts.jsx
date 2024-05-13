import { Box, Paper, Stack, Typography, IconButton, Grid } from "@mui/material";
import React from "react";
import { Add } from "@mui/icons-material";
import FormSelect from "../../../ui/FormSelect";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { RiFileList2Line } from "react-icons/ri";
import { IoLogoDeviantart } from "react-icons/io5";
import { accounts } from "../../../../static/customers";
import { filterData } from "../../../../utils/filterByDate";

const Accounts = () => {
  const [duration, setDuration] = React.useState("thisWeek");
  return (
    <Paper
      sx={{
        mx: "auto",
        width: "100%",
        // maxWidth: { md: "800px", lg: isLarger ? "870px" : "1040px" },
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          mb: "24px",
          fontSize: "11.5px",
          color: (theme) => theme.palette.color.secondary,
        }}
      >
        <Add sx={{ fontSize: "16px" }} />

        <FormSelect
          options={[
            { value: "thisWeek", label: "This Week" },
            { value: "lastWeek", label: "Last Week" },
            { value: "thisMonth", label: "This Month" },
          ]}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <FormSelect
          options={[{ value: "all", label: "All" }]}
          defaultValue="all"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: (theme) => theme.palette.color.bg2,
            padding: "3px",
          }}
        >
          <IconButton
            sx={{
              p: "2px",
              borderRadius: "4px",
              color: (theme) => theme.palette.color.secondary,
            }}
          >
            <FormatListBulletedIcon sx={{ fontSize: "13px" }} />
          </IconButton>
          <IconButton
            sx={{
              p: "2px",
              borderRadius: "4px",
              background: (theme) => theme.palette.color.bg3,
              color: (theme) => theme.palette.color.secondary,
            }}
          >
            <RiFileList2Line size={12} />
          </IconButton>
        </Box>
      </Stack>
      <Box>
        <Grid container spacing={2}>
          {accounts
            .filter((a) => filterData(duration, a.createdAt))
            .map((account) => (
              <Grid item xs={12} md={6} lg={4}>
                <Box
                  sx={{
                    borderRadius: "24px",
                    border: (theme) =>
                      `1px solid ${theme.palette.color.border}`,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "center",
                      background: (theme) => theme.palette.color.bg4,
                      padding: "3px",
                      height: "110px",
                    }}
                  >
                    <IoLogoDeviantart size={16} />
                  </Box>
                  <Stack spacing={1.5} sx={{ px: 1.5, py: 1 }}>
                    <Stack direction={"row"} spacing={1} alignItems="center">
                      <Box
                        sx={{
                          padding: "4px",
                          borderRadius: "100%",
                          background: (theme) =>
                            theme.palette.color[account.color],
                        }}
                      ></Box>
                      <Typography variant="body3">{account.id}</Typography>
                    </Stack>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        "& span": {
                          color: (theme) => theme.palette.color.secondary,
                        },
                      }}
                    >
                      {account.equity} <span>usd</span>
                    </Typography>
                    <Stack spacing={0.5}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: (theme) => theme.palette.color.primary }}
                        >
                          Initial balance:
                        </Typography>
                        <Typography variant="body2">100,000.00</Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: (theme) => theme.palette.color.primary }}
                        >
                          Equity:
                        </Typography>
                        <Typography variant="body2">
                          {account.equity}
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: (theme) => theme.palette.color.primary }}
                        >
                          Floating
                        </Typography>
                        <Typography variant="body2">-</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Accounts;
