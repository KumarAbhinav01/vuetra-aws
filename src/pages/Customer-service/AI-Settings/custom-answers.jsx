import {
  Button,
  Container,
  Stack,
  Tab,
  Tabs,
  Typography,
  alpha,
} from "@mui/material";
import React, { useState } from "react";

import dayjs from "dayjs";
import { HiOutlineTrash } from "react-icons/hi2";
import { Add } from "@mui/icons-material";
import CustomTable from "../../../components/Firm/Orders/Table";
import DeletePopup from "../../../components/ui/DeletePopup";
import Searchbar from "../../../components/ui/Searchbar";
import CalendarPopup from "../../../components/ui/CalendarPopup";
import DisplayColumns from "../../../components/ui/DisplayColumns";

const statutes = [{ value: "draft", label: "Draft", color: "secondary" }];

const data = [
  {
    title: "Title 1",
    status: "draft",
    language: "English",
    sent: "0",
    resolved: "0",
    labelEdited: "2 min ago",
    created: "5 Jun 2024",
  },
  {
    title: "Title 2",
    status: "draft",
    language: "Spanish",
    sent: "0",
    resolved: "0",
    labelEdited: "10 min ago",
    created: "4 Jun 2024",
  },
  {
    title: "Title 3",
    status: "draft",
    language: "French",
    sent: "0",
    resolved: "0",
    labelEdited: "5 min ago",
    created: "3 Jun 2024",
  },
  {
    title: "Title 4",
    status: "draft",
    language: "German",
    sent: "0",
    resolved: "0",
    labelEdited: "1 min ago",
    created: "2 Jun 2024",
  },
  {
    title: "Title 5",
    status: "draft",
    language: "Chinese",
    sent: "0",
    resolved: "0",
    labelEdited: "3 min ago",
    created: "1 Jun 2024",
  },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomAnswers = () => {
  const [startDate, setStartDate] = useState(dayjs().startOf("week"));
  const [endDate, setEndDate] = useState(dayjs().endOf("week"));
  const [open, setOpen] = useState(false);

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
              width: "fit-content",
              px: "8px",

              background: (theme) =>
                alpha(theme.palette.color[status.color], 0.15),
            }}
          >
            <Typography
              sx={{
                color: (theme) => theme.palette.color[status.color],
                lineHeight: "2.2em",
                fontSize: "13px",
              }}
            >
              {status.label}
            </Typography>
          </Stack>
        );
      },
    },
    {
      id: "language",
      label: "Language",
      default: true,
      getCell: (row) => row.language,
    },
    { id: "sent", label: "Sent", default: true, getCell: (row) => row.sent },
    {
      id: "resolved",
      label: "Resolved",
      default: true,
      getCell: (row) => row.resolved,
    },
    {
      id: "labelEdited",
      label: "labelEdited",
      default: true,
      getCell: (row) => row.labelEdited,
    },
    {
      id: "created",
      label: "Created",
      default: true,
      getCell: (row) => row.created,
    },
    {
      id: "action",
      label: "Action",
      default: true,
      getCell: (row, index) => (
        <HiOutlineTrash
          onClick={() => {
            setSelected([index]);
            handleOpen();
          }}
          size={18}
        />
      ),
    },
  ];

  const [columns, setColumns] = useState(headcells);
  const [heads, setHeads] = React.useState(
    headcells.filter((cell) => cell.default).map((cell) => cell.id)
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelected([]);
  };

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
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Live" {...a11yProps(1)} />
          <Tab label="Draft" {...a11yProps(1)} />
          <Tab label="Paused" {...a11yProps(1)} />
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

          <Button
            startIcon={<Add sx={{ fontSize: "14px" }} />}
            sx={{
              background: (theme) => theme.palette.color.primary,
              color: (theme) => theme.palette.color.bg,
              ":hover": {
                background: (theme) => theme.palette.color.primary,
              },
              py: 0.4,
              fontSize: "11.5px",
              fontWeight: 400,
            }}
          >
            Create Answer
          </Button>
        </Stack>
      </Stack>

      <CustomTable
        headcells={filteredHeadcells}
        rows={data}
        checkbox={false}
        selected={selected}
        setSelected={setSelected}
      />
      <DeletePopup
        open={open}
        handleClose={handleClose}
        title={"Delete Answer"}
        description={`Are you sure you want to delete ${selected.length} answer?`}
      />
    </Container>
  );
};

export default CustomAnswers;
