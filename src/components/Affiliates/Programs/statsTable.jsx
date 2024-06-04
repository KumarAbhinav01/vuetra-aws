import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

const statsData = [
    {
        category: 'Sales', stats: [
            { title: 'All Impressions', value: '0', amount: '$0.00' },
            { title: 'Repeat Impressions', value: '0', amount: '$0.00' },
            { title: 'Unique Impressions', value: '0', amount: '$0.00' },
        ]
    },
    {
        category: 'Clicks ', stats: [
            { title: 'All Clicks', value: '0', amount: '$0.00', ctr: 'CTR 0' },
            { title: 'Repeat Clicks', value: '0', amount: '$0.00', ctr: 'CTR 0' },
            { title: 'Unique Clicks', value: '0', amount: '$0.00', ctr: 'CTR 0' },
            { title: 'Declined Clicks', value: '0', amount: '$0.00', ctr: 'CTR 0' },
        ]
    },
    {
        category: 'Totals ', stats: [
            { title: 'Commissions', value: '$0.00' },
            { title: 'Revenue', value: '$0.00' },
            { title: 'Avg. Commissions', value: '$0.00' },
        ]
    },
    {
        category: 'Sales ', stats: [
            { title: 'Fixed Cost', value: '$0.00' },
            { title: 'Commissions', value: '$0.00' },
            { title: 'Revenues', value: '$0.00' },
            { title: 'Conversasion', value: '$0.00' },
        ]
    },
];

const StatCard = ({ title, value, amount, ctr }) => (
    <Box sx={{
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #2C2F33',
    }}>
        <Stack direction="row" gap={2}>
            <Typography variant="h3" sx={{ color: '#ffffff', mb: 1 }}>{value}</Typography>
            <Typography variant="h6" sx={{ color: '#ffffff', mb: 1 }}>{amount}</Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent={"space-between"}>
            <Typography variant="body2" sx={{ color: '#8A96A6' }}>{title}</Typography>
            {ctr && <Typography variant="body1" sx={{ color: '#8A96A6' }}>{ctr}</Typography>}
        </Stack>
    </Box>
);

const StatsTable = () => (
    <Box sx={{ border: "1px solid rgba(100, 125, 181, 0.17)", borderRadius: 2 }}>
        <Typography variant="h4" sx={{ backgroundColor: "#131517", color: "white", p: 2, borderRadius: 4 }}>Last 30 Days</Typography>
        <Grid container spacing={3} sx={{ padding: "24px" }}>
            {statsData.map((category) => (
                <Grid item xs={16} key={category.category}>
                    <Grid container spacing={2} style={{ gridTemplateColumns: '1fr auto 1fr' }}>
                        <Typography variant="h6" sx={{ color: '#8A96A6', mb: 2, ml: 2 }}>{category.category}</Typography>
                        {category.stats.map((stat) => (
                            <Grid item xs={16} sm={6} md={3} lg={2.3} key={stat.title} ml={4}>
                                <StatCard {...stat} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default StatsTable;