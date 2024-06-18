import {
  Button,
  Card,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React, { useState } from "react";
import CustomTable from "../../components/Firm/Orders/Table";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { BiImport } from "react-icons/bi";
import { filterData } from "../../utils/filterByDate";
import SearchInput from "../../components/ui/NewSearch";
import ExportSection from "../../components/ui/ExportSection";
import CalendarPopup from "../../components/ui/CalendarPopup";
import DisplayColumns from "../../components/ui/DisplayColumns";
import dayjs from "dayjs";
import AddUser from "../../components/Icons/AddUser";
import ChevronDownIcon from "../../components/Icons/ChevronDown";

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
    id: "ltv",
    label: "LTV",
    getCell: (row) => row.ltv,
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
    ltv: "$5,000.00",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "2 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    ltv: "$5,000.00",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "2 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    ltv: "$5,000.00",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "11 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    ltv: "$5,000.00",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "11 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    ltv: "$5,000.00",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "11 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    ltv: "$5,000.00",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "11 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    ltv: "$5,000.00",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "11 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    ltv: "$5,000.00",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "11 June 2024, 11:04",
    value: "$6,250",
    customerId: "105003530",
    ltv: "$5,000.00",
  },
];

const Customers = () => {
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
  const [heads, setHeads] = React.useState(headcells.map((cell) => cell.id));

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
          { label: "Total clients", value: "100,000" },
          {
            label: "New clients",
            value: "405",
          },
          {
            label: "Returning clients",
            value: "32",
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

                <Typography variant="h1">{item.value}</Typography>
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
        headcells={columns.filter((cell) => heads.includes(cell.id))}
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

export default Customers;
