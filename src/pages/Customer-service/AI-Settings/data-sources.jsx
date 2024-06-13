import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Stack,
  Tooltip,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React, { useState } from "react";

import HelpIcon from "@mui/icons-material/Help";
import { Add, Delete, Settings } from "@mui/icons-material";
import { HiOutlineTrash } from "react-icons/hi2";
import CustomSelect from "../../../components/ui/Select";
import { FiBookOpen, FiSearch } from "react-icons/fi";
import { BsGlobe, BsThreeDots } from "react-icons/bs";
import { FaLink, FaRegFile } from "react-icons/fa6";
import FilterPopup from "../../../components/ui/FilterPopup";
import CustomTable from "../../../components/Firm/Orders/Table";
import DeletePopup from "../../../components/ui/DeletePopup";
import NewDataSource from "../../../components/AI-Settings/Overview/NewDataSource";
import ManageResourcesPopup from "../../../components/AI-Settings/Data-sources/ManageResources";

const StyledInput = styled(InputBase)({
  //   border: 0,
  outline: "none",
  backgroundColor: "transparent",
  // color: "inherit",
  fontSize: "13px",
  fontWeight: 500,

  "&::placeholder": {
    color: "inherit",
    fontSize: "12px",
    fontWeight: 500,
  },
  "& input": {
    fontSize: "13px",
    fontWeight: 500,
    color: "inherit",
  },
});

const statuses = [{ value: "used", label: "Used", color: "green" }];

const headcells = [
  { id: "title", label: "Title", getCell: (row) => row.title },
  {
    id: "status",
    label: "Status",
    getCell: (row) => {
      const status = statuses.find((status) => status.value === row.status);
      return (
        <Box
          sx={{
            background: (theme) =>
              alpha(theme.palette.color[status.color], 0.1),
            color: status.color,
            borderRadius: "8px",
            padding: "4px 10px",
            fontSize: "14px",
            width: "fit-content",
          }}
        >
          {status.label}
        </Box>
      );
    },
  },
  {
    id: "source",
    label: "Source",
    getCell: (row) => row.source,
  },
  {
    id: "timeToAnswer",
    label: "Time to answer",
    getCell: (row) => row.timeToAnswer,
  },
  {
    id: "resolved",
    label: "Resolved",
    getCell: (row) => row.resolved,
  },
  {
    id: "lastEdited",
    label: "Last edited",
    getCell: (row) => row.lastEdited,
  },

  {
    id: "action",
    label: "Action",
    getCell: (row) => (
      <IconButton
        sx={{
          color: (theme) => theme.palette.color.secondary,
        }}
      >
        <BsThreeDots />
      </IconButton>
    ),
  },
];

const data = [
  {
    title: "Title 1",
    status: "used",
    source: "Source 1",
    timeToAnswer: "1h",
    resolved: "Yes",
    lastEdited: "1h ago",
  },
];

const items = [
  {
    title: "Articles",
    value: "33",
    description: "out of 33",
    tooltip: "Articles",
  },
  {
    title: "External page",
    value: "4",
    description: "from 1 source",
    tooltip: "External page",
  },
  {
    title: "Snippet",
    value: "11",
    description: "out of 1",
    tooltip: "Snippet",
  },
  {
    title: "Files",
    value: "11",
    description: "out of 1",
    tooltip: "Files",
  },
];

