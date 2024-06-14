import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Modal,
    Radio,
    RadioGroup,
    Stack,
    Tooltip,
    Typography
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import FormInput from '../../ui/FormInput';
import HelpIcon from "@mui/icons-material/Help";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FiUploadCloud } from 'react-icons/fi';

const UploadBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#161A1C',
  padding: theme.spacing(4),
  width: '100%',
  maxHeight: '400px',
  margin: 'auto',
  cursor: 'pointer',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: 2,
    backgroundColor: theme.palette.color.bg2,
    border: `2px solid ${theme.palette.grey[500]}`,
    marginBottom: theme.spacing(2),
  }));

const UploadIcon = styled(FiUploadCloud)(({ theme }) => ({
  fontSize: '1.5rem',
  color: theme.palette.color.white,
}));

const UploadText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
  marginTop: theme.spacing(2),
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    maxHeight: '80vh',
    bgcolor: (theme) => theme.palette.color.bg,
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '8px',
    overflowY: 'auto',
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
};

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


const CreateAnnouncementModal = ({ open, handleClose }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Box sx={{ position: 'relative', p: 4 }}>
                    <Typography variant="h3" component="h2" mb={2}>
                        Create Announcement
                    </Typography>
                    <Divider />
                    <Stack spacing={3} mt={3}>
                        <Stack spacing={1}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <FormLabel>Title</FormLabel>
                                <Tooltip title="Enter Title" placement="top">
                                    <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                                </Tooltip>
                            </Stack>
                            <FormInput
                                sx={{backgroundColor: '#161A1C'}}
                                placeholder="Annoucement 1"
                            />
                        </Stack>

                        <Stack spacing={1}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <FormLabel>Execution date</FormLabel>
                                <Tooltip title="Execution date" placement="top">
                                    <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                                </Tooltip>
                            </Stack>
                            <RadioGroup row>
                                <FormControlLabel
                                    value="active"
                                    control={<BpRadio />}
                                    label="Right Now"
                                />
                                <FormControlLabel
                                    value="stopped"
                                    control={<BpRadio />}
                                    label="Planned"
                                />
                            </RadioGroup>
                            <FormInput
                                sx={{backgroundColor: '#161A1C'}}
                                placeholder="Select Date"
                            />
                        </Stack>

                        <Stack spacing={1}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <FormLabel>Description</FormLabel>
                                <Tooltip title="Enter Description" placement="top">
                                    <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                                </Tooltip>
                            </Stack>
                            <FormInput
                                placeholder="Description"
                                sx={{ height: '100px', alignItems: "start", backgroundColor: '#161A1C' }}
                                />
                        </Stack>


                        <Stack spacing={4} display="flex" direction="row">
                        <Stack spacing={1} flex={1}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <FormLabel>Select Campgaign</FormLabel>
                                <Tooltip title="Select Campgaign" placement="top">
                                    <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                                </Tooltip>
                            </Stack>
                            <FormInput
                                placeholder="First Campaign"
                                sx={{backgroundColor: '#161A1C'}}
                            />
                        </Stack>
                        <Stack spacing={1} flex={1}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <FormLabel>Select User</FormLabel>
                                <Tooltip title="Select User" placement="top">
                                    <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                                </Tooltip>
                            </Stack>
                            <FormInput
                                sx={{backgroundColor: '#161A1C'}}
                                placeholder="First User"
                            />
                        </Stack>
                        </Stack>

                        <Stack>
                        <FormLabel sx={{mb: 1}}>Attached File</FormLabel>
                        <UploadBox>
                            <IconWrapper>
                            <UploadIcon />
                            </IconWrapper>
                            <UploadText>
                                <Stack direction="row" alignItems='flex-end' spacing={1}>
                                <Typography fontSize={'18px'} variant="h6">Click to upload file</Typography>
                                <Typography fontSize={'15px'} variant="body2">or drag and drop</Typography>
                                </Stack>
                                <Typography fontSize={'15px'} variant="body2">SVG, PNG, JPG or GIF (max. 800×400px)</Typography>
                            </UploadText>
                        </UploadBox>
                        </Stack>


                    </Stack>
                </Box>
                <Box sx={{ position: 'sticky', bottom: 0, backgroundColor: "#131517", p: 2 }}>
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button
                            onClick={handleClose}
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
                            }}>Cancel</Button>
                        <Button variant="contained" sx={{ px: 4 }}>Create</Button>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    );
};

export default CreateAnnouncementModal;
