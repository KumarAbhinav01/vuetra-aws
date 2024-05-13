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
import HeroSection from "../Help-center/HeroSection";
import { LuPlaySquare } from "react-icons/lu";
import AddMenu from "./Menu";
import CollapsibleTable from "../../../../components/ui/Collapsibletable";
import { FaRegFolderClosed } from "react-icons/fa6";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const statutes = [
  { value: "published", label: "Published", color: "green" },
  { value: "draft", label: "Draft", color: "orange", icon: Edit },
];

const headcells = [
  {
    id: "name",
    label: "Collection Name",
    getCell: (row) => (
      <Stack direction="row" spacing={1} alignItems="center">
        <FolderOutlinedIcon
          sx={{
            color: (theme) => theme.palette.color.blue,
            fontSize: "22px",
          }}
        />
        <Typography variant="h6">{row.name}</Typography>
      </Stack>
    ),
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
    id: "source",
    label: "Source",
    getCell: (row) => row.source,
  },

  {
    id: "amount",
    label: "Amount",
    getCell: (row) => row.amount,
  },
];

const data = [
  {
    name: "Collection name",
    amount: 21,
    collection: "Collection",
    status: "published",
    source: "Source",
    children: [
      {
        name: "Collection name",
        amount: 21,
        collection: "Collection",
        status: "published",
        source: "Source",
      },
      {
        name: "Collection name",
        amount: 21,
        collection: "Collection",
        status: "published",
        source: "Source",
      },
      {
        name: "Collection name",
        amount: 21,
        collection: "Collection",
        status: "published",
        source: "Source",
      },
      {
        name: "Collection name",
        amount: 21,
        collection: "Collection",
        status: "published",
        source: "Source",
      },
      {
        name: "Collection name",
        amount: 21,
        collection: "Collection",
        status: "published",
        source: "Source",
      },
    ],
  },
  {
    name: "Collection name",
    amount: 21,
    collection: "Collection",
    status: "draft",
    source: "Source",
    children: [
      {
        name: "Collection name",
        amount: 21,
        collection: "Collection",
        status: "published",
        source: "Source",
      },
    ],
  },
  {
    name: "Collection name",
    amount: 21,
    collection: "Collection",
    status: "published",
    source: "Source",
    children: [
      {
        name: "Collection name",
        amount: 21,
        collection: "Collection",
        status: "published",
        source: "Source",
      },
    ],
  },
  {
    name: "Collection name",
    amount: 21,
    collection: "Collection",
    status: "draft",
    source: "Source",
    children: [
      {
        name: "Collection name",
        amount: 21,
        collection: "Collection",
        status: "published",
        source: "Source",
      },
    ],
  },
  {
    name: "Collection name",
    amount: 21,
    collection: "Collection",
    status: "published",
    source: "Source",
    children: [
      {
        name: "Collection name",
        amount: 21,
        collection: "Collection",
        status: "published",
        source: "Source",
      },
    ],
  },
];

const Collections = () => {
  const [selectedColumns, setSelectedColumns] = useState(
    headcells.map((h) => h.id)
  );
  const [status, setStatus] = useState("all");
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
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: "24px" }}
      >
        <Typography variant="heading">Manage collections</Typography>
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
          <FormSelect
            options={[
              { value: "all", label: "All" },
              { value: "published", label: "Published" },
              { value: "draft", label: "Draft" },
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
      </Stack>
      <CollapsibleTable
        headcells={headcells.filter((headcell) =>
          selectedColumns.includes(headcell.id)
        )}
        rows={data.filter((d) => status === d.status || status === "all")}
        // onRowClick={(row) => {
        //   navigate(`/firm/customers/${row.name}`);
        // }}
        fontSize="13px"
      />
    </Paper>
  );
};

export default Collections;
