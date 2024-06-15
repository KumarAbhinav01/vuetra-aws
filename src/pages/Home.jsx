import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { dashboardItems, dashboardItems3 } from "../static/dashboardItem";
import TicketSection from "../components/Home/TicketSection";
import ScheduleSection from "../components/Home/ScheduleSection";
import { useNavigate } from "react-router-dom";
import InfoBox from "../components/ui/InfoBox";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ maxWidth: "1070px", margin: "0 auto", padding: "24px" }}>
      <Grid container spacing={3}>
        {dashboardItems.map((item, index) => (
          <Grid item xs={3} key={item.title}>
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
                background: (theme) => theme.palette.color.bg4,
                ":hover": {
                  border: (theme) => `1px solid ${theme.palette.color.active}`,
                  color: (theme) => theme.palette.color.active,
                },
              }}
              onClick={() => navigate(item.page)}
            >
              <item.icon size={20} />
              <Typography variant="h6">{item.title}</Typography>
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

        {dashboardItems3.map((item, index) => (
          <Grid item xs={6} key={item.title}>
            <InfoBox item={item} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <TicketSection />
        </Grid>
        {/* <Grid item xs={12}>
          <ScheduleSection />
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Home;
