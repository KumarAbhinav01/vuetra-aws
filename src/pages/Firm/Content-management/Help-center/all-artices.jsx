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
import { BiExport } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FormSelect from "../../../../components/ui/FormSelect";
import ToggleColumns from "../../../../components/ui/ToggleColumns";
import CustomTable from "../../../../components/Firm/Orders/Table";
import { filterData } from "../../../../utils/filterByDate";
import HeroSection from "./HeroSection";

const statutes = [
  { value: "posted", label: "Posted", color: "green" },
  { value: "draft", label: "Draft", color: "orange", icon: Edit },
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
    id: "collection",
    label: "Collection",
    getCell: (row) => row.collection,
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
    id: "type",
    label: "Type",
    getCell: (row) => row.type,
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
    collection: "Collection",
    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Private",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "posted",
    collection: "Collection",
    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Public",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "draft",
    collection: "Collection",
    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Public",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "draft",
    collection: "Collection",
    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Private",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "posted",
    collection: "Collection",
    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Private",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "draft",
    collection: "Collection",
    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Private",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "posted",
    collection: "Collection",
    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Private",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "posted",
    collection: "Collection",
    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Private",
  },
  {
    name: "Name",
    createdAt: "11:05 5 Apr, 2024",
    status: "draft",
    collection: "Collection",
    modified: "11:05 5 Apr, 2024",
    published: "11:05 5 Apr, 2024",
    type: "Private",
  },
];

const AllArticles = () => {
  const [selectedColumns, setSelectedColumns] = useState(
    headcells.map((h) => h.id)
  );
  const [type, setType] = useState("Public");
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
            { value: "Public", label: "Public" },
            { value: "Private", label: "Private" },
          ]}
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <ToggleColumns
          columns={headcells}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
        />
      </Stack>

      <HeroSection />
      <CustomTable
        headcells={headcells.filter((headcell) =>
          selectedColumns.includes(headcell.id)
        )}
        rows={data.filter((d) => type === d.type)}
        onRowClick={(row) => {
          navigate(`/firm/customers/${row.name}`);
        }}
        fontSize="13px"
      />
    </Paper>
  );
};

export default AllArticles;
