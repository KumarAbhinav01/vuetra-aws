import React, { useState } from 'react';
import { Box, Typography, Button, Stack, Divider, List, ListItem, Card, Tooltip, IconButton, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HiMiniChartBar } from "react-icons/hi2";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BiSolidNavigation } from "react-icons/bi";
import { FaRegCreditCard } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import FormInput from '../../components/ui/FormInput';
import { MdOutlineChatBubble } from 'react-icons/md';

const StyledTypography = styled(Typography)({
    color: '#8996A5',
    fontWeight: 500,
    '&:hover': {
        color: '#484C51',
    },
});

const StyledListItem = styled(ListItem)({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
        color: '#484C51',
    },
    '&:hover .list-icon': {
        color: '#484C51',
    }
});

const StyledIcon = styled('span')({
    marginRight: '8px',
    color: '#ECEFF2',
});

const AiAssistant = () => {
    const [selectedTab, setSelectedTab] = useState('Chats');
    const dashboardItems = [
        { title: "Statistics", icon: HiMiniChartBar, page: "/statistics/store-performance" },
        { title: "Orders", icon: RiShoppingBag2Fill, page: "/firm/orders" },
        { title: "Customer question", icon: FaRegCreditCard, page: "/firm/payouts" },
        { title: "Tickets", icon: BiSolidNavigation, page: "/customer-services/open-tickets" },
    ];

    return (
        <Stack
            sx={{
                display: 'flex',
                flexDirection: 'row',
                bgcolor: (theme) => theme.palette.color.bg,
                height: '100vh'
            }}>

            <Box
                flex={1}
                sx={{
                    bgcolor: (theme) => theme.palette.color.sidebar,
                    borderRight: 1,
                    borderColor: (theme) => theme.palette.color.gray,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}>
                <Box>
                    <Box sx={{ p: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" noWrap>
                            AI Assistant
                        </Typography>
                        <IoMdSearch size={15} />
                    </Box>
                    <Divider sx={{ color: (theme) => theme.palette.color.gray }} />

                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', pt: 2, px: 3, gap: 2 }}>
                        <Box
                            onClick={() => setSelectedTab('Chats')}
                            sx={{
                                cursor: 'pointer',
                                padding: '11px 16px',
                                borderRadius: '8px',
                                border: '1px solid',
                                borderColor: selectedTab === 'Chats' ? '#191B1C' : 'transparent',
                                backgroundColor: selectedTab === 'Chats' ? '#131517' : 'transparent',
                                color: selectedTab === 'Chats' ? 'white' : '#5E6369',
                                flexGrow: 1,
                                textAlign: 'center',
                            }}
                        >
                            Chats
                        </Box>
                        <Box
                            onClick={() => setSelectedTab('Promps')}
                            sx={{
                                cursor: 'pointer',
                                padding: '11px 16px',
                                borderRadius: '8px',
                                border: '1px solid',
                                borderColor: selectedTab === 'Promps' ? '#191B1C' : 'transparent',
                                backgroundColor: selectedTab === 'Promps' ? '#131517' : 'transparent',
                                color: selectedTab === 'Promps' ? 'white' : '#5E6369',
                                flexGrow: 1,
                                textAlign: 'center',
                            }}
                        >
                            Promps
                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 1, overflow: 'auto', px: 2 }}>
                        <List>
                            {['Chat name', 'Chat name', 'Chat name', 'Chat name', 'Chat name', 'Chat name', 'Chat name'].map((text, index) => (
                                <StyledListItem key={index}>
                                    <StyledIcon className="list-icon">L</StyledIcon>
                                    <StyledTypography>{text}</StyledTypography>
                                </StyledListItem>
                            ))}
                        </List>
                    </Box>
                </Box>

                <Box sx={{ p: 2 }}>
                    <Button
                        sx={{
                            bgcolor: 'rgba(138, 150, 166, 0.15)',
                            color: '#8A96A6',
                            ":hover": {
                                bgcolor: 'rgba(138, 150, 166, 0.15)',
                                color: '#8A96A6',
                            },
                        }}
                        fullWidth
                    >
                        Clear all chats
                    </Button>
                </Box>
            </Box>


            <Box sx={{ display: 'flex', flex: 4 }}>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Typography variant="h2" gutterBottom>
                            Ask Vue. Anything.
                        </Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        sx={{
                            margin: "0 auto",
                            width: "100%",
                            gap: "24px",
                            flexWrap: "wrap",
                        }}
                    >
                        {dashboardItems.map((item) => (
                            <AiAssistantCard key={item.title} {...item} />
                        ))}
                    </Stack>

                    <Box sx={{ position: 'fixed', bottom: 10, width: '60%', display: 'flex', justifyContent: 'center', gap: 2, p: 2 }}>
                        <FormInput
                            sx={{
                                width: "100%",
                                background: (theme) => theme.palette.color.gray,
                                border: "none",
                                ":focus": {
                                    border: "none",
                                    outline: "none",
                                },
                                ":focus-within": {
                                    border: "none",
                                    outline: "none",
                                },
                            }}
                            placeholder="Ask me anything"
                        />
                        <IconButton
                            sx={{
                                borderRadius: "10px",
                                background: (theme) => theme.palette.color.active,
                                color: "white",
                                ":hover": {
                                    background: (theme) => theme.palette.color.active,
                                },

                                px: "18px",
                            }}
                        >
                            <MdOutlineChatBubble size={24} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Stack>
    );
}

export default AiAssistant;

const AiAssistantCard = (item) => {
    const navigate = useNavigate();
    return (
        <Tooltip title={item.tooltip} placement="top">
            <Card
                sx={{
                    flex: '1 1 200px', 
                    maxWidth: 'calc(33.333% - 16px)',
                    minWidth: '200px', 
                    bgcolor: (theme) => theme.palette.color.bg2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    height: "110px",
                    cursor: "pointer",
                }}
                onClick={() => navigate(item.page)}
            >
                <item.icon size={25} />
                <Typography variant="subtitle1" fontSize={'12px'}>{item.title}</Typography>
            </Card>
        </Tooltip>
    );
}