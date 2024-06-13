import React, { useState } from 'react';
import { Box, Typography, Button, Stack, Divider, List, ListItem, ListItemText, Card, Tooltip, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HiMiniChartBar } from "react-icons/hi2";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BiSolidNavigation } from "react-icons/bi";
import { FaRegCreditCard } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import FormInput from '../../components/ui/FormInput';
import { MdOutlineChatBubble } from 'react-icons/md';

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
                bgcolor: (theme) => theme.palette.color.bg2
            }}>

            <Box flex={1} sx={{ borderRight: 1, borderColor: '#ECEFF2', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                    <Box sx={{ p: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" noWrap>
                            AI Assistant
                        </Typography>
                        <IoMdSearch size={15} />
                    </Box>
                    <Divider />

                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', pt: 2, px: 3, gap: 2 }}>
                        <Box
                            onClick={() => setSelectedTab('Chats')}
                            sx={{
                                cursor: 'pointer',
                                padding: '11px 16px',
                                borderRadius: '4px',
                                backgroundColor: selectedTab === 'Chats' ? 'black' : 'transparent',
                                color: selectedTab === 'Chats' ? 'white' : 'inherit',
                                flexGrow: 1,
                                textAlign: 'center',
                                '&:hover': {
                                    backgroundColor: selectedTab === 'Chats' ? 'black' : '#f0f0f0',
                                },
                            }}
                        >
                            Chats
                        </Box>
                        <Box
                            onClick={() => setSelectedTab('Promps')}
                            sx={{
                                cursor: 'pointer',
                                padding: '11px 16px',
                                borderRadius: '4px',
                                backgroundColor: selectedTab === 'Promps' ? 'black' : 'transparent',
                                color: selectedTab === 'Promps' ? 'white' : 'inherit',
                                flexGrow: 1,
                                textAlign: 'center',
                                '&:hover': {
                                    backgroundColor: selectedTab === 'Promps' ? 'black' : '#f0f0f0',
                                },
                            }}
                        >
                            Promps
                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 1, overflow: 'auto', px: 2 }}>
                        <List>
                            {['Chat name', 'Chat name', 'Chat name', 'Chat name', 'Chat name', 'Chat name', 'Chat name'].map((text, index) => (
                                <ListItem key={index}>
                                    <ListItemText sx={{color: "#8996A5", fontWeight: 'bold' }} primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>

                <Box sx={{ p: 2 }}>
                    <Button sx={{
                        bgcolor: '#EEEFF2', color: '#8996A5',
                        ":hover": {
                            bgcolor: "#EEEFF2",
                            color: "#8996A5",
                        }
                    }} fullWidth>
                        Clear all chats
                    </Button>
                </Box>
            </Box>


            <Box sx={{ display: 'flex', flex: 4, height: '100vh' }}>
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
                        <Typography variant="h3" gutterBottom>
                            Ask Vue.
                        </Typography>
                        <Typography variant="h3" gutterBottom sx={{ color: '#8996A5' }}>
                            Anything.
                        </Typography>
                    </Stack>


                    <Box
                        sx={{
                            margin: "0 auto",
                            display: "flex",
                            gap: "24px",
                        }}
                    >
                        {dashboardItems.map((item) => (
                            <AiAssistantCard {...item} />
                        ))}
                    </Box>



                    <Box sx={{ position: 'fixed', bottom: 10, width: '60%', display: 'flex', justifyContent: 'center', gap: 2, p: 2 }}>
                        <FormInput
                            sx={{
                                width: "100%",
                                background: '#F6F9FA',
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
                                background: (theme) => theme.palette.color.blue,
                                color: "white",
                                ":hover": {
                                    background: (theme) => theme.palette.color.blue,
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
                    bgcolor: (theme) => theme.palette.color.bg2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    height: "110px",
                    width: "200px",
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