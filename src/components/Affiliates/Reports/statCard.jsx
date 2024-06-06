import React from "react";
import { Box, Stack, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import HelpIcon from "@mui/icons-material/Help";

const BackgroundBox = styled(Box)(({ theme }) => ({
    height: "100%",
    border: "1px solid rgba(140,173,255,0.1)",
    borderRadius: "18px",
    padding: theme.spacing(3),
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));



const BackgroundImage = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/svg/statsCardBg.svg")',
    backgroundSize: 'cover',
    opacity: 0.8,
});


const StatCard = ({ title, value }) => (
    <BackgroundBox>
        <BackgroundImage />
        <Box zIndex={1}>
            <Stack direction="row" alignItems="center" gap={1} mt={2}>
                <Typography variant="subtitle2">{title}</Typography>
                <Tooltip title="Please Choose Status" placement="top">
                    <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                </Tooltip>
            </Stack>
            <Typography variant="h2" fontSize="25px" mt={3}>{value}</Typography>
        </Box>
    </BackgroundBox>
);

export default StatCard;