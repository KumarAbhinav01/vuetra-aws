import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { Box, Stack, FormControlLabel, Radio, Typography } from '@mui/material';
import dayjs from "dayjs";
import { useNavigate } from 'react-router-dom';
import Searchbar from '../../components/ui/Searchbar';
import ExportSection from '../../components/ui/ExportSection';
import FilterPopup from '../../components/ui/FilterPopup';
import CalendarPopup from '../../components/ui/CalendarPopup';
import StatsTable from '../../components/Affiliates/Programs/statsTable';
import { styled } from '@mui/material/styles';
import { FaChartArea, FaChartLine, FaChartBar } from "react-icons/fa";
import ConversationRate from '../../components/Affiliates/Reports/conversationRate';
import Clicks from '../../components/Affiliates/Reports/clicks';
import GroupedBarChart from '../../components/Affiliates/Reports/GroupedBarChart';
import PayoutsChart from '../../components/Affiliates/Reports/payoutsChart';
import ReportCard from '../../components/Affiliates/Reports/reportCard';
import StatCard from '../../components/Affiliates/Reports/statCard';
import TotalReferralsChart from '../../components/Affiliates/Reports/totalReferralsChart';

const options = {
    chart: {
        type: 'line',
        background: '#161A1C',
        toolbar: {
            show: false,
        },
    },
    xaxis: {
        categories: ['12 May', '13 May', '14 May', '15 May', '16 May', '17 May', '18 May', '19 May', '20 May', '21 May', '22 May'],
        labels: {
            style: {
                colors: '#8A96A6',
            },
        },
    },
    yaxis: {
        min: 0,
        max: 7,
        tickAmount: 8,
        labels: {
            style: {
                colors: '#8A96A6',
            },
            formatter: (val) => Math.floor(val),
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    tooltip: {
        theme: 'dark',
    },
    grid: {
        borderColor: '#161A1C',
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#8CADFF'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 1,
            opacityTo: 0.1,
            stops: [0, 100],
        },
    },
};

const series = [
    {
        name: 'Sites',
        data: [3, 2, 5, 2, 1, 4, 2, 3, 2, 1, 0.5],
    },
];


const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
        theme.palette.mode === 'dark'
            ? '0 0 0 1px rgb(16 22 26 / 40%)'
            : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
        theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
            : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
        boxShadow: 'none',
        background:
            theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: '#106ba3',
    },
});

function BpRadio(props) {
    return (
        <Radio
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}


const Reports = () => {
    const [startDate, setStartDate] = useState(dayjs().startOf("week"));
    const [endDate, setEndDate] = useState(dayjs().endOf("week"));
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

            <Stack direction="row" justifyContent="space-between" ml={3}>
                <Typography variant="h4">Report</Typography>
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
                    <CalendarPopup
                        mainEndDate={endDate}
                        mainStartDate={startDate}
                        setMainEndDate={setEndDate}
                        setMainStartDate={setStartDate}
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

            <Stack direction="row" spacing={3} m={3} mt={5}>
                <Box sx={{ flex: 1, height: '250px' }}>
                    <ReportCard />
                </Box>
                <Box sx={{ flex: 1, height: '250px' }}>
                    <StatCard title="Total Visit" value="130" />
                </Box>
                <Box sx={{ flex: 1, height: '250px' }}>
                    <TotalReferralsChart />
                </Box>
            </Stack>

            <Box sx={{ p: 3 }}>
                <PayoutsChart />
                {/* <GroupedBarChart />
                <Stack display={"flex"} direction={"row"} gap={5} mt={3}>
                    <Box flex={3}>
                    <ConversationRate />
                    </Box>
                    <Box flex={2}>
                    <Clicks />
                    </Box>
                </Stack> */}
            </Box>
        </Box>
    );
};

export default Reports;
