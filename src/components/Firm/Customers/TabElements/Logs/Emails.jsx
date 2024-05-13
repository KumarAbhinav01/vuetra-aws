import { Box, Paper } from "@mui/material";
import React from "react";
import CustomTable from "../../../Orders/Table";

const headcells = [
  {
    id: "from",
    label: "From",
    getCell: (row) => row.from,
  },
  {
    id: "to",
    label: "To",
    getCell: (row) => row.to,
  },
  {
    id: "subject",
    label: "Subject",
    getCell: (row) => row.subject,
  },
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
        }}
      ></Box>
    ),
  },
  {
    id: "account",
    label: "Account",
    getCell: (row) => row.account,
  },
  {
    id: "date",
    label: "Date",
    getCell: (row) => row.date,
  },
];

const data = [
  {
    from: "Admin",
    to: "example@gmail.com",
    subject: "Title",
    account: "1045000504",
    date: "06 Apr 11:05 AM",
  },
];

const Emails = () => {
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

export default Emails;
