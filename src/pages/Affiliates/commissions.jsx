import React, { useState } from 'react';
import { Tabs, Tab, Box, Stack, Divider, alpha, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Searchbar from '../../components/ui/Searchbar';
import ExportSection from '../../components/ui/ExportSection';
import DisplayColumns from '../../components/ui/DisplayColumns';
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";
import FilterPopup from '../../components/ui/FilterPopup';
import CommissionCard from '../../components/Affiliates/Programs/commissionCard';
import EditCommissionsModal from '../../components/Affiliates/Programs/editCommissionsModal';

const statutes = [
  { value: "planned", label: "Planned", color: "yellow" },
  { value: "rightnow", label: "Right Now", color: "green" },
];

const commissions = [
  { amount: 0.00, label: 'Commissions' },
  { amount: 0.00, label: '2nd tier commission' },
  { amount: 0.00, label: '3rd tier commission' },
  { amount: 0.00, label: '4th tier commission' },
  { amount: 0.00, label: '5th tier commission' },
];

const Commissions = () => {
  const [value, setValue] = useState(2);
  const navigate = useNavigate();
  const [rangeValue, setRangeValue] = useState([20, 37]);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  console.log(selected);


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

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/affiliate-center/programs/edit-campaign');
    } else if (newValue === 1) {
      navigate('/affiliate-center/programs/stats');
    }
  };

  return (
    <Box sx={{ width: '100%' }} p={3}>
      <Stack direction="row" justifyContent="space-between">
      <Tabs value={value} onChange={handleChange} aria-label="edit campaign tabs">
        <Tab label="Edit Campaign" />
        <Tab label="Stats" />
        <Tab label="Commissions" />
      </Tabs>
      <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="flex-end"
          sx={{
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
        </Stack>
        </Stack>
      {value === 2 && (
        <Box sx={{ p: 3 }}>
          <CommissionCard commissions={commissions} onClick={()=>{setOpen(true)}}/>
          <CommissionCard commissions={commissions} onClick={()=>{setOpen(true)}}/>
        </Box>
      )}
      <EditCommissionsModal open={open} handleClose={()=>{setOpen(false)}} />
    </Box>
  );
};

export default Commissions;
