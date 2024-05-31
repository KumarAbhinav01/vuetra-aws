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


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    maxHeight: '80vh',
    bgcolor: 'background.paper',
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


const CreateCampaignModal = ({ open, handleClose }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Box sx={{ position: 'relative', p: 4 }}>
                    <Typography variant="h3" component="h2" mb={2}>
                        Create Campaign
                    </Typography>
                    <Divider />
                    <Stack spacing={3} mt={3}>
                        <Typography variant="h6">Campaign Logo</Typography>
                        <Stack direction="row" spacing={2} alignItems={"center"}>
                            <Avatar sx={{ bgcolor: "#07B869", color: "white", width: "48px", height: "48px" }}>J</Avatar>
                            <Button sx={{
                                background: (theme) =>
                                    alpha(theme.palette.color.secondary, 0.15),
                                color: (theme) => theme.palette.color.primary,
                                borderRadius: "9px",
                                ":hover": {
                                    background: (theme) =>
                                        alpha(theme.palette.color.secondary, 0.15),
                                },
                            }}>Choose</Button>
                            <Typography variant="body1" color={"#8A96A6"}>JPG, GIF or PNG. 1MB Max.</Typography>
                        </Stack>

                        <Stack spacing={1}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <FormLabel>Campaign Name</FormLabel>
                                <Tooltip title="Enter Campaign Name" placement="top">
                                    <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                                </Tooltip>
                            </Stack>
                            <FormInput
                                placeholder="First Campaign"
                            />
                        </Stack>

                        <Stack spacing={1}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <FormLabel>Status</FormLabel>
                                <Tooltip title="Please Choose Status" placement="top">
                                    <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                                </Tooltip>
                            </Stack>
                            <RadioGroup row>
                                <FormControlLabel
                                    value="active"
                                    control={<BpRadio />}
                                    label="Active"
                                />
                                <FormControlLabel
                                    value="paused"
                                    control={<BpRadio />}
                                    label={<>Paused<span style={{ color: 'grey' }}> (visible to affiliates)</span></>}
                                />
                                <FormControlLabel
                                    value="stopped"
                                    control={<BpRadio />}
                                    label={<>Stopped<span style={{ color: 'grey' }}> (invisible to affiliates)</span></>}
                                />
                            </RadioGroup>
                        </Stack>

                        <Box sx={{ border: "1px solid rgba(100, 125, 181, 0.17)", borderRadius: 2 }}>
                            <Typography variant="h4" sx={{ backgroundColor: "#131517", color: "white", p: 2, borderRadius: 4 }}>Cookies</Typography>
                            <Box p={2}>
                                <Stack spacing={1} sx={{ flex: 1 }}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <FormLabel>Limit cookies lifetime to (days)</FormLabel>
                                        <Tooltip title="Limit cookies lifetime to (days)" placement="top">
                                            <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                                        </Tooltip>
                                    </Stack>
                                    <FormInput
                                        placeholder="60"
                                    />
                                </Stack>

                                <Stack direction="row" mt={2}>
                                    <Box mr={10}>
                                        <Stack direction="row" spacing={1} alignItems="center" sx={{ flex: 1 }}>
                                            <FormLabel>Overwrite previous cookies</FormLabel>
                                            <Tooltip title="Overwrite previous cookies" placement="top">
                                                <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                                            </Tooltip>
                                        </Stack>
                                        <RadioGroup row >
                                            <Stack direction="row" spacing={4}>
                                                <FormControlLabel
                                                    value="yes"
                                                    control={<BpRadio />}
                                                    label="Yes"
                                                />
                                                <FormControlLabel
                                                    value="no"
                                                    control={<BpRadio />}
                                                    label="No"
                                                />
                                                <FormControlLabel
                                                    value="no"
                                                    control={<BpRadio />}
                                                    label={<>Default<span style={{ color: 'grey' }}> (No)</span></>}
                                                />
                                            </Stack>
                                        </RadioGroup>
                                    </Box>

                                    <Box>
                                        <Stack direction="row" spacing={1} alignItems="center" sx={{ flex: 1 }}>
                                            <FormLabel>Delete Cookies after lead / sale</FormLabel>
                                            <Tooltip title="Delete Cookies after lead / sale" placement="top">
                                                <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                                            </Tooltip>
                                        </Stack>
                                        <RadioGroup row>
                                            <Stack direction="row" spacing={4}>
                                                <FormControlLabel
                                                    value="yes"
                                                    control={<BpRadio />}
                                                    label="Yes"
                                                />
                                                <FormControlLabel
                                                    value="no"
                                                    control={<BpRadio />}
                                                    label="No"
                                                />
                                                <FormControlLabel
                                                    value="no"
                                                    control={<BpRadio />}
                                                    label={<>Default<span style={{ color: 'grey' }}> (No)</span></>}
                                                />
                                            </Stack>

                                        </RadioGroup>
                                    </Box>





                                </Stack>


                            </Box>
                        </Box>


                        <Box sx={{ border: "1px solid rgba(100, 125, 181, 0.17)", borderRadius: 2 }}>
                            <Typography variant="h4" sx={{ backgroundColor: "#131517", color: "white", p: 2, borderRadius: 4 }}>Affiliate linking Method</Typography>
                            <Box p={2}>
                                <FormControl component="fieldset">
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <FormLabel>Link Style</FormLabel>
                                        <Tooltip title="Link Style" placement="top">
                                            <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                                        </Tooltip>
                                    </Stack>
                                    <RadioGroup row>
                                        <FormControlLabel
                                            value="default"
                                            control={<BpRadio />}
                                            label={<>Default<span style={{ color: 'grey' }}> (Tracking System)</span></>}
                                        />
                                        <FormControlLabel
                                            value="anchor"
                                            control={<BpRadio />}
                                            label="Anchor links"
                                        />
                                        <FormControlLabel
                                            value="new"
                                            control={<BpRadio />}
                                            label={<>New style links<span style={{ color: 'grey' }}> (URL parameters)</span></>}
                                        />
                                        <FormControlLabel
                                            value="modRewrite"
                                            control={<BpRadio />}
                                            label={<>Mod rewrite links<span style={{ color: 'grey' }}> (Tracking System)</span></>}
                                        />
                                        <FormControlLabel
                                            value="direct"
                                            control={<BpRadio />}
                                            label={<>DirectLink style<span style={{ color: 'grey' }}> (no URL parameters)</span></>}
                                        />
                                        <FormControlLabel
                                            value="redirect"
                                            control={<BpRadio />}
                                            label="Redirect links"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <Stack direction="row" spacing={2} mt={3}>
                                    <Stack spacing={1} sx={{ flex: 1 }}>
                                        <FormLabel>Campaign URL</FormLabel>
                                        <FormInput
                                            placeholder="https://www.example.com"
                                        />
                                    </Stack>
                                    <Stack spacing={1} sx={{ flex: 1 }}>
                                        <FormLabel>Additional URL parameters for campaign</FormLabel>
                                        <FormInput
                                            placeholder="https://www.example.com"
                                        />
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>


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

export default CreateCampaignModal;
