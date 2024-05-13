import { Box, Paper, Stack, Typography, alpha } from "@mui/material";
import React, { useState } from "react";
import { PiIntersectThree } from "react-icons/pi";
import { Search } from "@mui/icons-material";
import { BiExport } from "react-icons/bi";
import ToggleColumns from "../../../ui/ToggleColumns";
import CustomTable from "../../Orders/Table";
import FormSelect from "../../../ui/FormSelect";
import { filterData } from "../../../../utils/filterByDate";

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
          background: (theme) => theme.palette.color[row.color],
          ml: "14px",
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
    id: "createdAt",
    label: "Created at",
    getCell: (row) => row.createdAt,
  },
];

const data = [
  {
    color: "yellow",
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
    color: "green",
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
    color: "green",
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
    color: "red",
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
    color: "orange",
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
    color: "green",
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
    color: "orange",
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
    color: "green",
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
  return (
    <Paper
      sx={{
        width: "100%",
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
      <Box>
        <CustomTable
          headcells={headcells.filter((headcell) =>
            selectedColumns.includes(headcell.id)
          )}
          rows={data.filter((d) => filterData(duration, d.createdAt))}
        />
      </Box>
    </Paper>
  );
};

export default Orders;
