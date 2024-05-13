import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import HelpIcon from "@mui/icons-material/Help";
import React from "react";

const InfoBox = ({ item, index, indices }) => {
  const getBorder = (index) => {
    if (indices) {
      return indices.includes(index);
    } else {
      return index % 2 === 0;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: "24px",
        width: "100%",
        height: "140px",
        borderBottom: (theme) => `1px solid ${theme.palette.color.border}`,
        ...(getBorder(index) && {
          borderRight: (theme) => `1px solid ${theme.palette.color.border}`,
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
            <Typography variant="caption">+3.7%</Typography>
          </Stack>
        )}
      </Box>
      <Typography variant="h1">{item.value}</Typography>
    </Box>
  );
};

export default InfoBox;
