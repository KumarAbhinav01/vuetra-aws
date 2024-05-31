import React, { useState } from 'react';
import { Tabs, Tab, Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Searchbar from '../../components/ui/Searchbar';
import ExportSection from '../../components/ui/ExportSection';
import FilterPopup from '../../components/ui/FilterPopup';

const Stats = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const [rangeValue, setRangeValue] = useState([20, 37]);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/affiliate-center/programs/edit-campaign');
    } else if (newValue === 2) {
      navigate('/affiliate-center/programs/commissions');
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
      {value === 1 && (
        <Box sx={{ p: 3 }}>
          <div>Stats</div>
          {/* Your Edit Campaign content goes here */}
        </Box>
      )}
    </Box>
  );
};

export default Stats;
