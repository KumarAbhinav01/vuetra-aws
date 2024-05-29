import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  alpha,
} from "@mui/material";
import React, { useState } from "react";
import Searchbar from "../../components/ui/Searchbar";
import ExportSection from "../../components/ui/ExportSection";
import CalendarPopup from "../../components/ui/CalendarPopup";
import DisplayColumns from "../../components/ui/DisplayColumns";
import FilterPopup from "../../components/ui/FilterPopup";
import dayjs from "dayjs";
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";
import CustomTable from "../../components/Firm/Orders/Table";
import { Add } from "@mui/icons-material";
import DeletePopup from "../../components/ui/DeletePopup";

const statutes = [
  { value: "planned", label: "Planned", color: "yellow" },
  { value: "rightnow", label: "Right Now", color: "green" },
];

const headcells = [
  {
    id: "title",
    label: "Title",
    default: true,
    getCell: (row) => row.title,
  },
  {
    id: "description",
    label: "Description",
    default: true,
    getCell: (row) => row.description,
  },
  { id: "name", label: "Name", default: true, getCell: (row) => row.name },
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
    getCell: (row) => (
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          color: (theme) => theme.palette.color.secondary,
        }}
      >
        <FiEdit size={17} />
        <Divider
          orientation="vertical"
          sx={{
            height: "18px",
          }}
        />
        <HiOutlineTrash size={18} />
      </Stack>
    ),
  },
];

const data = [
  {
    title: "Title1",
    description: "Initial phase of Project Alpha",
    name: "John Doe",
    status: "planned",
    action: "",
  },
  {
    title: "Title2",
    description: "Beta testing phase",
    name: "Jane Smith",
    status: "rightnow",
    action: "",
  },
  {
    title: "Title3",
    description: "Research and development",
    name: "Alice Johnson",
    status: "planned",
    action: "",
  },
  {
    title: "Title4",
    description: "Marketing campaign",
    name: "Bob Brown",
    status: "rightnow",
    action: "",
  },
  {
    title: "Title5",
    description: "Client feedback collection",
    name: "Charlie Davis",
    status: "planned",
    action: "",
  },
  {
    title: "Title6",
    description: "Implementation phase",
    name: "Diana Evans",
    status: "rightnow",
    action: "",
  },
  {
    title: "Title7",
    description: "Design phase",
    name: "Evan Harris",
    status: "planned",
    action: "",
  },
  {
    title: "Title8",
    description: "User training",
    name: "Fiona Garcia",
    status: "rightnow",
    action: "",
  },
  {
    title: "Title9",
    description: "Testing and QA",
    name: "George Hall",
    status: "planned",
    action: "",
  },
  {
    title: "Title10",
    description: "Final review",
    name: "Helen King",
    status: "rightnow",
    action: "",
  },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Announcements = () => {
  const [startDate, setStartDate] = useState(dayjs().startOf("week"));
  const [endDate, setEndDate] = useState(dayjs().endOf("week"));
  const [open, setOpen] = useState(false);
  const [rangeValue, setRangeValue] = useState([20, 37]);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState([]);
  const [value, setValue] = React.useState(0);
  const [selected, setSelected] = useState([]);

  const headcells = [
    {
      id: "title",
      label: "Title",
      default: true,
      getCell: (row) => row.title,
    },
    {
      id: "description",
      label: "Description",
      default: true,
      getCell: (row) => row.description,
    },
    { id: "name", label: "Name", default: true, getCell: (row) => row.name },
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
          <FiEdit size={17} />
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filteredHeadcells = columns.filter((cell) => heads.includes(cell.id));
  return (
    <Container
      sx={{
        p: "24px",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Historical" {...a11yProps(0)} />
          <Tab label="Planned" {...a11yProps(1)} />
        </Tabs>
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
          <FilterPopup
            rangeFilter={{
              label: "Countries",
              ariaLabel: "Countries",
              value: rangeValue,
              onChange: setRangeValue,
            }}
            accordions={[
              {
                title: "Customer Id",
                defaultExpanded: true,
                items: [
                  "111110 - 000001",
                  "111110 - 000002",
                  "111110 - 000003",
                ],
                selectedItems: selectedCustomerIds,
                onChange: setSelectedCustomerIds,
              },
              {
                title: "Voilation Date",
                defaultExpanded: true,
                items: ["0 - 10", "10 - 20", "20 - 30"],
                selectedItems: selectedOrderStatus,
                onChange: setSelectedOrderStatus,
              },
            ]}
          />
          <Button
            startIcon={<Add sx={{ fontSize: "14px" }} />}
            sx={{
              color: "white",
              background: (theme) => theme.palette.color.lightText,
              ":hover": {
                background: (theme) => theme.palette.color.lightText,
              },
              py: 0.5,
              fontSize: "11.5px",
              fontWeight: 400,
            }}
          >
            Create Announcements
          </Button>
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
      />
      <DeletePopup
        open={open}
        handleClose={handleClose}
        title={"Delete Campaign"}
        description={`Are you sure you want to delete ${selected.length} campaign?`}
      />
    </Container>
  );
};

export default Announcements;
