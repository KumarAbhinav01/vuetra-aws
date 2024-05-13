import {
  Box,
  Grid,
  InputAdornment,
  InputBase,
  Stack,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import React from "react";

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,

    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontSize: "13px",
    fontWeight: "400",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "10px",
  },
  background: theme.palette.color.bg3,
}));

const First = () => {
  return (
    <>
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            // height: "350px",
            width: "50%",
            position: "relative",
          }}
        >
          <Box>
            <StyledInput
              sx={{
                backgroundColor: (theme) => theme.palette.color.bg2,
                px: 2,
                width: "100%",
                borderRadius: "10px",
                fontWeight: "500",
                fontSize: "14px",
              }}
              placeholder="Search location"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      fontSize: "17px",
                      color: (theme) => theme.palette.color.secondary,
                    }}
                  />
                </InputAdornment>
              }
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            // height: "350px",
            position: "relative",
            // p: "12px",
          }}
        >
          <Stack
            spacing={3}
            sx={{
              height: "100%",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ p: "12px" }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="subtitle2">
                  Most Popular Location
                </Typography>
                <Tooltip title="Amount of unresolved open tickets">
                  <HelpIcon
                    sx={{
                      fontSize: "15px",
                      cursor: "pointer",
                      color: (theme) => theme.palette.color.secondary,
                    }}
                  />
                </Tooltip>
              </Stack>
              <Typography sx={{ fontWeight: "600" }} variant="body2">
                21% customers
              </Typography>
            </Stack>
            <Stack spacing={2}>
              <Typography variant="h1" sx={{ px: "12px" }}>
                Canada
              </Typography>
              <Stack
                spacing={2}
                sx={{
                  background: (theme) => theme.palette.color.bg2,
                  p: "24px",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ pb: "12px" }}
                >
                  <Typography variant="h4">Spain</Typography>
                  <Typography variant="caption">Hover global</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Total sales</Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      "& span": {
                        color: (theme) => theme.palette.color.primary,
                      },
                    }}
                  >
                    <span>5,250/ </span>$150,105.10
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Most populair product</Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: (theme) => theme.palette.color.primary,
                    }}
                  >
                    Product name
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Total traders</Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: (theme) => theme.palette.color.primary,
                    }}
                  >
                    4105
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Average order value</Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: (theme) => theme.palette.color.primary,
                    }}
                  >
                    $499,95
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default First;
