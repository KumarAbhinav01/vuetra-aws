import { Paper } from "@mui/material";
import React from "react";
import CustomTable from "../../components/Firm/Orders/Table";
import { headcells, tickets } from "../../static/tickets";

const OpenTickets = () => {
  return (
    <Paper
      sx={{
        p: "24px",
        width: "100%",
      }}
    >
      <CustomTable
        headcells={headcells.filter((h) => h.id !== "solvedBy")}
        rows={tickets.filter((t) => ["ongoing", "open"].includes(t.status))}
        fontSize="12px"
      />
    </Paper>
  );
};

export default OpenTickets;
