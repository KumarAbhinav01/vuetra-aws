import { Box, Stack, Typography, alpha } from "@mui/material";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { MdOutlineAccessTime } from "react-icons/md";

const items = [
  { title: "All activity", icon: <MdOutlineAccessTime size={14} /> },
  { title: "Updates", icon: <AiOutlineMenu size={14} /> },
  { title: "Comments", icon: <FiMessageCircle size={14} /> },
];

const TradersActivity = () => {
  const [selected, setSelected] = React.useState("All activity");
  return (
    <Box sx={{ pt: "12px" }}>
      <Typography variant="heading">Traders activity</Typography>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ my: "12px" }}
      >
        {items.map((item, index) => (
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              cursor: "pointer",
              color: (theme) =>
                theme.palette.color[
                  item.title === selected ? "blue" : "secondary"
                ],
              py: "6px",
              px: "9px",
              transition: "all 500ms ease-in-out",
              borderRadius: "20px",
              ...(item.title === selected && {
                background: (theme) => alpha(theme.palette.color.blue, 0.15),
                border: (theme) => `1px solid ${theme.palette.color.blue}`,
              }),
            }}
            key={index}
            onClick={() => setSelected(item.title)}
          >
            {item.icon}
            <Typography sx={{ color: "inherit" }}>{item.title}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: (theme) => theme.palette.color.bg4,
          }}
        />
        <Typography
          variant="body3"
          sx={{
            px: "6px",
            py: "9px",
            borderLeft: (theme) => `1px solid ${theme.palette.color.bg4}`,

            "& span": {
              color: (theme) => theme.palette.color.primary,
            },
          }}
        >
          New account details sended <span>Phase 2</span> about 5 mins ago
        </Typography>
      </Stack>
    </Box>
  );
};

export default TradersActivity;
