import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomTable from "../../components/Firm/Orders/Table";
import { headcells, tickets } from "../../static/tickets";
import SearchBar from "../../components/Affiliates/searchBar";
import ExportSection from "../../components/ui/ExportSection";
import DisplayColumns from "../../components/ui/DisplayColumns";
import CalendarPopup from "../../components/ui/CalendarPopup";
import dayjs from "dayjs";

const filteredHeadcells = headcells.filter((h) => h.id !== "solvedBy" && h.id !== "closeDate");

const MyTickets = () => {
  const [startDate, setStartDate] = useState(dayjs().startOf("week"));
  const [endDate, setEndDate] = useState(dayjs().endOf("week"));
  const [columns, setColumns] = useState(filteredHeadcells);
  const [heads, setHeads] = useState(
    filteredHeadcells.map((cell) => cell.id)
  );

  const filteredColumns = columns.filter((cell) => heads.includes(cell.id));

  return (
    <Box
      sx={{
        p: "24px",
        width: "100%",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box
          sx={{
            display: "flex",
            gap: "14px",
            alignItems: "start",
          }}
        >
          <Typography variant="h5" sx={{ marginLeft: "10px" }}>
            Assigned to me
          </Typography>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="flex-end"
          sx={{
            mb: "5px",
            fontSize: "11.5px",
            pr: "24px",
            color: (theme) => theme.palette.color.secondary,
          }}
        >
          <SearchBar />
          <ExportSection />
          <ExportSection />
          <CalendarPopup
            mainEndDate={endDate}
            mainStartDate={startDate}
            setMainEndDate={setEndDate}
            setMainStartDate={setStartDate}
          />
          <DisplayColumns
            columns={filteredHeadcells}
            setColumns={setColumns}
            selectedColumns={heads}
            setSelectedColumns={setHeads}
            title={"Display"}
          />
        </Stack>
      </Stack>

      <CustomTable
        headcells={filteredColumns}
        rows={tickets.filter((t) => t.assignedto === "Jens")}
        fontSize="12px"
      />
    </Box>
  );
};

export default MyTickets;