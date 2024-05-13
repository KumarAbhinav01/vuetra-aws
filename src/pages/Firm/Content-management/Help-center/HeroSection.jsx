import React, { useState } from "react";
import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
import Close from "@mui/icons-material/Close";

const HeroSection = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box sx={{ px: "12px", position: "relative" }}>
      {open && (
        <Box
          sx={{
            width: "100%",
            background: (theme) => theme.palette.color.bg2,
            pt: "96px",
            pl: "48px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "154px",
              height: "77px",
              background: "rgb(152, 229, 222)",
              borderRadius: "154px 154px 0 0",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              width: "117px",
              bottom: "-5px",
              left: "68px",
            }}
          >
            <img
              src="/images/person-image.webp"
              alt="person"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Stack
            spacing={1}
            sx={{
              padding: "24px",
              background: (theme) => theme.palette.color.bg4,
              width: "468px",
              position: "absolute",
              top: "6px",
              left: "175px",
              borderRadius: "6px",
            }}
          >
            <Typography
              variant="heading"
              sx={{
                fontWeight: "500",
              }}
            >
              Jens from Vuetra
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
              }}
              variant="caption"
            >
              A detailed help center will help you dealing with less tickets and
              will boost your SEO.
            </Typography>
            <Link href="#">Read our article here.</Link>
          </Stack>
          <IconButton
            sx={{
              position: "absolute",
              top: "8px",
              right: "8px",
              color: (theme) => theme.palette.color.secondary,
            }}
            onClick={() => setOpen(false)}
          >
            <Close />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default HeroSection;
