import { Box, Paper, Stack, Typography, alpha } from "@mui/material";
import React, { useState } from "react";
import { Add, Edit, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import ToggleColumns from "../../components/ui/ToggleColumns";
import CollapsibleTable from "../../components/ui/Collapsibletable";
import FormSelect from "../../components/ui/FormSelect";
import NewSearch from "../../components/ui/NewSearch";
import FilterPopup from "../../components/ui/FilterPopup";
import ExportSection from "../../components/ui/ExportSection";
import DisplayColumns from "../../components/ui/DisplayColumns";
import SearchInput from "../../components/ui/NewSearch";

const statutes = [
  { value: "published", label: "Published", color: "green" },
  { value: "draft", label: "Draft", color: "orange", icon: Edit },
];

const headcells = [
  {
    id: "name",
    label: "Challenge",
    getCell: (row) => <Typography variant="h6">{row.name}</Typography>,
  },

  {
    id: "status",
    label: "Status",
    getCell: (row) => {
      const status = statutes.find((statute) => statute.value === row.status);
      return (
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent={"center"}
          sx={{
            borderRadius: "7px",
            width: "91px",

            background: (theme) =>
              alpha(theme.palette.color[status.color], 0.15),
          }}
        >
          {status.icon ? (
            <status.icon
              sx={{
                color: (theme) => theme.palette.color[status.color],
                fontSize: "16px",
              }}
            />
          ) : (
            <Box
              sx={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: (theme) => theme.palette.color[status.color],
              }}
            ></Box>
          )}
          <Typography
            sx={{
              color: (theme) => theme.palette.color[status.color],
              lineHeight: "2.2em",
            }}
          >
            {status.label}
          </Typography>
        </Stack>
      );
    },
  },
  {
    id: "activeDiscounts",
    label: "Active Discounts",
    getCell: (row) => row.activeDiscounts,
  },

  {
    id: "price",
    label: "Price",
    getCell: (row) => row.price,
  },
];
const headcells2 = [
  {
    id: "name",
    label: "Challenge",
    getCell: (row) => row.name,
  },

  {
    id: "status",
    label: "Status",
    getCell: (row) => {
      const status = statutes.find((statute) => statute.value === row.status);
      return (
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent={"center"}
          sx={{
            borderRadius: "7px",
            width: "91px",

            background: (theme) =>
              alpha(theme.palette.color[status.color], 0.15),
          }}
        >
          {status.icon ? (
            <status.icon
              sx={{
                color: (theme) => theme.palette.color[status.color],
                fontSize: "16px",
              }}
            />
          ) : (
            <Box
              sx={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: (theme) => theme.palette.color[status.color],
              }}
            ></Box>
          )}
          <Typography
            sx={{
              color: (theme) => theme.palette.color[status.color],
              lineHeight: "2.2em",
            }}
          >
            {status.label}
          </Typography>
        </Stack>
      );
    },
  },
  {
    id: "activeDiscounts",
    label: "Active Discounts",
    getCell: (row) => row.activeDiscounts,
  },

  {
    id: "price",
    label: "Price",
    getCell: (row) => row.price,
  },
];

const data = [
  {
    name: "Challenge 1",
    status: "published",
    activeDiscounts: 2,
    price: "",
    children: [
      {
        name: "1M",
        status: "published",
        activeDiscounts: 2,
        price: "$1500.50",
      },
      {
        name: "500K",
        status: "published",
        activeDiscounts: 2,
        price: "$1500.50",
      },
      {
        name: "250K",
        status: "published",
        activeDiscounts: 2,
        price: "$1500.50",
      },
      {
        name: "100K",
        status: "published",
        activeDiscounts: 2,
        price: "$1500.50",
      },
      {
        name: "50K",
        status: "published",
        activeDiscounts: 2,
        price: "$1500.50",
      },
    ],
  },
  {
    name: "Challenge 2",
    status: "published",
    activeDiscounts: 2,
    price: "",
    children: [
      {
        name: "Challenge",
        status: "published",
        activeDiscounts: 2,
        price: "$1500.50",
      },
    ],
  },
  {
    name: "Challenge 3",
    status: "published",
    activeDiscounts: 2,
    price: "",
    children: [
      {
        name: "Challenge",
        status: "published",
        activeDiscounts: 2,
        price: "$1500.50",
      },
    ],
  },
  {
    name: "Challenge 4",
    status: "published",
    activeDiscounts: 2,
    price: "",
    children: [
      {
        name: "Challenge",
        status: "published",
        activeDiscounts: 2,
        price: "$1500.50",
      },
    ],
  },
  {
    name: "Challenge 5",
    status: "published",
    activeDiscounts: 2,
    price: "",
    children: [
      {
        name: "Challenge",
        activeDiscounts: 21,
        collection: "Collection",
        status: "published",
        source: "Source",
      },
    ],
  },
];

const Challenges = () => {
  const [selectedColumns, setSelectedColumns] = useState(
    headcells.map((h) => h.id)
  );
  const [activeDiscounts, setActiveDiscounts] = useState([20, 37]);
  const [columns, setColumns] = useState(headcells);
  const [heads, setHeads] = React.useState(
    headcells.filter((cell) => cell.default).map((cell) => cell.id)
  );

  return (
    <Paper
      sx={{
        px: "12px",
        py: "24px",
        width: "100%",
        background: "transparent",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: "24px" }}
      >
        <Typography
          variant="heading"
          sx={{
            color: (theme) => theme.palette.color.tertiary,
          }}
        >
          Challenges
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="flex-end"
          sx={{
            mb: "24px",
            fontSize: "11.5px",
            pr: "24px",
            color: (theme) => theme.palette.color.secondary,
          }}
        >
          <SearchInput />
          <ExportSection />
          <DisplayColumns
            columns={columns}
            setColumns={setColumns}
            selectedColumns={heads}
            setSelectedColumns={setHeads}
          />
          <FilterPopup
            rangeFilter={{
              label: "Amount",
              ariaLabel: "Amount",
              value: activeDiscounts,
              onChange: setActiveDiscounts,
            }}
          />
        </Stack>
      </Stack>
      <CollapsibleTable
        headcells={headcells.filter((headcell) =>
          selectedColumns.includes(headcell.id)
        )}
        rows={data}
        headcells2={headcells2}
        // onRowClick={(row) => {
        //   navigate(`/firm/customers/${row.name}`);
        // }}
        fontSize="13px"
      />
    </Paper>
  );
};

export default Challenges;
