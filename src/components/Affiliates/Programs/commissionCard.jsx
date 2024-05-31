import React from 'react';
import { Box, Button, Card, Divider, Typography, alpha } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  color: '#ffffff',
  border: '1px solid rgba(100,125,181,0.17)',
  borderRadius: '6px',
  overflow: 'visible',
  padding: 0,
  textAlign: 'center',
  marginBottom: '25px',
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

const CommissionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  gap: theme.spacing(2),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  padding: theme.spacing(2, 0),
}));

const CommissionItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  border: '1px solid rgba(46,62,97,0.17)',
  borderRadius: '6px',
  alignItems: 'start',
  flexDirection: 'column',
  width: '20%',
  padding: theme.spacing(2),
}));

const BottomSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#131517',
  borderRadius: '0 0 6px 6px',
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'end',
  gap: theme.spacing(2),
}));

const CommissionCard = ({ commissions, onClick }) => {
  return (
    <StyledCard>
      <Header>
        <img src="/svg/cursor-click.svg" alt="Cursor Click" style={{ width: 24, height: 24, marginRight: 8 }} />
        <Typography variant="h4">Per Click</Typography>
        <Typography variant="body1">ID: fw1×2y11</Typography>
      </Header>
      <Divider sx={{ borderColor: 'rgba(100,125,181,0.17)', mx: "10px" }} />
      <CommissionBox>
        {commissions.map((commission, index) => (
          <CommissionItem key={index}>
            <Typography variant="h4">${commission.amount.toFixed(2)}</Typography>
            <Typography variant="body2">{commission.label}</Typography>
          </CommissionItem>
        ))}
      </CommissionBox>
      <Divider sx={{ borderColor: 'rgba(100,125,181,0.17)' }} />
      <BottomSection>
        <Button variant="contained" sx={{ px: 4 }} onClick={onClick}>Edit</Button>
        <Button
          sx={{
            background: (theme) =>
              alpha(theme.palette.color.secondary, 0.15),
            color: (theme) => theme.palette.color.primary,
            borderRadius: "9px",
            ":hover": {
              background: (theme) =>
                alpha(theme.palette.color.secondary, 0.15),
            },
            px: 4
          }}>Disable</Button>
      </BottomSection>
    </StyledCard>
  );
};

export default CommissionCard;