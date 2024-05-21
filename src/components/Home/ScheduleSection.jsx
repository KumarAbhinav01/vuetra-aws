import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";
import { activeSales } from "../../static/dashboardItem";

const ScheduleSection = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Box
        sx={{
          width: "100%",
          border: (theme) => `1px solid ${theme.palette.color.border}`,
          background: (theme) => theme.palette.color.bg2,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Header title="Active Sales" />
        <Box sx={{ p: "14px", height: "350px", overflowY: "auto" }}>
          <Stack spacing={5}>
            {activeSales.map((sales, index) => (
              <Stack spacing={1}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: (theme) =>
                      sales.color === "green"
                        ? theme.palette.color.green
                        : theme.palette.color.secondary,
                  }}
                >
                  {sales.heading}
                </Typography>
                {sales.sales.map((sale) => (
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      borderLeft: (theme) =>
                        sales.color === "green"
                          ? `3px solid ${theme.palette.color.green}`
                          : `3px solid ${theme.palette.color.secondary}`,
                      borderRadius: "12px",
                      py: "12px",
                      px: "6px",
                    }}
                  >
                    <Stack spacing={1}>
                      <Typography variant="subtitle1">{sale.title}</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="subtitle2">
                          {sale.discount}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            p: "2px",
                            background: (theme) => theme.palette.color.border,
                          }}
                        >
                          {sale.code}
                        </Typography>
                        <Typography variant="subtitle2">
                          {sale.product}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography variant="subtitle1">
                        {sale.startDate}
                      </Typography>
                      <Typography variant="subtitle1">
                        {sale.endDate}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          border: (theme) => `1px solid ${theme.palette.color.border}`,

          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Header title="E Commerce Calendar" />
        <Stack
          spacing={1}
          sx={{
            p: "24px",
            height: "350px",
            overflowY: "auto",
          }}
        >
          <Typography variant="subtitle2">March</Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              py: "12px",
              px: "12px",
              borderLeft: (theme) => `2px solid ${theme.palette.color.border}`,
              borderRadius: "12px",
              ":hover": {
                background: (theme) => theme.palette.color.bg2,
              },
              cursor: "pointer",
            }}
          >
            <Stack spacing={1}>
              <Typography variant="subtitle1">Easter</Typography>
              <Typography variant="subtitle2">International</Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="subtitle1" sx={{ alignSelf: "flex-end" }}>
                31 March
              </Typography>
              <Button
                sx={{
                  padding: "4px 10px",
                  fontSize: "11px",
                  fontWeight: 600,
                  transition: "all 500ms ease-in-out",
                  borderRadius: "sm",
                  outline: "none",
                  opacity: 1,
                  "&:hover": {
                    opacity: 0.35,
                    background: (theme) =>
                      alpha(theme.palette.color.secondary, 0.1),
                  },
                  color: (theme) => theme.palette.color.secondary,
                  backgroundColor: (theme) =>
                    alpha(theme.palette.color.secondary, 0.1),
                }}
              >
                Create Sale
              </Button>
              {/* <Typography
                variant="subtitle2"
                sx={{
                  p: "6px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  background: (theme) => theme.palette.color.border,
                  color: (theme) => theme.palette.color.secondary,
                  ":hover": { opacity: 0.35 },
                }}
              >
                Create Sale
              </Typography> */}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ScheduleSection;

const Header = ({ title }) => {
  return (
    <Box
      sx={{
        p: "14px",
        width: "100%",
        background: (theme) => theme.palette.color.bg2,
        borderBottom: (theme) => `1px solid ${theme.palette.color.border}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="caption">{title}</Typography>
        <Box>
          <Stack direction="row" alignItems={"center"} spacing={1.5} sx={{}}>
            <IconButton>
              <ChevronLeft
                sx={{
                  fontSize: "18px",
                  color: (theme) => theme.palette.color.secondary,
                }}
              />
            </IconButton>
            <Typography
              variant="caption"
              sx={{ color: (theme) => theme.palette.color.green }}
            >
              Mar
            </Typography>
            <Typography variant="caption">Apr</Typography>
            <Typography variant="caption">May</Typography>
            <Typography variant="caption">Jun</Typography>
            <IconButton>
              <ChevronRight
                sx={{
                  fontSize: "18px",
                  color: (theme) => theme.palette.color.secondary,
                }}
              />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
