import React, { useState } from 'react';
import { Box, Paper, Stack, Typography, Divider, TextField, Button, Avatar, Link } from '@mui/material';
import { PiDotsSixVertical } from "react-icons/pi";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";


const ClientConversation = () => {
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
          <Typography variant="h6">
            Client Conversation
          </Typography>
        </Stack>
        <FaRegEyeSlash size={15} color={"gray"} />
      </Stack>
      <Divider />

      <Paper
        sx={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          background: '#F6F9FA',
        }}
      >

        <Box sx={{ mb: 2, width: '100%' }}>
          <Stack direction="row" spacing={1} alignItems="flex-end" sx={{ width: '100%' }}>
            <Box
              sx={{
                p: 2,
                py: 3,
                backgroundColor: '#111111',
                borderRadius: 2,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography variant="body1" color={"white"}>
                Hi there 👋
              </Typography>
              <Typography variant="body1" color={"white"} mt={1}>
                Is everything going well?
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


        <Box sx={{ mb: 2, width: '100%' }}>
          <Stack direction="row" spacing={1} alignItems="flex-end" sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                alt="User Avatar"
                src="https://via.placeholder.com/150"
                sx={{ width: 40, height: 40 }}
              />
            </Box>
            <Box
              sx={{
                p: 2,
                py: 3,
                backgroundColor: 'white',
                borderRadius: 2,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
             <Typography variant="body1">
                I got a question about my evaluation. I bought it 2 days ago, but I did not receive any account credentials yet.
              </Typography>
              <Typography mt={2} variant="body1">
                Is it possible to send those again?
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" justifyContent="start" sx={{ mt: 1 }}>
            <Typography variant='caption'>
              1m
            </Typography>
          </Stack>
        </Box>


        <Box sx={{ mb: 2, mt: 2, width: '100%' }}>
          <Stack direction="row" spacing={1} justifyContent="space-between" alignItems='center' sx={{ width: '100%' }}>
            <Stack direction="row" gap={1} alignItems="center">
          <Box sx={{border: '1px solid #8DADFF', borderRadius: '3px', px: '4px', py: '2px', color: '#8DADFF', fontSize: '10px'}}>Ai</Box>
          <Typography variant="caption" color="#8DADFF" sx={{ mb: 1 }}>
            AI suggestions
          </Typography>
          <Typography variant="caption" color="textSecondary" sx={{ mb: 1 }}>
            (only visible for you)
          </Typography>
          </Stack>
          <Link sx={{color: 'grey'}}>Reject</Link>
          </Stack>

          <Paper
            sx={{
              p: 2,
              mt: 1,
              backgroundColor: '#ECEFF2',
              width: '100%',
            }}
          >
            <Stack direction="row" gap={1} alignItems="center" justifyContent='space-between' mb={1}>
            <Typography variant="caption" color="textSecondary" sx={{ mb: 1 }}>
              Account credentials account #1050405
            </Typography>
            <MdContentCopy />
            </Stack>

            <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Trading platform
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Vuetra
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Account number
              </Typography>
              <Typography variant="body1" color="textSecondary">
                1050405
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" color="textSecondary">
                Password
              </Typography>
              <Typography variant="body1" color="textSecondary">
                45%tgL+4/1
              </Typography>
            </Stack>
          </Paper>
        </Box>

        {showHelp && (
          <Box sx={{ mt: 2, mb: 2, position: 'fixed', bottom: '55px' }}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: '#F6F9FA',
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
      </Paper>

      <Box
        sx={{
          p: 2,
          gap: 1.5,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#F6F9FA',
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
          }}
        />
        <Button>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ClientConversation;