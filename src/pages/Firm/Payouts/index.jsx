import {
  Box,
  Paper,
  Stack,
  Typography,
  alpha,
  IconButton,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import ToggleColumns from "../../../components/ui/ToggleColumns";
import FormSelect from "../../../components/ui/FormSelect";
import CustomTable from "../../../components/Firm/Orders/Table";
import { useDispatch } from "react-redux";
import ViewPayout from "./ViewPayout";
import { toggleOpen } from "../../../slices/openModalSlice";
// import { toggleOpen } from "src/slices/openModalSlice";

const statutes = [
  { value: "pending", label: "Pending", color: "yellow" },
  { value: "approved", label: "Approved", color: "green" },
  { value: "rejected", label: "Rejected", color: "red" },
  { value: "canceled", label: "Canceled", color: "orange" },
];

const headcells = [
  {
    id: "date",
    label: "Date",
    getCell: (row) => (
      <Typography
        sx={{
          fontSize: "inherit",
          whiteSpace: "nowrap",
        }}
      >
        {row.date}
      </Typography>
    ),
  },
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
          justifyContent={"center"}
          sx={{
            borderRadius: "7px",
            width: "91px",

            background: (theme) =>
              alpha(theme.palette.color[status.color], 0.15),
          }}
        >
          <Box
            sx={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              background: (theme) => theme.palette.color[status.color],
            }}
          ></Box>
          <Typography
            sx={{
              color: (theme) => theme.palette.color[status.color],
              lineHeight: "2.2em",
            }}
          >
            {status.label}
          </Typography>
        </Stack>
      );
    },
  },

  {
    id: "customer",
    label: "Customer",
    getCell: (row) => row.customer,
  },
  {
    id: "account",
    label: "Account",
    getCell: (row) => row.account,
  },
  {
    id: "amount",
    label: "Amount",
    getCell: (row) => row.amount,
  },
  {
    id: "message",
    label: "Message",
    getCell: (row) => (
      <Typography
        sx={{
          fontSize: "inherit",
          whiteSpace: "nowrap",
        }}
      >
        {row.message}
      </Typography>
    ),
  },
  {
    id: "actions",
    label: "Actions",
    getCell: (row) => (
      <IconButton>
        <RemoveRedEyeIcon
          sx={{
            color: (theme) => theme.palette.color.secondary,
            fontSize: "16px",
          }}
        />
      </IconButton>
    ),
  },
];

const data = [
  {
    date: "11:05 5 Apr, 2024",
    status: "pending",
    customer: "10105305",
    account: "95035393",
    amount: "$1,500.50",
    message: "Message client",
  },
  {
    date: "11:05 5 Apr, 2024",
    status: "approved",
    customer: "10105305",
    account: "95035393",
    amount: "$1,500.50",
    message: "Message client",
  },
  {
    date: "11:05 5 Apr, 2024",
    status: "approved",
    customer: "10105305",
    account: "95035393",
    amount: "$1,500.50",
    message: "Message client",
  },
  {
    date: "11:05 5 Apr, 2024",
    status: "rejected",
    customer: "10105305",
    account: "95035393",
    amount: "$1,500.50",
    message: "Message client",
  },
  {
    date: "11:05 5 Apr, 2024",
    status: "approved",
    customer: "10105305",
    account: "95035393",
    amount: "$1,500.50",
    message: "Message client",
  },
];

const Payouts = () => {
  const [selectedColumns, setSelectedColumns] = useState(
    headcells.map((h) => h.id)
  );
  const [status, setStatus] = useState("all");
  const dispatch = useDispatch();
  return (
    <Paper
      sx={{
        mx: "auto",
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
          pr: "50px",
          fontSize: "11.5px",
          color: (theme) => theme.palette.color.secondary,
        }}
      >
        <Search sx={{ fontSize: "inherit" }} />

        <FormSelect
          options={[
            {
              value: "all",
              label: "All",
            },
            {
              value: "approved",
              label: "Approved",
            },
            {
              value: "pending",
              label: "Pending",
            },
            {
              value: "rejected",
              label: "Rejected",
            },
          ]}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
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
          rows={data.filter((d) => d.status === status || status === "all")}
          onRowClick={() => dispatch(toggleOpen())}
        />
      </Box>
      <ViewPayout />
    </Paper>
  );
};

export default Payouts;
