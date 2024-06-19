import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  alpha,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import { FiEdit } from "react-icons/fi";
import FormSelect from "../../components/ui/FormSelect";
import { BiExport, BiMinus } from "react-icons/bi";
import { IoMdAdd, IoMdCheckmark } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Search } from "@mui/icons-material";
import { HiOutlineTrash } from "react-icons/hi2";
import CustomTable from "../../components/Firm/Orders/Table";
import DeletePopup from "../../components/ui/DeletePopup";
import CreateCampaignModal from "../../components/Affiliates/Programs/createCampaignModal";
import { useNavigate } from "react-router-dom";
import Searchbar from "../../components/ui/Searchbar";
import ExportSection from "../../components/ui/ExportSection";
import DisplayColumns from "../../components/ui/DisplayColumns";
import FilterPopup from "../../components/ui/FilterPopup";
import SearchBar from "../../components/Affiliates/searchBar";
import CreateAnnouncementModal from "../../components/Affiliates/Programs/createAnnouncementModal";
import SmallSearchBar from "../../components/Affiliates/smallSearchBar";

const statutes = [
  { value: "active", label: "Active", color: "green" },
  { value: "inactive", label: "inactive", color: "red" },
];

const defaults = [
  { value: "yes", label: "Yes", color: "green" },
  { value: "no", label: "No", color: "red" },
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
    status: "inactive",
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
    status: "inactive",
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
    status: "inactive",
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
    status: "inactive",
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
    status: "inactive",
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
  const [selectedPaidEarning, setSelectedPaidEarning] = useState([]);
  const [selectedPaidCommission, setSelectedPaidCommission] = useState([]);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState([]);
  const [value, setValue] = useState(0);
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
          <Box>
              <Typography>per Click : {row.perClick}</Typography>
              <Typography>per Sale : {row.perSale}</Typography>
          </Box>
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

              background: (theme) => theme.palette.color.border,
            }}
          >
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
        const status = row.default === "yes" ? "yes" : "no";
        const icon = status === "yes" ? <IoMdCheckmark size={14} /> : <BiMinus size={14} />;
  
        return (
          <Typography>
              {icon}
            </Typography>
        );
      },
    },
    // {
    //   id: "add",
    //   label: "+",
    //   default: true,
    //   getCell: (row) => row.createDate,
    // },
    // {
    //   id: "action",
    //   label: "Action",
    //   default: true,
    //   getCell: (row, index) => (
    //     <Stack
    //       direction="row"
    //       spacing={1.5}
    //       sx={{
    //         color: (theme) => theme.palette.color.secondary,
    //       }}
    //     >
    //       <FiEdit size={14} onClick={() => { navigate("/affiliate-center/programs/edit-campaign") }} />
    //       <Divider
    //         orientation="vertical"
    //         sx={{
    //           height: "18px",
    //         }}
    //       />
    //       <IoCopyOutline
    //         size={14}
    //       />
    //       <Divider
    //         orientation="vertical"
    //         sx={{
    //           height: "18px",
    //         }}
    //       />
    //       <IoLockClosedOutline
    //         size={14}
    //       />
    //       <Divider
    //         orientation="vertical"
    //         sx={{
    //           height: "18px",
    //         }}
    //       />
    //       <HiOutlineTrash
    //         onClick={() => {
    //           setSelected([index]);
    //           setDeletePopupOpen(true);
    //         }}
    //         size={14}
    //       />
    //     </Stack>
    //   ),
    // },
  ];

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [columns, setColumns] = useState(headcells);
  const [heads, setHeads] = React.useState(
    headcells.filter((cell) => cell.default).map((cell) => cell.id)
  );


  const filteredHeadcells = columns.filter((cell) => heads.includes(cell.id));
  return (
    <Container
      sx={{
        height: "100%",
        backgroundColor: (theme) => theme.palette.color.bg,
        p: "24px",
      }}
    >
      <Stack 
        direction={isSmallScreen ? "column" : "row"}
        justifyContent={isSmallScreen ? "flex-start" : "space-between"}
        alignItems={isSmallScreen ? "flex-start" : "center"}
        gap={2}
      >
        <Box
          sx={{
            display: "flex",
            gap: "14px",
            alignItems: "start",
          }}
        >
          <Typography variant="h4" sx={{ marginLeft: "10px" }}>
            Your Programs
          </Typography>
        </Box>
        <Stack
          direction="row"
          spacing={isSmallScreen ? 0.5 : 2}
          alignItems="center"
          justifyContent="flex-end"
          sx={{
            mb: "5px",
            fontSize: "11.5px",
            pr: "24px",
            color: (theme) => theme.palette.color.secondary,
          }}
        >
          {isSmallScreen ? <SmallSearchBar /> : <SearchBar />}
          <ExportSection />
          <ExportSection isImport={true} />
          <DisplayColumns
            columns={columns}
            setColumns={setColumns}
            selectedColumns={heads}
            setSelectedColumns={setHeads}
            title={"Active"}
          />
          <DisplayColumns
            columns={columns}
            setColumns={setColumns}
            selectedColumns={heads}
            setSelectedColumns={setHeads}
            title={"Toggle Columns"}
          />
          {/* <FilterPopup
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
          /> */}
          {/* <Button
            sx={{
              padding: "4px 10px",
              color: (theme) => theme.palette.color.primary,
              bgcolor: (theme) => theme.palette.color.active,
              fontWeight: "500",
              ':hover': {
                color: (theme) => theme.palette.color.primary,
                bgcolor: (theme) => theme.palette.color.active,
              }
            }}
            variant="contained"
            onClick={() => { setOpen(true) }}
          >
            <IoMdAdd style={{ marginRight: "5px" }} size={17} />
            Add Program
          </Button> */}
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
      {/* <CreateAnnouncementModal open={open} handleClose={() => { setOpen(false) }} /> */}
    </Container>
  );
};

export default Programs;
