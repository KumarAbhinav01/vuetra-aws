import React, { useState } from 'react';
import { Box, Paper, Stack, Typography, Divider, TextField, Button, Avatar } from '@mui/material';
import { PiDotsSixVertical } from "react-icons/pi";
import { FaRegEyeSlash } from "react-icons/fa";

const AiAssistant = () => {
    const [showHelp, setShowHelp] = useState(false);

    const handleInputChange = (event) => {
        if (event.target.value.startsWith('/')) {
            setShowHelp(true);
        } else {
            setShowHelp(false);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                backgroundColor: (theme) => theme.palette.background.default,
                flexDirection: 'column',
                height: '100vh',
                borderLeft: (theme) => `1px solid ${theme.palette.divider}`,
                overflowY: 'auto',
            }}
        >
            <Stack direction="row" sx={{ padding: '15px', gap: 1, alignItems: "center", justifyContent: "space-between" }}>
                <Stack direction="row" gap={1} alignItems="center">
                    <PiDotsSixVertical size={20} />
                    <Stack direction="row" gap={1} alignItems='center'>
                    <Typography variant="h6">
                        AI Assistant 
                    </Typography>
                    <Typography variant="caption" fontSize={'12px'} color='#8CADFF'>(only visible to you)</Typography>   
                    </Stack>
                </Stack>
                <FaRegEyeSlash size={15} color={"gray"} />
            </Stack>
            <Divider />

            <Box
                sx={{
                    flex: '1 1 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2
                }}
            >
               <Box sx={{ mb: 2, width: '100%' }}>
                    <Stack direction="row" spacing={1} alignItems="flex-end" sx={{ width: '100%' }}>
                        <Box
                            sx={{
                                p: 2,
                                py: 3,
                                backgroundColor: (theme) => theme.palette.color.border,
                                borderRadius: 2,
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Typography variant="body1" color={"white"}>
                                What was the total purchase value of this client?
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar
                                alt="User Avatar"
                                src="https://framerusercontent.com/images/earXybeYWT9rwQzSPFNGwhgaE9Y.jpg"
                                sx={{ width: 40, height: 40 }}
                            />
                        </Box>
                    </Stack>
                    <Stack direction="row" justifyContent="flex-end" sx={{ mt: 1 }}>
                        <Typography variant='caption'>
                            1m
                        </Typography>
                    </Stack>
                </Box>


                <Box sx={{ mb: 2, mt: 2, width: '100%' }}>
                    <Stack direction="row" spacing={1} alignItems="flex-end" sx={{ width: '100%' }}>
                        <Box
                            sx={{
                                p: 2,
                                py: 3,
                                backgroundColor: (theme) => theme.palette.color.border,
                                borderRadius: 2,
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Typography variant="body1">
                                The client has a total purchase value of $2405.00
                            </Typography>
                        </Box>
                    </Stack>
                    <Box sx={{alignItems: 'end'}}>
                        <Typography variant='caption' sx={{ mt: 2 }}>
                                1m
                            </Typography>
                    </Box>
                </Box>

                {showHelp && (
                    <Box sx={{ mt: 2, mb: 2, position: 'fixed', bottom: '55px'}}>
                        <Paper
                            sx={{
                                p: 2,
                                backgroundColor: (theme) => theme.palette.color.border,
                                width: '100%',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Typography variant="caption" color="textSecondary">
                                /order-history
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                See client's order history
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="caption" color="textSecondary">
                                /active-trading-accounts
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Current trading accounts
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="caption" color="textSecondary">
                                /trade-history
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                See client's latest trade history
                            </Typography>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="caption" color="textSecondary">
                                /total-purchase-value
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                See total purchase value
                            </Typography>
                        </Paper>
                    </Box>
                )}
            </Box>

            <Box
                sx={{
                    p: 2,
                    gap: 1.5,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <TextField
                    fullWidth
                    placeholder="/type a command or send ..."
                    variant="outlined"
                    size="small"
                    onChange={handleInputChange}
                    sx={{
                        height: '40px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '10px',
                        },
                        '& .MuiOutlinedInput-root.Mui-focused': {
                            borderColor: (theme) => theme.palette.color.active,
                        },
                    }}
                />
                <Button sx={{
          bgcolor: (theme) => theme.palette.color.active,
          color: (theme) => theme.palette.color.primary,
          ":hover": {
            color: (theme) => theme.palette.color.primary,
            bgcolor: (theme) => theme.palette.color.active,
          }
        }}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default AiAssistant;
