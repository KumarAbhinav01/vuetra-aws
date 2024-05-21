import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Divider, IconButton, alpha } from "@mui/material";

const Notification = ({ item, selected, index, divider }) => {
  return (
    <Box
      key={index}
      sx={{
        transition: "all 1000ms ease-in-out",
        transform: selected ? "none" : "translateX(0) translateY(64px)",
        overflow: selected ? "visible" : "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: 2,
        }}
      >
        <IconButton
          sx={{
            p: 0.9,
            borderRadius: "50%",
            height: "fit-content",
            backgroundColor: (theme) =>
              alpha(theme.palette.color.buttonbg, 0.17),
            color: (theme) => theme.palette.color.buttonbg,
          }}
        >
          <item.icon size={16} />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box
              sx={{
                p: 0.5,
                w: "fit-content",
                h: "fit-content",
                alignSelf: "start",
                mt: 1,
                borderRadius: "50%",
                backgroundColor: (theme) => theme.palette.color.yellow,
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 500,
                color: (theme) => theme.palette.color.secondary,
                "& span": {
                  mx: 0.5,
                  color: (theme) => theme.palette.color.primary,
                },
              }}
            >
              {item.name && (
                <span>
                  {item.name} {"  "}
                </span>
              )}{" "}
              {item.message1}
              {"  "}
              <span>{item.account}</span> {item.message2}
            </Typography>
          </Box>
          <Typography
            variant="caption"
            sx={{
              fontSize: "11px",
              "& span": {
                mr: 1,
                fontSize: "12px",
              },
            }}
          >
            <span>•</span> {item.time}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            {item.buttons.map((button, index) => (
              <Button
                key={index}
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
                  },
                  color: (theme) =>
                    theme.palette.color[button.color || "secondary"],
                  backgroundColor: (theme) =>
                    alpha(
                      theme.palette.color[button.color || "secondary"],
                      0.1
                    ),
                  ":hover": {
                    backgroundColor: (theme) =>
                      alpha(
                        theme.palette.color[button.color || "secondary"],
                        0.2
                      ),
                  },
                }}
              >
                {button.text}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: 3 }}>{divider && <Divider />}</Box>
    </Box>
  );
};

export default Notification;
