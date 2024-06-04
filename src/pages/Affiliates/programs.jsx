import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import { FiEdit } from "react-icons/fi";
import FormSelect from "../../components/ui/FormSelect";
import { BiExport } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Search } from "@mui/icons-material";
import { HiOutlineTrash } from "react-icons/hi2";
import CustomTable from "../../components/Firm/Orders/Table";
import DeletePopup from "../../components/ui/DeletePopup";
import CreateCampaignModal from "../../components/Affiliates/Programs/createCampaignModal";
import { useNavigate } from "react-router-dom";

const statutes = [
  { value: "active", label: "Active", color: "green" },
  { value: "deactive", label: "Deactive", color: "red" },
];

const defaults = [
  { value: "yes", label: "Yes", color: "green" },
  { value: "no", label: "No", color: "red" },
];

const headcells = [
  {
    id: "id",
    label: "Id",
    default: true,
    getCell: (row) => row.id,
  },
  {
    id: "campaignName",
    label: "Campaign Name",
    default: true,
    getCell: (row) => row.title,
  },
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
    id: 95482164,
    campaignName: "Campaign1",
    title: "Frist Campaign",
    perClick: "$0.05",
    perSale: "30%/10%",
    description: "Initial phase of Project Alpha",
    name: "John Doe",
    status: "active",
    default: "yes",
    createDate: "11:05 5 Apr, 2024",
    action: "",
  },
  {
    id: 95482164,
    campaignName: "Campaign1",
    title: "Frist Campaign",
    perClick: "$0.05",
    perSale: "30%/10%",
    description: "Beta testing phase",
    name: "Jane Smith",
    status: "deactive",
    default: "no",
    createDate: "11:05 5 Apr, 2024",
    action: "",
  },
  {
    id: 95482164,
    campaignName: "Campaign1",
    title: "Frist Campaign",
    perClick: "$0.05",
    perSale: "30%/10%",
    description: "Research and development",
    name: "Alice Johnson",
    status: "active",
    default: "yes",
    createDate: "11:05 5 Apr, 2024",
    action: "",
  },
  {
    id: 95482164,
    campaignName: "Campaign1",
    title: "Frist Campaign",
    perClick: "$0.05",
    perSale: "30%/10%",
    description: "Marketing campaign",
    name: "Bob Brown",
    status: "deactive",
    default: "no",
    createDate: "11:05 5 Apr, 2024",
    action: "",
  },
  {
    id: 95482164,
    campaignName: "Campaign1",
    title: "Frist Campaign",
    perClick: "$0.05",
    perSale: "30%/10%",
    description: "Client feedback collection",
    name: "Charlie Davis",
    status: "active",
    default: "yes",
    createDate: "11:05 5 Apr, 2024",
    action: "",
  },
  {
    id: 95482164,
    campaignName: "Campaign1",
    title: "Frist Campaign",
    perClick: "$0.05",
    perSale: "30%/10%",
    description: "Implementation phase",
    name: "Diana Evans",
    status: "deactive",
    default: "no",
    createDate: "11:05 5 Apr, 2024",
    action: "",
  },
  {
    id: 95482164,
    campaignName: "Campaign1",
    title: "Frist Campaign",
    perClick: "$0.05",
    perSale: "30%/10%",
    description: "Design phase",
    name: "Evan Harris",
    status: "active",
    default: "yes",
    createDate: "11:05 5 Apr, 2024",
    action: "",
  },
  {
    id: 95482164,
    campaignName: "Campaign1",
    title: "Frist Campaign",
    perClick: "$0.05",
    perSale: "30%/10%",
    description: "User training",
    name: "Fiona Garcia",
    status: "deactive",
    default: "no",
    createDate: "11:05 5 Apr, 2024",
    action: "",
  },
  {
    id: 95482164,
    campaignName: "Campaign1",
    title: "Frist Campaign",
    perClick: "$0.05",
    perSale: "30%/10%",
    description: "Testing and QA",
    name: "George Hall",
    status: "active",
    default: "yes",
    createDate: "11:05 5 Apr, 2024",
    action: "",
  },
  {
    id: 95482164,
    campaignName: "Campaign1",
    title: "Frist Campaign",
    perClick: "$0.05",
    perSale: "30%/10%",
    description: "Final review",
    name: "Helen King",
    status: "deactive",
    default: "no",
    createDate: "11:05 5 Apr, 2024",
    action: "",
  },
];

const Programs = () => {
  const [startDate, setStartDate] = useState(dayjs().startOf("week"));
  const [endDate, setEndDate] = useState(dayjs().endOf("week"));
  const [open, setOpen] = useState(false);
  const [deletePopupOpen, setDeletePopupOpen] = useState(false);
  const [rangeValue, setRangeValue] = useState([20, 37]);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState([]);
  const [value, setValue] = React.useState(0);
  const [selected, setSelected] = useState([]);
  const [type, setType] = useState("active");
  const navigate = useNavigate();

  const headcells = [
    {
      id: "id",
      label: "Id",
      default: true,
      getCell: (row) => row.id,
    },
    {
      id: "campaignName",
      label: "Campaign Name",
      default: true,
      getCell: (row) => row.title,
    },
    {
      id: "commissions",
      label: "Commissions",
      default: true,
      getCell: (row) => {
        return (
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <MdOutlineRemoveRedEye size={14}/>
            <Box>
              <Typography>per Click : {row.perClick}</Typography>
              <Typography>per Sale : {row.perSale}</Typography>
            </Box>
          </Stack>
        );
      },
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
      id: "createDate",
      label: "Create date",
      default: true,
      getCell: (row) => row.createDate,
    },
    {
      id: "default",
      label: "Default",
      default: true,
      getCell: (row) => {
        const status = defaults.find((defaults) => defaults.value === row.default);
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
          <FiEdit size={14} onClick={() => { navigate("/affiliate-center/programs/edit-campaign") }} />
          <Divider
            orientation="vertical"
            sx={{
              height: "18px",
            }}
          />
          <IoCopyOutline
            size={14}
          />
          <Divider
            orientation="vertical"
            sx={{
              height: "18px",
            }}
          />
          <IoLockClosedOutline
            size={14}
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
              setDeletePopupOpen(true);
            }}
            size={14}
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
        <Box
          sx={{
            display: "flex",
            gap: "14px",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" sx={{ marginLeft: "10px" }}>
            Your Campaigns
          </Typography>
        </Box>
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
          {/* <Typography
            sx={{
              color: (theme) => theme.palette.color.secondary,
              fontSize: "11.5px",
              py: "3px",
              px: "8px",
              border: (theme) =>
                `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
            }}
          >
            <BiImport /> Import
          </Typography> */}
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
            options={[{ value: "active", label: "Display" }]}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <FormSelect
            options={[{ value: "active", label: "All" }]}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <Button
            sx={{
              color: (theme) => theme.palette.color.bg3,
              fontWeight: "500",
            }}
            variant="contained"
            onClick={() => { setOpen(true) }}
          >
            <IoMdAdd style={{ marginRight: "5px" }} size={17} />
            Add Campaign
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
            onClick={() => {
              setOpen(false);
              setDeletePopupOpen(true);
            }}
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
        open={deletePopupOpen}
        handleClose={() => { setDeletePopupOpen(false) }}
        title={"Delete Campaign"}
        description={`Are you sure you want to delete ${selected.length} campaign?`}
      />
      <CreateCampaignModal open={open} handleClose={() => { setOpen(false) }} />
    </Container>
  );
};

export default Programs;
