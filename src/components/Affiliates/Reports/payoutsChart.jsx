import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Box, Stack, Typography, useTheme } from '@mui/material';

const PayoutsChart = () => {
  const theme = useTheme();
  const series = [
    {
      name: 'Total Payout',
      data: [250, 300, 370, 200, 350, 250, 300, 350, 250, 300, 350],
    },
    {
      name: 'Per Click',
      data: [200, 250, 300, 250, 200, 250, 200, 250, 300, 250, 200],
    },
    {
      name: 'Per Sale',
      data: [50, 70, 60, 90, 70, 80, 90, 100, 110, 120, 130],
    },
  ];

  const options = {
    chart: {
      type: 'line'
    },
    xaxis: {
      categories: ['12 May', '13 May', '14 May', '15 May', '16 May', '17 May', '18 May', '19 May', '20 May', '21 May', '22 May'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors:  [theme.palette.mode === 'dark' ? '#fff' : '#000'],
        },
      },
    },
    yaxis: {
      min: 0,
      max: 400,
      labels: {
        formatter: (val) => `$${val}`,
        style: {
          colors:  [theme.palette.mode === 'dark' ? '#fff' : '#000'],
        },
      },
    },
    colors: ['#7AA0FE', '#FE9363', theme.palette.mode === 'dark' ? '#ffffff' : '#000000'],
    stroke: {
      width: [3, 3, 3],
      curve: 'smooth',
      dashArray: [0, 0, 5],
    },
    fill: {
      type: 'solid',
      colors: ['#008FFB'],
      opacity: 1,
    },
    tooltip: {
      theme: 'dark',
    },
    legend: {
      show: false
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    toolbar: {
      show: false
    }
  };

  return (
    <Box sx={{
      border: "1px solid rgba(140,173,255,0.2)",
      borderRadius: "18px",
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '0 auto',
      width: '100%',
      mt: 3,
    }}>
      <Stack direction="row" p={2} alignItems={"center"} justifyContent={"space-between"}>
        <Typography variant="h2">
          Payouts
        </Typography>
        <Stack direction="row" gap={2}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 14, height: 14, backgroundColor: '#8BACFE', borderRadius: '50%', mr: 1 }} />
            <Typography variant="body2">Total Payout</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 14, height: 14, backgroundColor: '#F8784B', borderRadius: '50%', mr: 1 }} />
            <Typography variant="body2">Per Click</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 14, height: 14, backgroundColor: '#8A96A6', borderRadius: '50%', mr: 1 }} />
            <Typography variant="body2">Per Sale</Typography>
          </Box>
        </Stack>
      </Stack>
      <ApexCharts options={options} series={series} type="line" height={350} />
    </Box>
  );
};

export default PayoutsChart;
