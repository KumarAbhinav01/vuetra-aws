import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Tooltip,
  Typography
} from '@mui/material'; import { alpha } from '@mui/material/styles';
import FormInput from '../../ui/FormInput';
import HelpIcon from "@mui/icons-material/Help";
import { styled } from '@mui/material/styles';


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


const EditCampaignForm = () => {
  return (
    <Stack>
      <Stack direction="row">
        <Stack direction="column" spacing={3}>
          <Typography variant='h5'>Campaign Logo</Typography>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <FormLabel>Campaign Name</FormLabel>
              <Tooltip title="Campaign Name" placement="top">
                <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
              </Tooltip>
            </Stack>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur</Typography>
          </Box>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <FormLabel>Description</FormLabel>
              <Tooltip title="Description" placement="top">
                <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
              </Tooltip>
            </Stack>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur</Typography>
          </Box>

        </Stack>

        <Stack direction="column" spacing={3} ml={25} width={"600px"}>
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
          <Box>
            <FormInput
              placeholder="Campaign 1"
            />
          </Box>
          <Box>
            <FormInput
              placeholder="Description"
              sx={{ height: '170px', alignItems: "start" }}
            />
          </Box>

        </Stack>
      </Stack>
      <Stack spacing={1} mt={5}>
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

      <Divider sx={{ my: 4 }} />

      <Stack>
        <Typography variant="h3">Cookies</Typography>
        <Typography variant="body2" mt={1}>Lorem ipsum dolor sit amet consectetur. Aliquet feugiat nunc sed accumsan blandit sit pharetra vestibulum a.</Typography>

        <Stack direction="row" useFlexGap mt={4}>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <FormLabel>Limit cookies lifetime to (days)</FormLabel>
              <Tooltip title="Limit cookies lifetime to (days)" placement="top">
                <HelpIcon sx={{ fontSize: "15px", color: (theme) => theme.palette.text.secondary }} />
              </Tooltip>
            </Stack>
            <Typography variant='body2'>What is your business Name</Typography>
          </Box>
          <Box ml={25} width={"600px"}>
            <FormInput
              placeholder="60"
            />
          </Box>

        </Stack>

        <Box mr={10} mt={2}>
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

        <Box mt={2}>
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

      <Divider sx={{ my: 4 }} />

      <Stack>
        <Typography variant="h3">Affiliate linking Method</Typography>
        <Typography variant="body2" mt={1}>Lorem ipsum dolor sit amet consectetur. Aliquet feugiat nunc sed accumsan blandit sit pharetra vestibulum a.</Typography>


        <FormControl component="fieldset" sx={{ mt: 4 }}>
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


        <Stack direction="row" useFlexGap mt={4}>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <FormLabel>Campaign URL</FormLabel>
            </Stack>
            <Typography variant='body2'>What is your business Name</Typography>
          </Box>
          <Box ml={40} width={"600px"}>
            <FormInput
              placeholder="60"
            />
          </Box>

        </Stack>

        <Stack direction="row" useFlexGap mt={4}>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <FormLabel>Additional URL parameters for campgain</FormLabel>
            </Stack>
            <Typography variant='body2'>What is your business Name</Typography>
          </Box>
          <Box ml={25} width={"600px"}>
            <FormInput
              placeholder="60"
            />
          </Box>

        </Stack>


      </Stack>
      <Stack direction="row" spacing={2} mt={3} justifyContent="flex-end">
        <Button variant="contained" sx={{ px: 4 }}>Save</Button>
      </Stack>

    </Stack>
  )
}

export default EditCampaignForm