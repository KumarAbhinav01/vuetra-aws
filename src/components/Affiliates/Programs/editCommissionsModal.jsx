import React from 'react';
import {
    Box,
    Button,
    Divider,
    FormLabel,
    Modal,
    Stack,
    Tooltip,
    Typography
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import FormInput from '../../ui/FormInput';
import HelpIcon from "@mui/icons-material/Help";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
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


const EditCommissionsModal = ({ open, handleClose }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Box sx={{ position: 'relative', p: 4 }}>
                    <Typography variant="h3" component="h2" mb={2}>
                        Click Commission
                    </Typography>
                    <Divider />
                    <Stack spacing={3} mt={3}>

                        <Box sx={{ border: "1px solid rgba(100, 125, 181, 0.17)", borderRadius: 2 }}>
                            <Typography variant="h4" sx={{ backgroundColor: "#131517", color: "white", p: 2, borderRadius: 4 }}>
                                Commission type settings
                            </Typography>
                            <Box p={2}>
                                <Stack spacing={1} sx={{ flex: 1 }}>
                                    <FormLabel>Approval</FormLabel>
                                    <FormInput
                                        placeholder="Autometic Approval"
                                    />

                                    <Stack direction="row" gap={1}>
                                        <Box
                                            height="20px"
                                            width="20px"
                                            sx={{
                                                border: "1px solid rgba(46,62,97,0.17)",
                                                backgroundColor: "#161A1C",
                                                borderRadius: "5px"
                                            }}
                                        >
                                        </Box>
                                        <Typography variant='body2' fontSize="14px">General Commision only for unique clicks</Typography>
                                    </Stack>


                                </Stack>


                            </Box>
                        </Box>

                        <Box sx={{ border: "1px solid rgba(100, 125, 181, 0.17)", borderRadius: 2 }}>
                            <Typography variant="h4" sx={{ backgroundColor: "#131517", color: "white", p: 2, borderRadius: 4 }}>
                                Commissions
                            </Typography>
                            <Box p={2}>
                                <Stack spacing={1} sx={{ flex: 1 }}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <FormLabel>Commissions</FormLabel>
                                        <Tooltip title="Commissions" placement="top">
                                            <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
                                        </Tooltip>
                                    </Stack>
                                    <FormInput
                                        placeholder="0.5"
                                    />
                                    <Stack direction="row" gap={1}>
                                        <Box
                                            height="20px"
                                            width="20px"
                                            sx={{
                                                border: "1px solid rgba(46,62,97,0.17)",
                                                backgroundColor: "#161A1C",
                                                borderRadius: "5px"
                                            }}
                                        >
                                        </Box>
                                        <Typography variant='body2' fontSize="14px">Support Multi tier commissions</Typography>
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

export default EditCommissionsModal;
