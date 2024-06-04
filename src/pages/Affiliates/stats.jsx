import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { Tabs, Tab, Box, Stack, Alert, FormControlLabel, Radio } from '@mui/material';
import dayjs from "dayjs";
import { useNavigate } from 'react-router-dom';
import Searchbar from '../../components/ui/Searchbar';
import ExportSection from '../../components/ui/ExportSection';
import FilterPopup from '../../components/ui/FilterPopup';
import CalendarPopup from '../../components/ui/CalendarPopup';
import StatsTable from '../../components/Affiliates/Programs/statsTable';
import { styled } from '@mui/material/styles';
import { FaChartArea, FaChartLine, FaChartBar } from "react-icons/fa";


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


const Stats = () => {
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
          <Alert sx={{ mb: 2, bg: '#102E23', color: '#07B869' }} severity="success">Check the performance of this campaign for impression, clicks, sakes or commissions. Below the chart you have summaries for different periods.</Alert>
          <Box sx={{ bgcolor: '#161A1C', p: 3, borderRadius: 1, mb: 5 }}>
            <Stack direction="row" gap={2} justifyContent={"space-between"}>
              <Stack direction="row" gap={2}>
                <CalendarPopup
                  mainEndDate={endDate}
                  mainStartDate={startDate}
                  setMainEndDate={setEndDate}
                  setMainStartDate={setStartDate}
                />
                <CalendarPopup
                  mainEndDate={endDate}
                  mainStartDate={startDate}
                  setMainEndDate={setEndDate}
                  setMainStartDate={setStartDate}
                />
              </Stack>
              <Stack direction="row" gap={1}>
                <FormControlLabel
                  value="default"
                  control={<BpRadio />}
                  label={<><span style={{ color: 'grey' }}>Number of Sales</span></>}
                />
                <Stack sx={{border: "1px solid rgba(100, 125, 181, 0.17)", borderRadius: 2}} direction="row" gap={1}>
                <Box sx={{ bg: "#647DB5", p: 1,  borderRadius: 2}}>
                <FaChartArea size={20}/>
                </Box>
                <Box p={1}>
                <FaChartLine size={20} color='#8996A5'/>
                </Box>
                <Box p={1}>
                <FaChartBar size={20} color='#8996A5'/>
                </Box>

                </Stack>

              </Stack>
            </Stack>
            <ApexCharts options={options} series={series} type="area" height={350} />
          </Box>
          <StatsTable />
        </Box>
      )}
    </Box>
  );
};

export default Stats;
