import React, { useState } from 'react';
import { Box, Typography, Divider, Stack, Paper, Tabs, Tab, List, ListItem, ListItemText, ListItemAvatar, Avatar, } from '@mui/material';
import { PiDotsSixVertical } from "react-icons/pi";
import { FaRegEyeSlash } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import { styled } from '@mui/system';


const Circle = styled('div')(({ theme }) => ({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: theme.palette.grey[200],
    marginRight: theme.spacing(1),
}));

const VerticalLine = styled('div')(({ theme }) => ({
    width: 1,
    height: '100%',
    backgroundColor: theme.palette.grey[400],
    marginRight: theme.spacing(2),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));


const CustomerDetails = ({ customer }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedActivity, setSelectedActivity] = useState(0);
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    const handleActivityChange = (event, newValue) => {
        setSelectedActivity(newValue);
    };

    const activities = [
        { text: 'Requested payout', date: '3 Apr, 2024 11:05' },
        { text: 'Challenge 2 passed', date: '3 Apr, 2024 11:05' },
        { text: 'Challenge 1 passed', date: '3 Apr, 2024 11:05' },
        { text: 'Challenge 1 passed', date: '3 Apr, 2024 11:05' },
        { text: 'Challenge 1 passed', date: '3 Apr, 2024 11:05' },
    ];

    return (
        <Paper
            sx={{
                bgcolor: 'background.paper',
                width: '100%',
                height: '100%',
                borderLeft: (theme) => `1px solid ${theme.palette.divider}`,
                overflowY: 'scroll'
            }}
        >
            <Stack direction="row" sx={{ padding: '15px', gap: 1, alignItems: "center", justifyContent: "space-between" }}>
                <Stack direction="row" gap={1} alignItems="center">

                    <PiDotsSixVertical size={20} />
                    <Typography variant="h6">
                        Customer details
                    </Typography>
                </Stack>
                <FaRegEyeSlash size={15} color={"gray"} />
            </Stack>

            <Divider />


            {/* <Tabs
                value={selectedTab}
                onChange={handleChange}
                aria-label="client details tabs"
                sx={{ borderBottom: 'none', p: 2 }} // Remove the underline
            >
                <Tab
                    label="Information"
                    sx={{
                        background: '#F6F9FA', // Lighter background color
                        borderRadius: '3px', // Smaller border radius
                        padding: '5px 15px', // Smaller padding
                        margin: '0 5px',
                        '&:hover': {
                            backgroundColor: '#e0e0e0', // Lighter hover background color
                        },
                    }}
                />
                <Tab
                    label="Purchases"
                    sx={{
                        background: '#F6F9FA',
                        borderRadius: '3px',
                        padding: '5px 15px',
                        margin: '0 5px',
                        '&:hover': {
                            backgroundColor: '#e0e0e0',
                        },
                    }}
                />
                <Tab
                    label="Trading"
                    sx={{
                        background: '#F6F9FA',
                        borderRadius: '3px',
                        padding: '5px 15px',
                        margin: '0 5px',
                        '&:hover': {
                            backgroundColor: '#e0e0e0',
                        },
                    }}
                />
            </Tabs> */}

            <Box sx={{ display: 'flex', flexDirection: 'column', mx: 4, mt: 2, gap: 1.5 }}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="textSecondary">
                        Verified
                    </Typography>
                    <Typography variant="body1">{customer.verified ? 'Yes' : 'No'}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="textSecondary">
                        Platform
                    </Typography>
                    <Typography variant="body1">{customer.platform}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="textSecondary">
                        First name
                    </Typography>
                    <Typography variant="body1">{customer.firstName}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="textSecondary">
                        Last name
                    </Typography>
                    <Typography variant="body1">{customer.lastName}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="textSecondary">
                        Country
                    </Typography>
                    <Typography variant="body1">{customer.country}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="textSecondary">
                        City
                    </Typography>
                    <Typography variant="body1">{customer.city}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="textSecondary">
                        ZIP
                    </Typography>
                    <Typography variant="body1">{customer.zip}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="textSecondary">
                        Email
                    </Typography>
                    <Typography variant="body1">{customer.email}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="textSecondary">
                        Phone
                    </Typography>
                    <Typography variant="body1">{customer.phone}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="textSecondary">
                        Timezone
                    </Typography>
                    <Typography variant="body1">{customer.timezone}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="textSecondary">
                        Active accounts
                    </Typography>
                    <Typography variant="body1">{customer.activeAccounts}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="textSecondary">
                        KYC
                    </Typography>
                    <Typography variant="body1">{customer.kyc}</Typography>
                </Stack>
            </Box>

            <Box m={2}>
                <Divider />
            </Box>

            <Typography variant='h6' sx={{ px: '16px' }}>Activities</Typography>

            <Tabs
                value={selectedActivity}
                onChange={handleActivityChange}
                aria-label="client details tabs"
                sx={{ borderBottom: 'none', p: 2 }}
            >
                <Tab
                    label="All Activity"
                    icon={<MdHistory />}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 1,
                        alignItems: 'center',
                        background: (theme) => theme.palette.color.border,
                        borderRadius: '3px',
                        padding: '5px 15px',
                        margin: '0 5px',
                        '&:hover': {
                            backgroundColor: (theme) => theme.palette.color.border,
                        },
                    }}
                />
                <Tab
                    label="Updates"
                    icon={<MdHistory />}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 1,
                        alignItems: 'center',
                        // background: '#F6F9FA',
                        borderRadius: '3px',
                        padding: '5px 15px',
                        margin: '0 5px',
                        // '&:hover': {
                        //     backgroundColor: '#e0e0e0',
                        // },
                    }}
                />
                <Tab
                    icon={<FiMessageCircle />}
                    sx={{
                        // background: '#F6F9FA',
                        borderRadius: '3px',
                        padding: '5px 15px',
                        margin: '0 5px',
                        // '&:hover': {
                        //     backgroundColor: '#e0e0e0',
                        // },
                    }}
                />
            </Tabs>

            <List>
                {activities.map((activity, index) => (
                    <StyledListItem key={index}>
                        <Circle sx={{bgcolor: (theme) => theme.palette.color.border}}/>
                        <VerticalLine />
                        <Box display="flex" gap={1} flexGrow={1}>
                            <Typography variant='body1'>{activity.text}</Typography>
                            <Typography color="textSecondary">{activity.date}</Typography>
                        </Box>
                    </StyledListItem>
                ))}
            </List>

        </Paper>
    );
};

export default CustomerDetails;