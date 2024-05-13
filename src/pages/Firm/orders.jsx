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
import { FiArrowUpRight } from "react-icons/fi";
import CustomTable from "../../components/Firm/Orders/Table";
import { PiIntersectThree } from "react-icons/pi";
import { Search } from "@mui/icons-material";
import { BiExport } from "react-icons/bi";
import ToggleColumns from "../../components/ui/ToggleColumns";
import FormSelect from "../../components/ui/FormSelect";
import { filterData } from "../../utils/filterByDate";

const headcells = [
  {
    id: "status",
    label: "Status",
    getCell: (row) => (
      <Box
        sx={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: (theme) => theme.palette.color.green,
          ml: "14px",
          my: "14px",
        }}
      ></Box>
    ),
  },
  {
    id: "id",
    label: "ID",
    getCell: (row) => row.id,
  },
  {
    id: "name",
    label: "Name",
    getCell: (row) => row.name,
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
    id: "phase",
    label: "Phase",
    getCell: (row) => row.phase,
  },
  {
    id: "value",
    label: "Order value",
    getCell: (row) => row.value,
  },
  {
    id: "product",
    label: "Product",
    getCell: (row) => row.product,
  },
  {
    id: "customerId",
    label: "Customer ID",
    getCell: (row) => row.customerId,
  },
  {
    id: "createdAt",
    label: "Created at",
    getCell: (row) => row.createdAt,
  },
];

const data = [
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$250.00",
    product: "Elite - $250,000.00",
    customerId: "102911050",
    createdAt: "24 Apr 2024, 11:04",
  },
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$250.00",
    product: "Elite - $250,000.00",
    customerId: "102911050",
    createdAt: "24 Apr 2024, 11:04",
  },
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$250.00",
    product: "Elite - $250,000.00",
    customerId: "102911050",
    createdAt: "24 Apr 2024, 11:04",
  },
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$250.00",
    product: "Elite - $250,000.00",
    customerId: "102911050",
    createdAt: "2 May 2024, 11:04",
  },
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$250.00",
    product: "Elite - $250,000.00",
    customerId: "102911050",
    createdAt: "2 May 2024, 11:04",
  },
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$250.00",
    product: "Elite - $250,000.00",
    customerId: "102911050",
    createdAt: "5 May 2024, 11:04",
  },
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$250.00",
    product: "Elite - $250,000.00",
    customerId: "102911050",
    createdAt: "2 May 2024, 11:04",
  },
  {
    id: "102911050",
    name: "Jens V.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$250.00",
    product: "Elite - $250,000.00",
    customerId: "102911050",
    createdAt: "2 May 2024, 11:04",
  },
];

const Orders = () => {
  const [selectedColumns, setSelectedColumns] = useState(
    headcells.map((h) => h.id)
  );
  const [duration, setDuration] = useState("thisWeek");
  const isLarger = useMediaQuery("(max-width:1320px)");
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
        <Search sx={{ fontSize: "inherit" }} />
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              width: "100%",
              border: (theme) => `1px solid ${theme.palette.color.border}`,
              background: (theme) => theme.palette.color.bg2,
              borderRadius: "12px",
              overflow: "hidden",
              padding: "24px",
            }}
          >
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="caption">Total Rev.</Typography>
                  <Tooltip title="Amount of unresolved open tickets">
                    <HelpIcon
                      sx={{
                        fontSize: "15px",
                        cursor: "pointer",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </Tooltip>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: "center",
                    color: (theme) => theme.palette.color.green,
                  }}
                >
                  <FiArrowUpRight size={16} />
                  <Typography
                    variant="caption"
                    sx={{ color: (theme) => theme.palette.color.green }}
                  >
                    +3.7%
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="h4">$15,505.10</Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            sx={{
              width: "100%",
              border: (theme) => `1px solid ${theme.palette.color.border}`,
              background: (theme) => theme.palette.color.bg2,
              borderRadius: "12px",
              overflow: "hidden",
              padding: "24px",
            }}
          >
            <Stack spacing={3}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="caption">Total Rev.</Typography>
                <Tooltip title="Amount of unresolved open tickets">
                  <HelpIcon
                    sx={{
                      fontSize: "15px",
                      cursor: "pointer",
                      color: (theme) => theme.palette.color.secondary,
                    }}
                  />
                </Tooltip>
              </Stack>
              <Typography variant="h4">$15,505.10</Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card
            sx={{
              width: "100%",
              border: (theme) => `1px solid ${theme.palette.color.border}`,
              background: (theme) => theme.palette.color.bg2,
              borderRadius: "12px",
              overflow: "hidden",
              padding: "24px",
            }}
          >
            <Stack spacing={3}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="caption">Total Rev.</Typography>
                <Tooltip title="Amount of unresolved open tickets">
                  <HelpIcon
                    sx={{
                      fontSize: "15px",
                      cursor: "pointer",
                      color: (theme) => theme.palette.color.secondary,
                    }}
                  />
                </Tooltip>
              </Stack>
              <Typography variant="h4">$15,505.10</Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
      <CustomTable
        headcells={headcells.filter((headcell) =>
          selectedColumns.includes(headcell.id)
        )}
        rows={data.filter((d) => filterData(duration, d.createdAt))}
        fontSize="13px"
      />
    </Paper>
  );
};

export default Orders;
