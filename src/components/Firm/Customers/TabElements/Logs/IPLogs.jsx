import { Paper } from "@mui/material";
import React from "react";
import CustomTable from "../../../Orders/Table";

const headcells = [
  {
    id: "user",
    label: "Admin user",
    getCell: (row) => row.user,
  },
  {
    id: "action",
    label: "Action",
    getCell: (row) => row.action,
  },
  {
    id: "before",
    label: "Before",
    getCell: (row) => row.before,
  },

  {
    id: "after",
    label: "After",
    getCell: (row) => row.after,
  },
  {
    id: "date",
    label: "Date",
    getCell: (row) => row.date,
  },
];

const data = [
  {
    user: "Shae",
    action: "Customer edit",
    before: "First name: Jens",
    after: "First name: Shae",
    date: "06 Apr 11:05 AM",
  },
];

const IPLogs = () => {
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

export default IPLogs;
