import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EditCampaignForm from '../../components/Affiliates/Programs/editCampaignForm';

const EditCampaign = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (_event, newValue) => {
    setValue(newValue);
    if (newValue === 1) {
      navigate('/affiliate-center/programs/stats');
    } else if (newValue === 2) {
      navigate('/affiliate-center/programs/commissions');
    }
  };

  return (
    <Box sx={{ width: '100%' }} p={3}>
      <Tabs value={value} onChange={handleChange} aria-label="edit campaign tabs">
        <Tab label="Edit Campaign" />
        <Tab label="Stats" />
        <Tab label="Commissions" />
      </Tabs>
      {value === 0 && (
        <Box sx={{ p: 2, mt: 1 }}>
          <EditCampaignForm />
        </Box>
      )}
    </Box>
  );
};

export default EditCampaign;