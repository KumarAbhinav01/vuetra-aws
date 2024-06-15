import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import HelpIcon from "@mui/icons-material/Help";
import React from "react";

const InfoBox = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: "24px",
        width: "100%",
        height: "140px",
        background: (theme) => theme.palette.color.bg2,
        borderRadius: "18px",
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
        {item.text ? (
          <Typography variant="caption">{item.text}</Typography>
        ) : (
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
            }}
          >
            <FiArrowUpRight size={16} />
            <Typography variant="caption">{item.percent || "+3.7%"}</Typography>
          </Stack>
        )}
      </Box>
      <Typography variant="h1">{item.value}</Typography>
    </Box>
  );
};

export default InfoBox;
