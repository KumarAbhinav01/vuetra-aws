import React from "react";
import { Box, Card, Grid, Stack, Tooltip, Typography } from "@mui/material";
import {
  dashboardItems,
  dashboardItems2,
  dashboardItems3,
} from "../static/dashboardItem";
import TicketSection from "../components/Home/TicketSection";
import ScheduleSection from "../components/Home/ScheduleSection";
import { useNavigate } from "react-router-dom";
import InfoBox from "../components/ui/InfoBox";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "1070px",
          margin: "0 auto",
          width: "100%",
          padding: { xs: "24px 12px ", lg: "24px" },
        }}
      >
        <Grid container spacing={3}>
          {dashboardItems.map((item, index) => (
            <Grid item xs={6} lg={3} key={item.title}>
              <Card
                key={item.title}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  height: "120px",
                  width: "100%",
                  cursor: "pointer",
                  position: "relative",
                  padding: "2px",
                  color: (theme) => theme.palette.color.secondary,
                  background: (theme) => theme.palette.color.bg4,
                  ":hover": {
                    border: (theme) =>
                      `1px solid ${theme.palette.color.active}`,
                    color: (theme) => theme.palette.color.active,
                  },
                }}
                onClick={() => navigate(item.page)}
              >
                <item.icon size={20} />
                <Typography
                  variant="h6"
                  sx={{
                    color: (theme) => theme.palette.color.secondary,
                  }}
                >
                  {item.title}
                </Typography>
                {item.count && (
                  <Typography
                    variant="caption_500"
                    sx={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                    }}
                  >
                    ({item.count})
                  </Typography>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          maxWidth: "1070px",
          margin: "0 auto",
          padding: { xs: "24px 12px", lg: "24px" },
        }}
      >
        <Box
          sx={{
            margin: "0 auto",
            display: "flex",
            gap: "24px",
          }}
        >
          <Grid container spacing={3}>
            {dashboardItems2.map((item) => (
              <Grid item xs={6} lg={3} key={item.title}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    height: "70px",
                    width: "100%",
                    cursor: "pointer",
                    padding: "0px",
                    color: (theme) => theme.palette.color.secondary,
                    ":hover": {
                      border: (theme) =>
                        `1px solid ${theme.palette.color.active}`,
                      color: (theme) => theme.palette.color.active,
                    },
                  }}
                  onClick={() => navigate(item.page)}
                >
                  <item.icon size={16} />
                  <Typography variant="caption">{item.title}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <TicketSection />
      </Box>
    </Box>
  );
};

export default Home;
