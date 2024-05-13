import {
  Box,
  Card,
  Paper,
  Stack,
  Tooltip,
  Typography,
  Grid,
  useMediaQuery,
  alpha,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import React, { useState } from "react";
import CustomTable from "../../components/Firm/Orders/Table";
import { PiIntersectThree } from "react-icons/pi";
import { Add, Search } from "@mui/icons-material";
import { BiExport } from "react-icons/bi";
import ToggleColumns from "../../components/ui/ToggleColumns";
import FormSelect from "../../components/ui/FormSelect";
import {
  dashboardItems1,
  dashboardItems2,
} from "../../static/trading-accounts";
import { filterData } from "../../utils/filterByDate";
import ViewAccount from "./ViewAccount";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../../slices/openModalSlice";

const statutes = [
  { value: "ongoing", label: "Ongoing", color: "secondary" },
  { value: "passed", label: "Passed", color: "green" },
  { value: "breached", label: "Breached", color: "red" },
];

const headcells = [
  {
    id: "status",
    label: "Status",
    getCell: (row) => {
      const status = statutes.find((statute) => statute.value === row.status);
      return (
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            padding: "6px 14px",
            borderRadius: "20px",
            width: "fit-content",
            background: (theme) =>
              alpha(theme.palette.color[status.color], 0.05),
            border: (theme) => `1px solid ${theme.palette.color[status.color]}`,
            my: "14px",
          }}
        >
          <Box
            sx={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: (theme) => theme.palette.color[status.color],
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: "11.5px",
              color: (theme) => theme.palette.color[status.color],
              fontWeight: 600,
            }}
          >
            {status.label}
          </Typography>
        </Stack>
      );
    },
  },
  {
    id: "id",
    label: "Account No.",
    getCell: (row) => row.id,
  },
  {
    id: "phase",
    label: "Phase",
    getCell: (row) => row.phase,
  },

  {
    id: "platform",
    label: "Platform",
    getCell: (row) => (
      <Stack direction="row" spacing={1} alignItems="center">
        <PiIntersectThree size={16} />
        <p>{row.platform}</p>
      </Stack>
    ),
  },
  {
    id: "name",
    label: "Name",
    getCell: (row) => row.name,
  },
  {
    id: "program",
    label: "Program",
    getCell: (row) => row.program,
  },
  {
    id: "date",
    label: "Created date",
    getCell: (row) => row.date,
  },
];

const data = [
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    program: "25K Evaluation Program",
    date: "25 Apr, 2024 11:05 AM",
    status: "ongoing",
  },
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    program: "25K Evaluation Program",
    date: "1 Apr, 2024 11:05 AM",
    status: "passed",
  },
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    program: "25K Evaluation Program",
    date: "5 May, 2024 11:05 AM",
    status: "breached",
  },
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    program: "25K Evaluation Program",
    date: "1 May, 2024 11:05 AM",
    status: "ongoing",
  },
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    program: "25K Evaluation Program",
    date: "1 May, 2024 11:05 AM",
    status: "passed",
  },
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    program: "25K Evaluation Program",
    date: "1 May, 2024 11:05 AM",
    status: "breached",
  },
];

const TradingAccounts = () => {
  const [status, setStatus] = useState("");
  const [selectedColumns, setSelectedColumns] = useState(
    headcells.map((h) => h.id)
  );
  const [duration, setDuration] = useState("thisWeek");
  const isLarger = useMediaQuery("(max-width:1320px)");
  const dispatch = useDispatch();
  return (
    <Paper
      sx={{
        mx: "auto",
        py: "24px",
        width: "100%",
        maxWidth: { md: "800px", lg: isLarger ? "870px" : "1040px" },
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
        <Tooltip title="Search trading accounts" placement="top">
          <Search sx={{ fontSize: "16px" }} />
        </Tooltip>
        <Tooltip title="Add new trading accounts" placement="top">
          <Add sx={{ fontSize: "16px" }} />
        </Tooltip>
        <Typography
          sx={{
            color: (theme) => theme.palette.color.secondary,
            fontSize: "11.5px",
            py: "3px",
            px: "8px",
            border: (theme) =>
              `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
          }}
        >
          <BiExport /> Export
        </Typography>
        <FormSelect
          options={[
            { value: "thisWeek", label: "This Week" },
            { value: "lastWeek", label: "Last Week" },
            { value: "thisMonth", label: "This Month" },
          ]}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <ToggleColumns
          columns={headcells}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
        />
      </Stack>
      <Grid container spacing={1}>
        {dashboardItems1.map((item, index) => (
          <Grid item xs={12} md={4} lg={3} key={item.key}>
            <Card
              onClick={() => setStatus(item.key)}
              sx={{
                width: "100%",
                // transition: "all 0.3s ease-in",
                border: (theme) =>
                  `1px solid ${
                    item.key === status
                      ? theme.palette.color.green
                      : theme.palette.color.border
                  }`,
                background: (theme) =>
                  item.key === status
                    ? alpha(theme.palette.color.green, 0.05)
                    : theme.palette.color.bg3,
                borderRadius: "24px",
                overflow: "hidden",
                padding: "24px",
                cursor: "pointer",
                ...(status &&
                  item.key !== status && {
                    opacity: 0.35,
                  }),
                ...(item.key === status && {
                  transition: "all 0.4s ease-in",
                }),
              }}
            >
              <Stack spacing={5}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    variant="caption"
                    sx={{
                      ...(item.key === status && {
                        color: (theme) => theme.palette.color.green,
                      }),
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Tooltip title={item.tooltip} placement="top">
                    <HelpIcon
                      sx={{
                        fontSize: "15px",
                        cursor: "pointer",
                        color: (theme) =>
                          theme.palette.color[
                            item.key === status ? "green" : "secondary"
                          ],
                      }}
                    />
                  </Tooltip>
                </Stack>

                <Typography
                  variant="h1"
                  sx={{
                    ...(item.key === status && {
                      color: (theme) => theme.palette.color.green,
                    }),
                    fontWeight: "600",
                  }}
                >
                  {item.value}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
        {dashboardItems2.map((item, index) => (
          <Grid item xs={12} md={3} lg={2}>
            <Card
              sx={{
                width: "100%",
                border: (theme) => `1px solid ${theme.palette.color.border}`,
                background: (theme) => theme.palette.color.bg3,
                borderRadius: "12px",
                overflow: "hidden",
                padding: "24px",
              }}
            >
              <Stack spacing={3}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="caption">{item.title}</Typography>
                  <Tooltip title={item.tooltip}>
                    <HelpIcon
                      sx={{
                        fontSize: "15px",
                        cursor: "pointer",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </Tooltip>
                </Stack>
                <Typography variant="h4">{item.value}</Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CustomTable
        headcells={headcells.filter((headcell) =>
          selectedColumns.includes(headcell.id)
        )}
        rows={data.filter((data) => {
          if (!filterData(duration, data.date)) return false;
          if (status === "") return true;
          if (status === "active") return data.status === "ongoing";
          if (status === "inactive")
            return data.status === "passed" || data.status === "breached";
          return false;
        })}
        fontSize="13px"
        onRowClick={() => {
          dispatch(toggleOpen());
        }}
      />
      <ViewAccount />
    </Paper>
  );
};

export default TradingAccounts;
