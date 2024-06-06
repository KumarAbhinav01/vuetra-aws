import React from "react";
import { Box, Stack, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import HelpIcon from "@mui/icons-material/Help";
import ApexCharts from 'react-apexcharts';

const BackgroundBox = styled(Box)(({ theme }) => ({
    height: "100%",
    borderRadius: "18px",
    padding: theme.spacing(3),
    paddingBottom: 0,
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

const ChartContainer = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    '& .apexcharts-toolbar': {
        display: 'none !important',
    },
});

const TotalReferralsChart = () => {
    const series = [{
        name: 'Referrals',
        data: [20, 30, 50, 40]
    }];

    const options = {
        chart: {
            type: 'bar',
            foreColor: '#FFFFFF',
            background: 'transparent',
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        dataLabels: {
            enabled: false,
            formatter: function (val) {
                return val;
            },
            offsetY: -30,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        xaxis: {
            categories: ['May', 'Apr', 'Mar', 'Feb'],
            position: 'top',
            labels: {
                offsetY: -18,
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        fill: {
            opacity: 1,
            colors: ['#808B9A', '#41474D'],
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: "vertical",
                shadeIntensity: 1,
                gradientToColors: ['#41474D'], 
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        yaxis: {
            show: false,
        },
        grid: {
            borderColor: '#f1f1f1',
            show: false,
        },
        toolbar: {
            show: false
        },
        tooltip: {
            enabled: false,
        },
    };

    return (
        <BackgroundBox>
            <Box zIndex={1} position="relative">
                <Stack direction="row" alignItems="center" gap={1}>
                    <Typography variant="subtitle2">Total Referrals</Typography>
                    <Tooltip title="Total Referrals" placement="top">
                        <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                    </Tooltip>
                </Stack>
                <Typography variant="h2" fontSize="25px" mt={1}>263</Typography>
            </Box>
            <ChartContainer>
                <ApexCharts options={options} series={series} type="bar" height="100%" />
            </ChartContainer>
        </BackgroundBox>
    );
};

export default TotalReferralsChart;
