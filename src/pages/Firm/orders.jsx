import {
  Box,
  Card,
  Paper,
  Stack,
  Tooltip,
  Typography,
  Grid,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import CustomTable from "../../components/Firm/Orders/Table";
import { PiIntersectThree } from "react-icons/pi";
import ToggleColumns from "../../components/ui/ToggleColumns";
import FormSelect from "../../components/ui/FormSelect";
import { filterData } from "../../utils/filterByDate";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Searchbar from "../../components/ui/Searchbar";
import ExportSection from "../../components/ui/ExportSection";

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
];

const data = [
  {
    id: "102911065",
    name: "Alex M.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$250.00",
    product: "Elite - $250,000.00",
    customerId: "102911065",
    createdAt: "3 June 2024, 10:00",
  },
  {
    id: "102911066",
    name: "Bella T.",
    platform: "TradingView",
    phase: "Phase 1",
    value: "$260.00",
    product: "Elite - $260,000.00",
    customerId: "102911066",
    createdAt: "5 June 2024, 11:30",
  },
  {
    id: "102911067",
    name: "Charlie K.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$270.00",
    product: "Elite - $270,000.00",
    customerId: "102911067",
    createdAt: "7 June 2024, 12:45",
  },
  {
    id: "102911068",
    name: "Dana L.",
    platform: "cTrader",
    phase: "Phase 1",
    value: "$280.00",
    product: "Elite - $280,000.00",
    customerId: "102911068",
    createdAt: "9 June 2024, 09:15",
  },
  {
    id: "102911069",
    name: "Evan P.",
    platform: "TradingView",
    phase: "Phase 1",
    value: "$290.00",
    product: "Elite - $290,000.00",
    customerId: "102911069",
    createdAt: "11 June 2024, 08:30",
  },
  {
    id: "102911070",
    name: "Fiona G.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$300.00",
    product: "Elite - $300,000.00",
    customerId: "102911070",
    createdAt: "13 June 2024, 14:20",
  },
  {
    id: "102911071",
    name: "George R.",
    platform: "cTrader",
    phase: "Phase 1",
    value: "$310.00",
    product: "Elite - $310,000.00",
    customerId: "102911071",
    createdAt: "15 June 2024, 16:45",
  },
  {
    id: "102911072",
    name: "Hannah S.",
    platform: "TradingView",
    phase: "Phase 1",
    value: "$320.00",
    product: "Elite - $320,000.00",
    customerId: "102911072",
    createdAt: "17 June 2024, 11:55",
  },
  {
    id: "102911073",
    name: "Ian W.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$330.00",
    product: "Elite - $330,000.00",
    customerId: "102911073",
    createdAt: "19 June 2024, 15:40",
  },
  {
    id: "102911074",
    name: "Jane V.",
    platform: "cTrader",
    phase: "Phase 1",
    value: "$340.00",
    product: "Elite - $340,000.00",
    customerId: "102911074",
    createdAt: "21 June 2024, 09:10",
  },
  {
    id: "102911075",
    name: "Kyle B.",
    platform: "TradingView",
    phase: "Phase 1",
    value: "$350.00",
    product: "Elite - $350,000.00",
    customerId: "102911075",
    createdAt: "23 June 2024, 13:25",
  },
  {
    id: "102911076",
    name: "Luna M.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$360.00",
    product: "Elite - $360,000.00",
    customerId: "102911076",
    createdAt: "25 June 2024, 12:10",
  },
  {
    id: "102911077",
    name: "Mason C.",
    platform: "cTrader",
    phase: "Phase 1",
    value: "$370.00",
    product: "Elite - $370,000.00",
    customerId: "102911077",
    createdAt: "27 June 2024, 11:05",
  },
  {
    id: "102911078",
    name: "Nina T.",
    platform: "TradingView",
    phase: "Phase 1",
    value: "$380.00",
    product: "Elite - $380,000.00",
    customerId: "102911078",
    createdAt: "29 June 2024, 14:50",
  },
  {
    id: "102911079",
    name: "Oscar R.",
    platform: "Metatrader",
    phase: "Phase 1",
    value: "$390.00",
    product: "Elite - $390,000.00",
    customerId: "102911079",
    createdAt: "31 June 2024, 09:20",
  },
];

const Orders = () => {
  const [selectedColumns, setSelectedColumns] = useState(
    headcells.map((h) => h.id)
  );
  const [duration, setDuration] = useState("thisMonth");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const isLarger = useMediaQuery("(max-width:1320px)");
  const handleChangePage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = [...data].sort((a, b) => {
    if (orderBy === "value") {
      const valueA = parseFloat(a[orderBy].replace(/[$,]/g, ""));
      const valueB = parseFloat(b[orderBy].replace(/[$,]/g, ""));
      return (valueA < valueB ? -1 : 1) * (order === "asc" ? 1 : -1);
    } else {
      return (a[orderBy] < b[orderBy] ? -1 : 1) * (order === "asc" ? 1 : -1);
    }
  });

  const filteredData = sortedData.filter((d) =>
    filterData(duration, d.createdAt)
  );
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    Math.min(currentPage * itemsPerPage, filteredData.length)
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

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
        <Searchbar />
        <ExportSection />
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
        rows={paginatedData}
        onRequestSort={handleRequestSort}
        order={order}
        orderBy={orderBy}
        fontSize="13px"
      />
      {totalPages > 0 && (
        <Stack direction="row" justifyContent="end" mt={3}>
          <IconButton
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
            sx={{ mx: 0.5, p: 1, borderRadius: "50%", color: "#8A96A6" }}
          >
            <ChevronLeft />
          </IconButton>
          {Array.from({ length: totalPages }, (_, index) => (
            <IconButton
              key={index}
              onClick={() => handleChangePage(index + 1)}
              sx={{
                mx: 1,
                p: 1,
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                backgroundColor:
                  currentPage === index + 1
                    ? (theme) => theme.palette.primary.main
                    : "transparent",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color:
                    currentPage === index + 1
                      ? (theme) => theme.palette.primary.darkText
                      : (theme) => theme.palette.primary.lightText,
                }}
              >
                {index + 1}
              </Typography>
            </IconButton>
          ))}
          <IconButton
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            sx={{ mx: 0.5, p: 1, borderRadius: "50%", color: "#8A96A6" }}
          >
            <ChevronRight />
          </IconButton>
        </Stack>
      )}
    </Paper>
  );
};

export default Orders;
