import React from 'react';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import Chart from 'react-apexcharts';

const ConversationRate = () => {
  const theme = useTheme();
  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        barHeight: '50%',
        distributed: true,
        colors: {
          backgroundBarColors: [theme.palette.mode === 'dark' ? '#12181b' : '#f0f0f0'],
          backgroundBarOpacity: 1,
        },
      },
    },
    colors: ['#8CADFF', '#8CADFF', '#05B868', '#8CADFF', '#8CADFF', '#8CADFF', '#8CADFF'],
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      style: {
        colors: ['#fff'],
        fontSize: '14px',
        fontWeight: 'bold',
      },
      offsetX: 10,
      textAnchor: 'end',
    },
    xaxis: {
      show: false,
      categories: ['12 May', '13 May', '14 May', '15 May', '16 May', '17 May', '18 May'],
      labels: {
        show: false,
      },
      max: 100,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [theme.palette.mode === 'dark' ? '#fff' : '#000'],
          fontSize: '14px',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
  };

  const series = [{
    data: [20, 40, 80, 50, 30, 60, 10],
  }];

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
    }}>
      <Box>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h3" gutterBottom>
            Conversation rate
          </Typography>
          <Typography variant="body1" gutterBottom>
            This pro-add-on is available for people on a Professional license.
          </Typography>
        </Box>
        <Divider />
      </Box>
      <Box sx={{ padding: 2 }}>
        <Chart options={options} series={series} type="bar" />
      </Box>
    </Box>
  );
};

export default ConversationRate;
