import React from 'react';
import ApexCharts from 'react-apexcharts';
import { Box, Stack, Typography, styled, useTheme } from '@mui/material';

const GroupedBarChart = () => {
  const theme = useTheme();

  const ChartContainer = styled(Box)({
    width: '100%',
    height: '100%',
    '& .apexcharts-toolbar': {
        display: 'none !important',
    },
});

  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
      background: 'transparent',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['12 May', '13 May', '14 May', '15 May', '16 May', '17 May', '18 May'],
      labels: {
        style: {
          colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: '',
      },
      labels: {
        style: {
          colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#8a96a6', '#3924f2', '#8caffe'],
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [0, 90, 100]
      },
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: 'Session',
      data: [4, 3, 6, 2, 4, 5, 3],
      rounded: true,
      color: '#848E9C'
    },
    {
      name: 'Click',
      data: [5, 2, 3, 6, 1, 4, 2],
      rounded: true,
      color: '#3020C3'
    },
    {
      name: 'Sale',
      data: [3, 1, 5, 4, 2, 3, 4],
      rounded: true,
      color: '#6A83C2'
    }
  ];

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
          Total Session, Clicks and Sale
        </Typography>
        <Stack direction="row" gap={2}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 14, height: 14, backgroundColor: '#98EFCC', borderRadius: '50%', mr: 1 }} />
            <Typography variant="body2">Session</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 14, height: 14, backgroundColor: '#604EF6', borderRadius: '50%', mr: 1 }} />
            <Typography variant="body2">Click</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 14, height: 14, backgroundColor: '#8CADFF', borderRadius: '50%', mr: 1 }} />
            <Typography variant="body2">Sale</Typography>
          </Box>
        </Stack>
      </Stack>
      <ChartContainer>
      <ApexCharts options={options} series={series.map(({ name, data, color }) => ({ name, data, type: 'column', color }))} type="bar" height={350} style={{}}/>
      </ChartContainer>
    </Box>
  );
};

export default GroupedBarChart;
