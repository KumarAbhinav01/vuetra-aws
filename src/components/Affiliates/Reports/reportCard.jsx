import React from 'react';
import DocumentIcon from '@mui/icons-material/Description';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';

const BackgroundBox = styled(Box)(({ theme }) => ({
    height: "100%",
    background: theme.palette.mode === 'dark' ? 'linear-gradient(to bottom, #121418, #1D232F)' : 'transparent',
    border: "1px solid rgba(140,173,255,0.2)",
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
    backgroundImage: 'url("/svg/cardBg.svg")',
    backgroundSize: 'cover',
    opacity: 0.1,
});


const IconCircle = styled(Box)(({ theme }) => ({
    top: theme.spacing(2),
    width: theme.spacing(6),
    height: theme.spacing(6),
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : 'transparent',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
}));

const ReportCard = () => (
    <BackgroundBox>
        <BackgroundImage />
        <Box zIndex={1}>
        <IconCircle>
                <DocumentIcon style={{ color: '#8CADFF' }} />
            </IconCircle>
            <Typography variant="h4" mt={2}>May Report</Typography>
            <Typography variant="body1" width={"250px"} mt={2}>
                This pro-add-on is available for people on a Professional license.
            </Typography>
            <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{ mt: 2, backgroundColor: '#fff', color: '#1E1E1E', '&:hover': { backgroundColor: '#fff' }}}
            >
                Download Report
            </Button>
        </Box>
    </BackgroundBox>
);

export default ReportCard;