import {
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchBar from "../../components/Affiliates/searchBar";
import ExportSection from "../../components/ui/ExportSection";
import CalendarPopup from "../../components/ui/CalendarPopup";
import DisplayColumns from "../../components/ui/DisplayColumns";
import dayjs from "dayjs";
import { HiOutlineTrash } from "react-icons/hi2";
import CustomTable from "../../components/Firm/Orders/Table";
import DeletePopup from "../../components/ui/DeletePopup";
import CreateCampaignModal from "../../components/Affiliates/Programs/createCampaignModal";
import { FaCheck } from "react-icons/fa";
import { LuCalendarClock, LuPencilLine } from "react-icons/lu";
import { green, grey, yellow } from "@mui/material/colors";

const statutes = [
  { value: "published", label: "Published", color: "green" },
  { value: "draft", label: "Draft", color: "yellow" },
  { value: "scheduled", label: "Scheduled", color: "blue" },
];

const data = [
  {
    name: "name",
    created: "11:05 13 Jun, 2024",
    status: "published",
    scheduled: "-",
    modified: "11:05 13 Jun, 2024",
    published: "11:05 13 Jun, 2024",
  },
  {
    name: "name",
    created: "11:05 13 Jun, 2024",
    status: "draft",
    scheduled: "-",
    modified: "11:05 13 Jun, 2024",
    published: "11:05 13 Jun, 2024",
  },
  {
    name: "name",
    created: "11:05 13 Jun, 2024",
    status: "scheduled",
    scheduled: "11:05 13 Jun, 2024",
    modified: "11:05 13 Jun, 2024",
    published: "11:05 13 Jun, 2024",
  },
  {
    name: "name",
    created: "11:05 13 Jun, 2024",
    status: "published",
    scheduled: "-",
    modified: "11:05 13 Jun, 2024",
    published: "11:05 13 Jun, 2024",
  },
  {
    name: "name",
    created: "11:05 13 Jun, 2024",
    status: "published",
    scheduled: "-",
    modified: "11:05 13 Jun, 2024",
    published: "11:05 13 Jun, 2024",
  },
  {
    name: "name",
    created: "11:05 13 Jun, 2024",
    status: "draft",
    scheduled: "-",
    modified: "11:05 13 Jun, 2024",
    published: "11:05 13 Jun, 2024",
  },
  {
    name: "name",
    created: "11:05 13 Jun, 2024",
    status: "scheduled",
    scheduled: "11:05 13 Jun, 2024",
    modified: "11:05 13 Jun, 2024",
    published: "11:05 13 Jun, 2024",
  },
  {
    name: "name",
    created: "11:05 13 Jun, 2024",
    status: "published",
    scheduled: "-",
    modified: "11:05 13 Jun, 2024",
    published: "11:05 13 Jun, 2024",
  }
];

const headcells = [
  {
    id: "name",
    label: "Name",
    default: true,
    getCell: (row) => row.name,
  },
  {
    id: "created",
    label: "Created",
    default: true,
    getCell: (row) => row.created,
  },
  {
    id: "status",
    label: "Status",
    default: true,
    getCell: (row) => {
      const status = statutes.find((statute) => statute.value === row.status);

      let icon;
      switch (status.value) {
        case 'published':
          icon = <FaCheck style={{ color: green[500] }} />;
          return (
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="flex-start"
            >
              {icon}
              <Typography
                sx={{
                  color: green[500], 
                  lineHeight: "1.2em",
                  marginLeft: 1,
                }}
              >
                {status.label}
              </Typography>
            </Stack>
          );

        case 'draft':
          icon = <LuPencilLine style={{ color: yellow[500] }} />;
          return (
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="flex-start"
            >
              {icon}
              <Typography
                sx={{
                  color: yellow[500],
                  lineHeight: "1.2em",
                  marginLeft: 1,
                }}
              >
                {status.label}
              </Typography>
            </Stack>
          );

        case 'scheduled':
          icon = <LuCalendarClock style={{ color: grey[500] }} />;
          return (
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="flex-start"
            >
              {icon}
              <Typography
                sx={{
                  color: grey[500],
                  lineHeight: "1.2em",
                  marginLeft: 1,
                }}
              >
                {status.label}
              </Typography>
            </Stack>
          );

        default:
          return null;
      }
    },
  },
  {
    id: "scheduled",
    label: "Scheduled",
    default: true,
    getCell: (row) => row.scheduled,
  },
  {
    id: "modified",
    label: "Modified",
    default: true,
    getCell: (row) => row.modified,
  },
  {
    id: "published",
    label: "Published",
    default: true,
    getCell: (row) => row.published,
  },
];

const Announcements = () => {
  const [startDate, setStartDate] = useState(dayjs().startOf("week"));
  const [endDate, setEndDate] = useState(dayjs().endOf("week"));
  const [open, setOpen] = useState(false);
  const [createAnnouncementModal, setCreateAnnouncementModal] = useState(false);
  const [selected, setSelected] = useState([]);

  const [columns, setColumns] = useState(headcells);
  const [heads, setHeads] = React.useState(
    headcells.filter((cell) => cell.default).map((cell) => cell.id)
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filteredHeadcells = columns.filter((cell) => heads.includes(cell.id));
  
  return (
    <Container
      sx={{
        backgroundColor: (theme) => theme.palette.color.bg,
        height: "100%",
        p: "24px",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" sx={{ marginLeft: "10px" }}>
          Announcements
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="flex-end"
          sx={{
            fontSize: "11.5px",
            color: (theme) => theme.palette.color.secondary,
          }}
        >
          <SearchBar />
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
        checkbox={false}
        selected={selected}
        setSelected={setSelected}
      />
      <DeletePopup
        open={open}
        handleClose={handleClose}
        title={"Delete Campaign"}
        description={`Are you sure you want to delete ${selected.length} campaign?`}
      />
      <CreateCampaignModal
        open={createAnnouncementModal}
        handleClose={() => {
          setCreateAnnouncementModal(false);
        }}
      />
    </Container>
  );
};

export default Announcements;