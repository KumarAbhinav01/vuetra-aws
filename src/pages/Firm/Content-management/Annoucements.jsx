import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React, { useState } from "react";
import { Add, Edit, Search } from "@mui/icons-material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { BiExport } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FormSelect from "../../../components/ui/FormSelect";
import ToggleColumns from "../../../components/ui/ToggleColumns";
import CustomTable from "../../../components/Firm/Orders/Table";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../../../slices/openModalSlice";
import ViewPayout from "../Payouts/ViewPayout";

const statutes = [
  { value: "posted", label: "Posted", color: "green" },
  { value: "draft", label: "Draft", color: "orange", icon: Edit },
  {
    value: "scheduled",
    label: "Scheduled",
    color: "secondary",
    icon: EditCalendarIcon,
  },
];

const headcells = [
  {
    id: "name",
    label: "Name",
    getCell: (row) => row.name,
  },
  {
    id: "createdAt",
    label: "Created",
    getCell: (row) => row.createdAt,
  },
  {
    id: "type",
    label: "Type",
    getCell: (row) => (
      <Typography
        sx={{
          fontSize: "inherit",
          color: (theme) => theme.palette.color.blue,
          background: (theme) => alpha(theme.palette.color.blue, 0.15),
          p: "3px 14px 4px  14px",
          borderRadius: "7px",
          fontWeight: "400",
          width: "fit-content",
        }}
      >
        {row.type}
      </Typography>
    ),
  },
  {
    id: "status",
    label: "Status",
    getCell: (row) => {
      const status = statutes.find((statute) => statute.value === row.status);
      console.log(status, row.status);
      return (
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent={"center"}
          sx={{
            borderRadius: "7px",
            // minWidth: "91px",
            px: "12px",
            width: "fit-content",

            background: (theme) =>
              alpha(theme.palette.color[status.color], 0.15),
          }}
        >
          {status.icon ? (
            <status.icon
              sx={{
                color: (theme) => theme.palette.color[status.color],
                fontSize: "14px",
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
    id: "modified",
    label: "Modified",
    getCell: (row) => row.modified,
  },

  {
    id: "published",
    label: "Published",
    getCell: (row) => row.published,
  },
  {
    id: "actions",
    label: "Actions",
    getCell: (row) => (
      <IconButton>
        <RemoveRedEyeIcon
          sx={{
            color: (theme) => theme.palette.color.secondary,
            fontSize: "16px",
          }}
        />
      </IconButton>
    ),
  },
];

const data = [
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "posted",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "posted",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "draft",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "scheduled",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "scheduled",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "draft",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "scheduled",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "posted",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "draft",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "draft",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "posted",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "scheduled",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "posted",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "posted",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "draft",

    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Announcement",
  },
];

const Announcement = () => {
  const [selectedColumns, setSelectedColumns] = useState(
    headcells.map((h) => h.id)
  );
  const [status, setStatus] = useState("all");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Paper
      sx={{
        px: "12px",
        py: "24px",
        width: "100%",
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
          pr: "24px",
          color: (theme) => theme.palette.color.secondary,
        }}
      >
        <Search sx={{ fontSize: "16px" }} />
        <Add sx={{ fontSize: "16px" }} />
        <Typography
          sx={{
            color: (theme) => theme.palette.color.secondary,
            fontSize: "11.5px",
            py: "3px",
            px: "8px",
            border: (theme) =>
              `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
          }}
        >
          <BiExport /> Export
        </Typography>
        <FormSelect
          options={[
            { value: "all", label: "All" },
            { value: "posted", label: "Posted" },
            { value: "draft", label: "Draft" },
            { value: "scheduled", label: "Scheduled" },
          ]}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <ToggleColumns
          columns={headcells}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
        />
      </Stack>

      <CustomTable
        headcells={headcells.filter((headcell) =>
          selectedColumns.includes(headcell.id)
        )}
        rows={data.filter((d) => status === d.status || status === "all")}
        onRowClick={(row) => {
          dispatch(toggleOpen());
        }}
        // fontSize="13px"
      />
      <ViewPayout />
    </Paper>
  );
};

export default Announcement;
