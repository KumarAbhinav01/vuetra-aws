import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React, { useState } from "react";
import Searchbar from "../../components/ui/Searchbar";
import ExportSection from "../../components/ui/ExportSection";
import DisplayColumns from "../../components/ui/DisplayColumns";
import FilterPopup from "../../components/ui/FilterPopup";
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";
import CustomTable from "../../components/Firm/Orders/Table";
import DeletePopup from "../../components/ui/DeletePopup";
import EditPayout from "./EditPayout";

const statutes = [
  { value: "waiting", label: "Waiting", color: "yellow" },
  { value: "active", label: "Active", color: "green" },
  { value: "denied", label: "Denied", color: "red" },
];

const data = [
  {
    id: 1,
    name: "John Doe",
    paidearning: "$1000",
    unpaidearning: "$500",
    paidcommission: "$100",
    unpaidcommission: "$50",
    status: "waiting",
    action: "",
  },
  {
    id: 2,
    name: "Jane Smith",
    paidearning: "$1500",
    unpaidearning: "$700",
    paidcommission: "$150",
    unpaidcommission: "$70",
    status: "active",
    action: "",
  },
  {
    id: 3,
    name: "Alice Johnson",
    paidearning: "$1200",
    unpaidearning: "$600",
    paidcommission: "$120",
    unpaidcommission: "$60",
    status: "denied",
    action: "",
  },
  {
    id: 4,
    name: "Bob Brown",
    paidearning: "$1100",
    unpaidearning: "$550",
    paidcommission: "$110",
    unpaidcommission: "$55",
    status: "waiting",
    action: "",
  },
  {
    id: 5,
    name: "Charlie Davis",
    paidearning: "$1400",
    unpaidearning: "$650",
    paidcommission: "$140",
    unpaidcommission: "$65",
    status: "active",
    action: "",
  },
  {
    id: 6,
    name: "Diana Evans",
    paidearning: "$1300",
    unpaidearning: "$600",
    paidcommission: "$130",
    unpaidcommission: "$60",
    status: "denied",
    action: "",
  },
  {
    id: 7,
    name: "Evan Harris",
    paidearning: "$1250",
    unpaidearning: "$625",
    paidcommission: "$125",
    unpaidcommission: "$62",
    status: "waiting",
    action: "",
  },
  {
    id: 8,
    name: "Fiona Garcia",
    paidearning: "$1550",
    unpaidearning: "$750",
    paidcommission: "$155",
    unpaidcommission: "$75",
    status: "active",
    action: "",
  },
  {
    id: 9,
    name: "George Hall",
    paidearning: "$1100",
    unpaidearning: "$550",
    paidcommission: "$110",
    unpaidcommission: "$55",
    status: "denied",
    action: "",
  },
  {
    id: 10,
    name: "Helen King",
    paidearning: "$1600",
    unpaidearning: "$800",
    paidcommission: "$160",
    unpaidcommission: "$80",
    status: "waiting",
    action: "",
  },
];

const AffiliatePayouts = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [rangeValue, setRangeValue] = useState([20, 37]);
  const [selectedPaidEarning, setSelectedPaidEarning] = useState([]);
  const [selectedPaidCommission, setSelectedPaidCommission] = useState([]);
  const [selected, setSelected] = useState([]);

  const headcells = [
    {
      id: "id",
      label: "ID",
      default: true,
      getCell: (row) => row.id,
    },
    { id: "name", label: "Name", default: true, getCell: (row) => row.name },
    {
      id: "paidearning",
      label: "Paid Earning",
      default: true,
      getCell: (row) => row.paidearning,
    },
    {
      id: "unpaidearning",
      label: "Unpaid Earning",
      default: true,
      getCell: (row) => row.unpaidearning,
    },
    {
      id: "paidcommission",
      label: "Paid Commission",
      default: true,
      getCell: (row) => row.paidcommission,
    },
    {
      id: "unpaidcommission",
      label: "Unpaid Commission",
      default: true,
      getCell: (row) => row.unpaidcommission,
    },
    {
      id: "status",
      label: "Status",
      default: true,
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
            <Box
              sx={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: (theme) => theme.palette.color[status.color],
              }}
            ></Box>
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
      id: "action",
      label: "Action",
      default: true,
      getCell: (row, index) => (
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            color: (theme) => theme.palette.color.secondary,
          }}
        >
          <FiEdit
            onClick={() => {
              setEditOpen(true);
            }}
            size={17}
          />
          <Divider
            orientation="vertical"
            sx={{
              height: "18px",
            }}
          />
          <HiOutlineTrash
            onClick={() => {
              setSelected([index]);
              handleOpen();
            }}
            size={18}
          />
        </Stack>
      ),
    },
  ];

  const [columns, setColumns] = useState(headcells);
  const [heads, setHeads] = React.useState(
    headcells.filter((cell) => cell.default).map((cell) => cell.id)
  );
  const [orderBy, setOrderBy] = React.useState();
  const [order, setOrder] = React.useState("asc");

  const handleRequestSort = (o, property) => {
    setOrder(o);
    setOrderBy(property);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filteredHeadcells = columns.filter((cell) => heads.includes(cell.id));
  return (
    <Container
      sx={{
        p: "24px",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h1">Payouts</Typography>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="flex-end"
          sx={{
            // mb: "24px",
            fontSize: "11.5px",
            color: (theme) => theme.palette.color.secondary,
          }}
        >
          <Searchbar />
          <ExportSection />
          <DisplayColumns
            columns={columns}
            setColumns={setColumns}
            selectedColumns={heads}
            setSelectedColumns={setHeads}
          />
          <FilterPopup
            rangeFilter={{
              label: "Countries",
              ariaLabel: "Countries",
              value: rangeValue,
              onChange: setRangeValue,
            }}
            accordions={[
              {
                title: "Paid Earning",
                defaultExpanded: true,
                items: ["$0 - $1000", "$100 - $300", "$300 - $600"],
                selectedItems: selectedPaidEarning,
                onChange: setSelectedPaidEarning,
              },
              {
                title: "Paid Commission",
                defaultExpanded: true,
                items: ["$0 - $1000", "$100 - $300", "$300 - $500"],
                selectedItems: selectedPaidCommission,
                onChange: setSelectedPaidCommission,
              },
            ]}
          />
        </Stack>
      </Stack>
      {selected.length > 0 && (
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ mt: "24px", ml: "12px" }}
        >
          <Typography variant="caption_500">
            {selected.length} selected
          </Typography>
          <IconButton
            sx={{
              border: "1px solid #E4E4E7",
              borderRadius: "6px",
              color: (theme) => theme.palette.color.red,
            }}
            onClick={handleOpen}
          >
            <HiOutlineTrash size={14} />
          </IconButton>
        </Stack>
      )}
      <CustomTable
        headcells={filteredHeadcells}
        rows={data}
        checkbox={true}
        selected={selected}
        setSelected={setSelected}
        onRequestSort={handleRequestSort}
        order={order}
        orderBy={orderBy}
      />
      <DeletePopup
        open={open}
        handleClose={handleClose}
        title={"Delete Campaign"}
        description={`Are you sure you want to delete ${selected.length} campaign?`}
      />
      <EditPayout open={editOpen} handleClose={() => setEditOpen(false)} />
    </Container>
  );
};

export default AffiliatePayouts;
