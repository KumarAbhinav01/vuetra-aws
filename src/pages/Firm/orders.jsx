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
  Button,
  alpha,
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
import SearchInput from "../../components/ui/NewSearch";
import { BiImport } from "react-icons/bi";
import dayjs from "dayjs";
import CalendarPopup from "../../components/ui/CalendarPopup";
import DisplayColumns from "../../components/ui/DisplayColumns";

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
    getCell: (row) => row.platform,
  },
  {
    id: "challenge",
    label: "Challenge",
    getCell: (row) => row.challenge,
  },
  {
    id: "size",
    label: "Size",
    getCell: (row) => row.size,
  },
  {
    id: "value",
    label: "Value",
    getCell: (row) => row.value,
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
    challenge: "Challenge",
    value: "$250.00",
    size: "100K",
    customerId: "102911065",
    createdAt: "3 June 2024, 10:00",
  },
  {
    id: "102911066",
    name: "Bella T.",
    platform: "TradingView",
    challenge: "Challenge",
    value: "$260.00",
    size: "100K",
    customerId: "102911066",
    createdAt: "5 June 2024, 11:30",
  },
  {
    id: "102911067",
    name: "Charlie K.",
    platform: "Metatrader",
    challenge: "Challenge",
    value: "$270.00",
    size: "100K",
    customerId: "102911067",
    createdAt: "7 June 2024, 12:45",
  },
  {
    id: "102911068",
    name: "Dana L.",
    platform: "cTrader",
    challenge: "Challenge",
    value: "$280.00",
    size: "100K",
    customerId: "102911068",
    createdAt: "9 June 2024, 09:15",
  },
  {
    id: "102911069",
    name: "Evan P.",
    platform: "TradingView",
    challenge: "Challenge",
    value: "$290.00",
    size: "100K",
    customerId: "102911069",
    createdAt: "11 June 2024, 08:30",
  },
  {
    id: "102911070",
    name: "Fiona G.",
    platform: "Metatrader",
    challenge: "Challenge",
    value: "$300.00",
    size: "100K",
    customerId: "102911070",
    createdAt: "13 June 2024, 14:20",
  },
  {
    id: "102911071",
    name: "George R.",
    platform: "cTrader",
    challenge: "Challenge",
    value: "$310.00",
    size: "100K",
    customerId: "102911071",
    createdAt: "15 June 2024, 16:45",
  },
  {
    id: "102911072",
    name: "Hannah S.",
    platform: "TradingView",
    challenge: "Challenge",
    value: "$320.00",
    size: "100K",
    customerId: "102911072",
    createdAt: "17 June 2024, 11:55",
  },
  {
    id: "102911073",
    name: "Ian W.",
    platform: "Metatrader",
    challenge: "Challenge",
    value: "$330.00",
    size: "100K",
    customerId: "102911073",
    createdAt: "19 June 2024, 15:40",
  },
  {
    id: "102911074",
    name: "Jane V.",
    platform: "cTrader",
    challenge: "Challenge",
    value: "$340.00",
    size: "100K",
    customerId: "102911074",
    createdAt: "21 June 2024, 09:10",
  },
  {
    id: "102911075",
    name: "Kyle B.",
    platform: "TradingView",
    challenge: "Challenge",
    size: "100K",
    customerId: "102911075",
    createdAt: "23 June 2024, 13:25",
  },
  {
    id: "102911076",
    name: "Luna M.",
    platform: "Metatrader",
    challenge: "Challenge",
    value: "$360.00",
    size: "100K",
    customerId: "102911076",
    createdAt: "25 June 2024, 12:10",
  },
  {
    id: "102911077",
    name: "Mason C.",
    platform: "cTrader",
    challenge: "Challenge",
    value: "$370.00",
    size: "Elite - $370,000.00",
    customerId: "102911077",
    createdAt: "27 June 2024, 11:05",
  },
  {
    id: "102911078",
    name: "Nina T.",
    platform: "TradingView",
    challenge: "Challenge",
    value: "$380.00",
    size: "100K",
    customerId: "102911078",
    createdAt: "29 June 2024, 14:50",
  },
  {
    id: "102911079",
    name: "Oscar R.",
    platform: "Metatrader",
    challenge: "Challenge",
    value: "$390.00",
    size: "100K",
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
  const handleChangePage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [startDate, setStartDate] = useState(dayjs().startOf("week"));
  const [endDate, setEndDate] = useState(dayjs().endOf("week"));
  const [columns, setColumns] = useState(headcells);
  const [heads, setHeads] = React.useState(
    headcells.filter((cell) => cell.default).map((cell) => cell.id)
  );

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
        p: "24px",
        width: "100%",
      }}
    >
      <Grid container spacing={3}>
        {[
          { label: "Today", value: "$15,000.00" },
          {
            label: "This week",
            value: "$101,100.00",
          },
          {
            label: "This month",
            value: "$10,000,000",
          },
        ].map((item) => (
          <Grid item xs={12} md={6} lg={4}>
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
                <Typography variant="caption">{item.label}</Typography>

                <Typography variant="h4">{item.value}</Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mt: "24px",
          fontSize: "11.5px",
          color: (theme) => theme.palette.color.secondary,
        }}
      >
        <Typography variant="heading_500">Orders</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <SearchInput />
          <ExportSection />
          <Button
            variant="outlined"
            sx={{
              color: (theme) => theme.palette.color.secondary,
              fontSize: "11.5px",
              py: "7px",
              px: "13px",
              bgcolor: (theme) => theme.palette.color.bg,
              border: (theme) =>
                `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
              borderRadius: "50px",
              ":hover": {
                border: (theme) =>
                  `1px solid ${alpha(theme.palette.color.secondary, 0.35)}`,
                backgroundColor: (theme) => theme.palette.color.bg2,
              },
              height: "30px",
            }}
          >
            <BiImport style={{ marginRight: "5px" }} /> Import
          </Button>
          <CalendarPopup
            mainEndDate={endDate}
            mainStartDate={startDate}
            setMainEndDate={setEndDate}
            setMainStartDate={setStartDate}
          />
          <DisplayColumns
            columns={columns}
            setColumns={setColumns}
            selectedColumns={heads}
            setSelectedColumns={setHeads}
          />
        </Stack>
      </Stack>
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
                    ? (theme) => theme.palette.color.primary
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
