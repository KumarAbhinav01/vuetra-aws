import React from "react";
import HeroSection from "../components/Home/HeroSection";
import {
  Box,
  Card,
  Grid,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { dashboardItems2, dashboardItems3 } from "../static/dashboardItem";
import { FiArrowUpRight } from "react-icons/fi";
import HelpIcon from "@mui/icons-material/Help";
import TicketSection from "../components/Home/TicketSection";
import ScheduleSection from "../components/Home/ScheduleSection";
import FourthSection from "../components/Statistics/StorePerformance/FourthSection";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <div>
      <HeroSection />
      <Box sx={{ maxWidth: "1070px", margin: "0 auto", padding: "24px" }}>
        <Box
          sx={{
            margin: "0 auto",
            display: "flex",
            gap: "24px",
          }}
        >
          {dashboardItems2.map((item) => (
            <Tooltip title={item.tooltip} placement="top">
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  height: "70px",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={() => navigate(item.page)}
              >
                <item.icon size={16} />
                <Typography variant="subtitle1">{item.title}</Typography>
              </Card>
            </Tooltip>
          ))}
        </Box>
        <Box sx={{ display: "flex", mt: 5 }}>
          {dashboardItems3.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "24px",
                width: "100%",
                height: "140px",
                borderBottom: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
                ...(index === 0 && {
                  borderRight: (theme) =>
                    `1px solid ${theme.palette.color.border}`,
                }),
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  color: (theme) => theme.palette.color.secondary,
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Typography variant="caption">{item.title}</Typography>
                  <Tooltip title={item.tooltip} placement="top">
                    <HelpIcon sx={{ fontSize: "15px" }} />
                  </Tooltip>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <FiArrowUpRight size={16} />
                  <Typography variant="caption">+3.7%</Typography>
                </Stack>
              </Box>
              <Typography variant="h1">{item.value}</Typography>
            </Box>
          ))}
        </Box>
        <TicketSection />
        <ScheduleSection />
        <Grid container spacing={2} sx={{ my: "24px" }}>
          <FourthSection
            series={[
              {
                name: "Yesterday",
                data: [0.5, 2, 1.2, 3.3, 0.8, 3.1, 1.7],
                color: theme.palette.color.secondary,
              },
              {
                name: "Today",
                data: [0, 2.8, 0.8, 4, 1.5, 3.4, 1.2],
                color: theme.palette.color.green,
              },
            ]}
          />
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
