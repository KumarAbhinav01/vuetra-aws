import { Paper, Stack, Typography, alpha } from "@mui/material";
import React, { useState } from "react";
import CustomTable from "../../components/Firm/Orders/Table";
import { Search } from "@mui/icons-material";
import { BiExport } from "react-icons/bi";
import ToggleColumns from "../../components/ui/ToggleColumns";
import { useNavigate } from "react-router-dom";
import FormSelect from "../../components/ui/FormSelect";
import { filterData } from "../../utils/filterByDate";

const headcells = [
  {
    id: "name",
    label: "Name",
    getCell: (row) => row.name,
  },
  {
    id: "country",
    label: "Country",
    getCell: (row) => (
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ my: "10px" }}
      >
        <p>{row.country}</p>
      </Stack>
    ),
  },
  {
    id: "email",
    label: "Email address",
    getCell: (row) => row.email,
  },
  {
    id: "phone",
    label: "Phone",
    getCell: (row) => row.phone,
  },

  {
    id: "createdAt",
    label: "Created",
    getCell: (row) => row.createdAt,
  },
  {
    id: "value",
    label: "Customer Value",
    getCell: (row) => row.value,
  },
  {
    id: "customerId",
    label: "Customer Id",
    getCell: (row) => row.customerId,
  },
  {
    id: "account",
    label: "Account",
    getCell: (row) => row.account,
  },
];

const data = [
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "2 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "2 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "2 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "11 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "11 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "11 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "11 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "11 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "11 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    account: "account",
  },
];

const Customers = () => {
  const [selectedColumns, setSelectedColumns] = useState(
    headcells.map((h) => h.id)
  );
  const [duration, setDuration] = useState("thisWeek");
  const navigate = useNavigate();

  return (
    <Paper
      sx={{
        px: "12px",
        py: "24px",
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
          pr: "24px",
          color: (theme) => theme.palette.color.secondary,
        }}
      >
        <Search sx={{ fontSize: "16px" }} />
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

      <CustomTable
        headcells={headcells.filter((headcell) =>
          selectedColumns.includes(headcell.id)
        )}
        rows={data.filter((d) => filterData(duration, d.createdAt))}
        onRowClick={(row) => {
          navigate(`/firm/customers/${row.name}`);
        }}
        fontSize="13px"
      />
    </Paper>
  );
};

export default Customers;
