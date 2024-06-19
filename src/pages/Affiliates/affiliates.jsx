import { Box, Button, Paper, Stack, Typography, alpha, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import CustomTable from "../../components/Firm/Orders/Table";
import { Search } from "@mui/icons-material";
import { BiExport, BiImport } from "react-icons/bi";
import ToggleColumns from "../../components/ui/ToggleColumns";
import { useNavigate } from "react-router-dom";
import FormSelect from "../../components/ui/FormSelect";
import { filterData } from "../../utils/filterByDate";
import ExportSection from "../../components/ui/ExportSection";
import DisplayColumns from "../../components/ui/DisplayColumns";
import SmallSearchBar from "../../components/Affiliates/smallSearchBar";

const headcells = [
  {
    id: "name",
    label: "Name",
    getCell: (row) => row.name,
  },
  {
    id: "company",
    label: "Company",
    getCell: (row) => row.company,
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
    id: "parent",
    label: "Parent",
    getCell: (row) => row.parent,
  },
  {
    id: "createdAt",
    label: "Created",
    getCell: (row) => row.createdAt,
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
    createdAt: "24 Apr 2024, 11:04",
    parent: "parent",
    company: "Company",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "24 Apr 2024, 11:04",
    parent: "parent",
    company: "Company",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "24 Apr 2024, 11:04",
    parent: "parent",
    company: "Company",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "2 May 2024, 11:04",
    parent: "parent",
    company: "Company",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "2 May 2024, 11:04",
    parent: "parent",
    company: "Company",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "2 May 2024, 11:04",
    parent: "parent",
    company: "Company",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "2 May 2024, 11:04",
    parent: "parent",
    company: "Company",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "2 May 2024, 11:04",
    parent: "parent",
    company: "Company",
    account: "account",
  },
  {
    name: "Jens V.",
    country: "NL",
    email: "example@gmail.com",
    phone: "+31 433242455",
    createdAt: "2 May 2024, 11:04",
    parent: "parent",
    company: "Company",
    account: "account",
  },
];

const Customers = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [columns, setColumns] = useState(headcells);
  const [selectedColumns, setSelectedColumns] = useState(columns.map((col) => col.id));
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
        direction={isSmallScreen ? "column" : "row"}
        justifyContent={isSmallScreen ? "flex-start" : "flex-end"}
        alignItems={isSmallScreen ? "flex-start" : "center"}
        gap={2}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
          }}
        >
          <Typography variant="subtitle1" mb={2}>
            {data.length} affiliates match of {data.length}
          </Typography>
        </Box>
        <Stack
          direction="row"
          spacing={isSmallScreen? 1: 2}
          alignItems="center"
          justifyContent="flex-end"
          sx={{
            mb: "24px",
            fontSize: "11.5px",
            pr: "24px",
            color: (theme) => theme.palette.color.secondary,
          }}
        >
          <SmallSearchBar />
          <ExportSection />
          <ExportSection isImport={true} />
          <DisplayColumns
            columns={columns}
            setColumns={setColumns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
            title={"Active"}
          />
          <DisplayColumns
            columns={columns}
            setColumns={setColumns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
          />
        </Stack>
      </Stack>
      <CustomTable
        headcells={columns.filter((col) => selectedColumns.includes(col.id))}
        rows={data}
        onRowClick={(row) => {
          navigate(`/firm/customers/${row.name}`);
        }}
        fontSize="13px"
      />
    </Paper>
  );
};

export default Customers;