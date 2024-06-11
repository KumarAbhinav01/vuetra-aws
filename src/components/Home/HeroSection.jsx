import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { dashboardItems } from "../../static/dashboardItem";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.color.bg2,
        padding: 0,
      }}
    >
      <Box
        sx={{
          maxWidth: "1070px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          padding: "24px",
        }}
      >
        {dashboardItems.map((item, index) => (
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
            }}
            onClick={() => navigate(item.page)}
          >
            <item.icon size={20} />
            <Typography variant="h6">{item.title}</Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
