import { Paper } from "@mui/material";
import React from "react";
import CustomTable from "../../components/Firm/Orders/Table";
import { headcells, tickets } from "../../static/tickets";

const ClosedTickets = () => {
  return (
    <Paper
      sx={{
        p: "24px",
        width: "100%",
      }}
    >
      <CustomTable
        headcells={headcells.filter((h) => h.id !== "assignedto")}
        rows={tickets.filter((t) => t.status === "closed")}
        fontSize="12px"
      />
    </Paper>
  );
};

export default ClosedTickets;
