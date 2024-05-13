import { Box, Paper } from "@mui/material";
import React from "react";
import CustomTable from "../../../Orders/Table";

const headcells = [
  {
    id: "status",
    label: "",
    getCell: (row) => (
      <Box
        sx={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: (theme) => theme.palette.color.green,
          ml: "14px",
        }}
      ></Box>
    ),
  },
  {
    id: "login",
    label: "Login",
    getCell: (row) => row.login,
  },
  {
    id: "ip",
    label: "IP",
    getCell: (row) => row.ip,
  },
  {
    id: "type",
    label: "Type",
    getCell: (row) => row.type,
  },

  {
    id: "country",
    label: "Country",
    getCell: (row) => row.country,
  },
  {
    id: "city",
    label: "City",
    getCell: (row) => row.city,
  },
];

const data = [
  {
    login: "Account number",
    ip: "1.500.11.150.15",
    type: "Platform",
    country: "NL",
    city: "Amsterdam",
  },
];

const LogsTable = () => {
  return (
    <Paper
      sx={{
        width: "100%",
      }}
    >
      <CustomTable headcells={headcells} rows={data} />
    </Paper>
  );
};

export default LogsTable;
