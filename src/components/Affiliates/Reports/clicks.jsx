import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Chart from 'react-apexcharts';

const Clicks = () => {
  const options = {
    chart: {
      type: 'donut',
      background: 'transparent',
    },
    labels: ['Repeat Clicks', 'Unique Clicks', 'Declined Clicks', 'Active Clicks'],
    colors: ['#8CADFF', '#6554F6', '#52B694', '#8CADFF'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Clicks',
              formatter: function () {
                return 17;
              },
              color: '#fff'
            }
          },
          stroke: {
            show: false,
            colors: ['transparent']
          }
        }
      }
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => `${val}%`,
      },
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    }
  };

  const series = [40, 10, 20, 30];

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
      height: '100%'
    }}>
      <Box>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Clicks
          </Typography>
          <Typography variant="body1" gutterBottom>
            This pro-add-on is available for people on a Professional license.
          </Typography>
        </Box>
        <Divider />
      </Box>
      <Box sx={{ padding: 2 }}>
        <Chart options={options} series={series} type="donut" width="90%" />
        <Box sx={{ justifyContent: 'space-between', mx: 5, mt: 3 }}>
          <Stack direction="row" spacing={1} justifyContent={"space-between"}>
            <Box >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 14, height: 14, backgroundColor: '#8CADFF', borderRadius: '50%', mr: 1 }} />
                <Typography variant="body2">Repeat Clicks</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: 2 }}>
                <Box sx={{ width: 14, height: 14, backgroundColor: '#6554F6', borderRadius: '50%', mr: 1 }} />
                <Typography variant="body2">Unique Clicks</Typography>
              </Box>
            </Box>

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 14, height: 14, backgroundColor: '#52B694', borderRadius: '50%', mr: 1 }} />
                <Typography variant="body2">Declined Clicks</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: 2 }}>
                <Box sx={{ width: 14, height: 14, backgroundColor: '#8CADFF', borderRadius: '50%', mr: 1 }} />
                <Typography variant="body2">Active Clicks</Typography>
              </Box>
            </Box>
          </Stack>

        </Box>
      </Box>
    </Box>
  );
};

export default Clicks;
