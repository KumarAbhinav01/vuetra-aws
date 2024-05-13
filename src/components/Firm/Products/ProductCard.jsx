import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, id, sales, value }) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(`/firm/products/${title}`)}
      sx={{
        cursor: "pointer",
        border: (theme) => `1px solid ${theme.palette.color.border}`,
        borderRadius: "18px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "200px",
          width: "250px",
          inset: 0,
          backgroundSize: "16px 16px",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0px, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0px, rgba(255, 255, 255, 0.2) 50%)",
          border: "1px solid #c4c4c4",
        }}
      />
      <Stack sx={{ p: 2 }} spacing={1}>
        <Typography variant="subtitle2">{id}</Typography>
        <Typography variant="subtitle1">{title}</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="caption">Total Sales:</Typography>
          <Typography variant="subtitle1">{sales}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="caption">Product Value:</Typography>
          <Typography
            variant="caption"
            sx={{ color: (theme) => theme.palette.color.primary }}
          >
            {value}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductCard;
