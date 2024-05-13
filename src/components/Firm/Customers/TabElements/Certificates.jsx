import {
  Box,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
  Grid,
  Tooltip,
  Card,
} from "@mui/material";
import React from "react";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { RiFileList2Line } from "react-icons/ri";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Certificates = () => {
  const isLarger = useMediaQuery("(max-width:1320px)");
  return (
    <Paper
      sx={{
        mx: "auto",
        width: "100%",
        maxWidth: { md: "800px", lg: isLarger ? "870px" : "1040px" },
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          mb: "24px",
          fontSize: "11.5px",
          color: (theme) => theme.palette.color.secondary,
        }}
      >
        <Tooltip title="Display table elements" placement="top">
          <Typography
            variant="body2"
            sx={{
              border: (theme) => `1px solid ${theme.palette.color.border}`,
              padding: "5px",
            }}
          >
            Manage certificates
          </Typography>
        </Tooltip>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: (theme) => theme.palette.color.bg2,
            padding: "3px",
          }}
        >
          <IconButton
            sx={{
              p: "2px",
              borderRadius: "4px",
              color: (theme) => theme.palette.color.secondary,
            }}
          >
            <FormatListBulletedIcon sx={{ fontSize: "13px" }} />
          </IconButton>
          <IconButton
            sx={{
              p: "2px",
              borderRadius: "4px",
              background: (theme) => theme.palette.color.bg3,
              color: (theme) => theme.palette.color.secondary,
            }}
          >
            <RiFileList2Line size={12} />
          </IconButton>
        </Box>
      </Stack>
      <Box
        sx={{
          maxWidth: { xs: 350, md: 450, lg: 750 },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              sx={{
                padding: "15px",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1">Phase 2 - passed</Typography>
                  <Typography variant="body2">Certificate</Typography>
                </Stack>
                <IconButton>
                  <MoreVertIcon
                    sx={{
                      color: (theme) => theme.palette.color.secondary,
                      fontSize: "15px",
                    }}
                  />
                </IconButton>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              sx={{
                padding: "15px",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1">Phase 1 - passed</Typography>
                  <Typography variant="body2">Certificate</Typography>
                </Stack>
                <IconButton>
                  <MoreVertIcon
                    sx={{
                      color: (theme) => theme.palette.color.secondary,
                      fontSize: "15px",
                    }}
                  />
                </IconButton>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Certificates;
