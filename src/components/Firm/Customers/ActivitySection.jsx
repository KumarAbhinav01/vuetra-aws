import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RestoreIcon from "@mui/icons-material/Restore";
import { MdOutlineSegment } from "react-icons/md";
import { Comment } from "@mui/icons-material";
import { Stack } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ mt: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ActivitiesSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{
          minHeight: "20px !important",
          "& .MuiTabs-indicator": {
            background: "transparent !important",
          },
        }}
        indicatorColor="transparent"
      >
        <Tab
          sx={{
            minHeight: "20px !important",
            borderBottom: "none !important",
            paddingLeft: "0 !important",
          }}
          icon={
            <RestoreIcon
              sx={{
                fontSize: "15px !important",
              }}
            />
          }
          iconPosition="start"
          label="All Activity"
          {...a11yProps(0)}
        />
        <Tab
          icon={<MdOutlineSegment />}
          sx={{
            minHeight: "0 !important",
            borderBottom: "none !important",
            paddingLeft: "0 !important",
          }}
          label="Updates"
          {...a11yProps(1)}
          iconPosition="start"
        />
        <Tab
          sx={{
            minHeight: "0 !important",
            borderBottom: "none !important",
            paddingLeft: "0 !important",
            py: "10px !important",
          }}
          icon={
            <Comment
              sx={{
                fontSize: "15px !important",
              }}
            />
          }
          iconPosition="start"
          label="Comment"
          {...a11yProps(2)}
        />
      </Tabs>
      <Box sx={{ mt: 1 }}>
        <Stack direction="row" alignItems="center">
          <Box
            sx={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              background: (theme) => theme.palette.color.border,
              mr: 2,
            }}
          />
          <Typography
            variant="body3"
            sx={{
              color: (theme) => theme.palette.color.primary,
              pl: 1,
              py: 2,
              fontSize: "11.5px",
              borderLeft: (theme) => `1px solid ${theme.palette.color.border}`,
              span: {
                color: (theme) => theme.palette.color.secondary,
              },
            }}
          >
            Requested Payout <span>3 Apr, 2024 11:05</span>
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box
            sx={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              background: (theme) => theme.palette.color.border,
              mr: 2,
            }}
          />
          <Typography
            variant="body3"
            sx={{
              color: (theme) => theme.palette.color.primary,
              pl: 1,
              py: 2,
              fontSize: "10.5px",
              borderLeft: (theme) => `1px solid ${theme.palette.color.border}`,
              span: {
                color: (theme) => theme.palette.color.secondary,
              },
            }}
          >
            Challenge 2 passed <span>3 Apr, 2024 11:05</span>
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box
            sx={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              background: (theme) => theme.palette.color.border,
              mr: 2,
            }}
          />
          <Typography
            variant="body3"
            sx={{
              color: (theme) => theme.palette.color.primary,
              pl: 1,
              py: 2,
              borderLeft: (theme) => `1px solid ${theme.palette.color.border}`,
              span: {
                color: (theme) => theme.palette.color.secondary,
              },
            }}
          >
            Challenge 1 passed <span>3 Apr, 2024 11:05</span>
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box
            sx={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              background: (theme) => theme.palette.color.border,
              mr: 2,
            }}
          />
          <Typography
            variant="body3"
            sx={{
              color: (theme) => theme.palette.color.primary,
              pl: 1,
              py: 2,
              borderLeft: (theme) => `1px solid ${theme.palette.color.border}`,
              span: {
                color: (theme) => theme.palette.color.secondary,
              },
            }}
          >
            Challenge 1 passed <span>3 Apr, 2024 11:05</span>
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box
            sx={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              background: (theme) => theme.palette.color.border,
              mr: 2,
            }}
          />
          <Typography
            variant="body3"
            sx={{
              color: (theme) => theme.palette.color.primary,
              pl: 1,
              py: 2,
              borderLeft: (theme) => `1px solid ${theme.palette.color.border}`,
              span: {
                color: (theme) => theme.palette.color.secondary,
              },
            }}
          >
            Challenge 1 passed <span>3 Apr, 2024 11:05</span>
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box
            sx={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              background: (theme) => theme.palette.color.border,
              mr: 2,
            }}
          />
          <Typography
            variant="body3"
            sx={{
              color: (theme) => theme.palette.color.primary,
              pl: 1,
              py: 2,
              borderLeft: (theme) => `1px solid ${theme.palette.color.border}`,
              span: {
                color: (theme) => theme.palette.color.secondary,
              },
            }}
          >
            Challenge 1 passed <span>3 Apr, 2024 11:05</span>
          </Typography>
        </Stack>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
       
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
  );
}