const DataSources = () => {
  const [rangeValue, setRangeValue] = React.useState([0, 100]);
  const [selectedCustomerIds, setSelectedCustomerIds] = React.useState([]);
  const [selectedOrderStatus, setSelectedOrderStatus] = React.useState([]);
  const [open, setOpen] = useState(false);
  const [newDataSourceOpen, setNewDataSourceOpen] = React.useState(false);
  const [manageResourcesOpen, setManageResourcesOpen] = React.useState(false);
  const [popupType, setPopupType] = React.useState("");
  return (
    <Paper
      sx={{
        p: "24px",
      }}
    >
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                width: "100%",
                border: (theme) => `1px solid ${theme.palette.color.border}`,
                background: (theme) => theme.palette.color.bg2,
                borderRadius: "6px",
                overflow: "hidden",
                padding: "14px",
              }}
            >
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="caption_500">{item.title}</Typography>
                  <Tooltip title={item.tooltip}>
                    <HelpIcon
                      sx={{
                        fontSize: "13px",
                        cursor: "pointer",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </Tooltip>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: "500",
                      color: (theme) => theme.palette.color.lightText,
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography variant="caption_500">
                    {item.description}
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={1} sx={{ mt: "24px" }}>
        <Typography variant="subtitle1">Latest source in progress:</Typography>
        <Stack
          spacing={2}
          sx={{
            p: "16px",
            border: (theme) => `1px solid ${theme.palette.color.border}`,
            borderLeft: (theme) => `4px solid ${theme.palette.color.blue}`,
            borderRadius: "8px",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  borderRadius: "50%",
                  background: (theme) => alpha(theme.palette.color.blue, 0.15),

                  padding: "12px 12px 10px 12px",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path
                    d="M 9.82 0.198 C 10.526 0.068 11.255 0 12 0 C 18.627 0 24 5.373 24 12 C 24 18.627 18.627 24 12 24 C 11.269 24 10.539 23.934 9.82 23.802 C 9.463 23.743 9.166 23.497 9.042 23.157 C 8.919 22.817 8.988 22.437 9.224 22.163 C 9.46 21.889 9.826 21.763 10.18 21.835 C 10.77 21.943 11.378 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 C 11.378 2 10.77 2.057 10.18 2.165 C 9.826 2.237 9.46 2.111 9.224 1.837 C 8.988 1.563 8.919 1.183 9.042 0.843 C 9.166 0.503 9.463 0.257 9.82 0.198 Z M 7.365 1.97 C 7.498 2.2 7.534 2.473 7.466 2.729 C 7.397 2.986 7.23 3.204 7 3.337 C 5.636 4.127 4.477 5.227 3.616 6.547 C 3.314 7.01 2.694 7.14 2.231 6.838 C 1.768 6.536 1.638 5.916 1.94 5.453 C 2.973 3.87 4.364 2.552 6 1.606 C 6.23 1.473 6.503 1.437 6.759 1.505 C 7.016 1.574 7.234 1.741 7.367 1.971 Z M 17.685 8.272 C 17.878 8.454 17.99 8.706 17.998 8.971 C 18.005 9.236 17.907 9.493 17.725 9.686 L 11.293 16.492 C 10.99 16.815 10.567 16.999 10.124 16.999 C 9.681 16.999 9.258 16.815 8.955 16.492 L 6.272 13.654 C 5.893 13.252 5.91 12.619 6.312 12.24 C 6.714 11.861 7.347 11.878 7.726 12.28 L 10.124 14.817 L 16.272 8.312 C 16.454 8.119 16.706 8.007 16.971 7.999 C 17.236 7.992 17.493 8.09 17.686 8.272 Z M 10.41 15.12 Z M 1.512 8.526 C 2.049 8.651 2.384 9.188 2.259 9.726 C 1.912 11.222 1.913 12.778 2.26 14.274 C 2.385 14.812 2.05 15.35 1.511 15.475 C 0.973 15.599 0.436 15.264 0.311 14.726 C -0.105 12.932 -0.105 11.068 0.311 9.274 C 0.436 8.736 0.973 8.401 1.511 8.526 Z M 2.232 17.162 C 2.454 17.017 2.725 16.966 2.985 17.021 C 3.245 17.076 3.472 17.231 3.617 17.454 C 4.478 18.774 5.636 19.873 7 20.663 C 7.478 20.94 7.641 21.551 7.365 22.029 C 7.088 22.508 6.476 22.671 5.998 22.394 C 4.362 21.447 2.972 20.129 1.94 18.546 C 1.795 18.324 1.745 18.053 1.799 17.794 C 1.854 17.534 2.01 17.307 2.232 17.162 Z"
                    fill="rgb(140, 173, 255)"
                  ></path>
                </svg>
              </Box>
              <Stack spacing={1}>
                <Typography variant="h4">https://www.ftmo.com</Typography>
                <Typography variant="caption_500">
                  We are indexing your website and collecting your support
                  content
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                sx={{
                  background: (theme) => alpha(theme.palette.color.blue, 0.15),
                  color: (theme) => theme.palette.color.blue,
                  borderRadius: "4px",
                  padding: "4px 8px",
                  fontSize: "14px",
                }}
              >
                In progress
              </Typography>
              <Box
                sx={{
                  color: (theme) => theme.palette.color.red,
                  cursor: "pointer",
                }}
                onClick={() => setOpen(true)}
              >
                <HiOutlineTrash size={18} />
              </Box>
            </Stack>
          </Stack>
          <Stack spacing={1} sx={{ width: "100%" }} direction="row">
            <Box
              sx={{
                width: "100%",
                background: (theme) => alpha(theme.palette.color.blue, 1),
                borderRadius: "2px",
                height: "8px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                background: (theme) => alpha(theme.palette.color.blue, 1),
                borderRadius: "2px",
                height: "8px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                background: (theme) => alpha(theme.palette.color.blue, 0.15),
                borderRadius: "2px",
                height: "8px",
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                background: (theme) => alpha(theme.palette.color.blue, 0.15),
                borderRadius: "2px",
                height: "8px",
              }}
            ></Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={1} sx={{ mt: "24px" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            sx={{
              px: "12px",
            }}
          >
            <StyledInput
              placeholder="Search"
              sx={{
                color: (theme) => theme.palette.color.secondary,
                border: (theme) => `1px solid ${theme.palette.color.border}`,
                padding: "4px 12px",
              }}
              startAdornment={
                <InputAdornment
                  position="start"
                  sx={{ color: (theme) => theme.palette.color.secondary }}
                >
                  <FiSearch size={16} />
                </InputAdornment>
              }
            />
          </Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CustomSelect
              label="All content sources"
              options={[
                {
                  label: "Articale",
                  value: "articale",
                  icon: <FiBookOpen size={14} />,
                },
                {
                  label: "External",
                  value: "external",
                  icon: <BsGlobe size={14} />,
                },
                {
                  label: "Snippet",
                  value: "snippet",
                  icon: <FaRegFile size={14} />,
                },
                { label: "PDF", value: "pdf", icon: <FaLink size={14} /> },
              ]}
              value="articale"
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
                  title: "Validation Date",
                  defaultExpanded: true,
                  items: ["0 - 10", "10 - 20", "20 - 30"],
                  selectedItems: selectedOrderStatus,
                  onChange: setSelectedOrderStatus,
                },
              ]}
              height="100%"
            />
            <Button
              startIcon={<Add sx={{ fontSize: "14px" }} />}
              sx={{
                py: 0.4,
                fontSize: "13.78px",
                fontWeight: 600,
              }}
              onClick={() => setNewDataSourceOpen(true)}
            >
              New sources
            </Button>
            <Button
              startIcon={
                <Settings
                  sx={{
                    fontSize: "18px !important",
                  }}
                />
              }
              sx={{
                py: 0.4,
                fontSize: "13.78px",
                fontWeight: 600,
                background: (theme) =>
                  alpha(theme.palette.color.secondary, 0.15),
                color: (theme) =>
                  theme.palette.mode === "dark"
                    ? theme.palette.color.secondary
                    : theme.palette.color.primary,
                ":hover": {
                  background: (theme) =>
                    alpha(theme.palette.color.secondary, 0.15),
                },
              }}
              onClick={() => setManageResourcesOpen(true)}
            >
              Manage sources
            </Button>
          </Stack>
        </Stack>
        <CustomTable
          headcells={headcells}
          checkbox={false}
          rows={data}
          fontSize="13px"
        />
      </Stack>
      <DeletePopup
        open={open}
        handleClose={() => setOpen(false)}
        title={"Stop syncing this source?"}
        description={`This action is permenant and can't be undo. we'll stop indexing your website. This source and all the synced content will be deleted and no longer by admin.`}
      />
      <NewDataSource
        open={newDataSourceOpen}
        setOpen={setNewDataSourceOpen}
        setPopupType={setPopupType}
      />
      <ManageResourcesPopup
        open={manageResourcesOpen}
        setOpen={setManageResourcesOpen}
        handleClose={() => setManageResourcesOpen(false)}
      />
    </Paper>
  );
};

export default DataSources;
