import {
  Box,
  Card,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import DownloadIcon from "@mui/icons-material/Download";

function Verification() {
  return (
    <Box
      sx={{
        px: "12px",
        py: "24px",
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Box
          sx={{
            padding: "4px",
            borderRadius: "100%",
            background: (theme) => theme.palette.color.green,
          }}
        ></Box>
        <Typography variant="h4">Customer Verified</Typography>
      </Stack>
      <Stack
        direction={"row"}
        spacing={3}
        alignItems="center"
        sx={{ pt: 2, width: "100%", mb: "24px" }}
      >
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Typography variant="subtitle1" sx={{ fontSize: "13.5px" }}>
            Personal
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                width: "100%",
              }}
            >
              <Typography variant="body2">Platform used</Typography>
              <Typography variant="body1">SumSub</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                width: "100%",
              }}
            >
              <Typography variant="body2">Device</Typography>
              <Typography variant="body1">IOS</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                width: "100%",
              }}
            >
              <Typography variant="body2">IP location</Typography>
              <Typography variant="body1">NL</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                width: "100%",
              }}
            >
              <Typography variant="body2">KYC</Typography>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: (theme) => theme.palette.color.green,
                }}
              />
            </Box>
          </Box>
        </Stack>
        <Divider
          sx={{
            border: (theme) => `1.5px solid ${theme.palette.color.primary}`,
          }}
          orientation="vertical"
          flexItem
        />
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Typography variant="subtitle1" sx={{ fontSize: "13.5px" }}>
            Personal
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                width: "100%",
              }}
            >
              <Typography variant="body2">First name</Typography>
              <Typography variant="body1">Jens</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                width: "100%",
              }}
            >
              <Typography variant="body2">Last name</Typography>
              <Typography variant="body1">Netherlands</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                width: "100%",
              }}
            >
              <Typography variant="body2">Date of birth</Typography>
              <Typography variant="body1">16.03.2000</Typography>
            </Box>
          </Box>
        </Stack>
        <Divider
          sx={{
            border: (theme) => `1.5px solid ${theme.palette.color.primary}`,
          }}
          orientation="vertical"
          flexItem
        />

        <Stack spacing={2} sx={{ width: "100%" }}>
          <Typography variant="subtitle1" sx={{ fontSize: "13.5px" }}>
            Document
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                width: "100%",
              }}
            >
              <Typography variant="body2">Document country</Typography>
              <Typography variant="body1">NL</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                width: "100%",
              }}
            >
              <Typography variant="body2">Document ID</Typography>
              <Typography variant="body1">ID</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                width: "100%",
              }}
            >
              <Typography variant="body2">Email</Typography>
              <Typography variant="body1">***********</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                width: "100%",
              }}
            >
              <Typography variant="body2">Doc. Number</Typography>
              <Typography variant="body1">***********</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1.5,
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                width: "100%",
              }}
            >
              <Typography variant="body2">Expires at</Typography>
              <Typography variant="body1">16.03.2000</Typography>
            </Box>
          </Box>
        </Stack>
      </Stack>

      <Box sx={{ pt: "24px" }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4">Files</Typography>
          <DriveFolderUploadIcon
            sx={{
              fontSize: "15px",
              color: (theme) => theme.palette.color.secondary,
            }}
          />
        </Stack>
        <Grid container spacing={2} sx={{ pt: "12px" }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                padding: "15px",
                background: (theme) => theme.palette.color.bg2,
                borderRadius: "12px",
              }}
            >
              <Stack spacing={0.5}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="subtitle1">Contract 1</Typography>
                  <IconButton>
                    <DownloadIcon
                      sx={{
                        color: (theme) => theme.palette.color.secondary,
                        fontSize: "15px",
                      }}
                    />
                  </IconButton>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      padding: "4px",
                      borderRadius: "100%",
                      background: (theme) => theme.palette.color.green,
                    }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: (theme) => theme.palette.color.green,
                    }}
                  >
                    Signed
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                padding: "15px",
                background: (theme) => theme.palette.color.bg2,
                borderRadius: "12px",
              }}
            >
              <Stack spacing={0.5}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="subtitle1">Contract 2</Typography>
                  <IconButton>
                    <DownloadIcon
                      sx={{
                        color: (theme) => theme.palette.color.secondary,
                        fontSize: "15px",
                      }}
                    />
                  </IconButton>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box
                    sx={{
                      padding: "4px",
                      borderRadius: "100%",
                      background: (theme) => theme.palette.color.green,
                    }}
                  ></Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: (theme) => theme.palette.color.green,
                    }}
                  >
                    Signed
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Verification;
