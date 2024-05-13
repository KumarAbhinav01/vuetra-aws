import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { Done } from "@mui/icons-material";

const Domains = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ px: "24px", py: "16px" }}>
        Domain settings
      </Typography>

      <Divider />
      <Box
        sx={{
          p: "32px",
        }}
      >
        <Grid container columnSpacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Stack spacing={1}>
                <Typography variant="h5">Staging</Typography>
                <Typography
                  variant="caption"
                  sx={{ fontWeight: "500", width: "90%" }}
                >
                  Configure an environment to review changes privately or with
                  public URLs.
                </Typography>
              </Stack>
              <Divider />
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="caption" sx={{ fontWeight: "500" }}>
                  yourfirm
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: "500" }}>
                  .staging.vuetra.com
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ mt: "24px" }} />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                py: "24px",
                pr: "48px",
              }}
            >
              <Stack spacing={3}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Stack spacing={1}>
                    <Typography variant="h4">Client dashboard</Typography>
                    <Typography variant="caption" sx={{ fontWeight: "500" }}>
                      Add your domain(s) below. <Link>Need Help?</Link>
                    </Typography>
                  </Stack>
                  <Button
                    sx={{
                      color: (theme) => theme.palette.color.bg3,
                      borderRadius: "8px",
                      fontWeight: "500",
                      px: "24px",
                    }}
                    variant="contained"
                  >
                    Add custom domain
                  </Button>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LanguageIcon
                    sx={{
                      color: (theme) => theme.palette.color.green,
                      fontSize: "20px",
                    }}
                  />
                  <Typography variant="caption" sx={{ fontWeight: "500" }}>
                    www.vuetra.com
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Stack spacing={1} direction="row" alignItems="center">
                    <Done
                      sx={{
                        color: (theme) => theme.palette.color.green,
                        fontSize: "18px",
                      }}
                    />{" "}
                    <Typography variant="subtitle1">
                      dashboard.vuetra.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1.5}>
                    <Typography variant="caption" sx={{ fontWeight: "500" }}>
                      Published
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: "500",
                        color: (theme) => theme.palette.color.green,
                      }}
                    >
                      • Connected
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                py: "24px",
                pr: "48px",
                borderRight: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
              }}
            >
              <Stack spacing={3}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Stack spacing={1}>
                    <Typography variant="h4">Knowledge base</Typography>
                    <Typography variant="caption" sx={{ fontWeight: "500" }}>
                      Add your domain(s) below. <Link>Need Help?</Link>
                    </Typography>
                  </Stack>
                  <Button
                    sx={{
                      color: (theme) => theme.palette.color.bg3,
                      borderRadius: "8px",
                      fontWeight: "500",
                      px: "24px",
                    }}
                    variant="contained"
                  >
                    Add custom domain
                  </Button>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LanguageIcon
                    sx={{
                      color: (theme) => theme.palette.color.green,
                      fontSize: "20px",
                    }}
                  />
                  <Typography variant="caption" sx={{ fontWeight: "500" }}>
                    www.vuetra.com
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Stack spacing={1} direction="row" alignItems="center">
                    <Done
                      sx={{
                        color: (theme) => theme.palette.color.green,
                        fontSize: "18px",
                      }}
                    />{" "}
                    <Typography variant="subtitle1">
                      dashboard.vuetra.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1.5}>
                    <Typography variant="caption" sx={{ fontWeight: "500" }}>
                      Published
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: "500",
                        color: (theme) => theme.palette.color.green,
                      }}
                    >
                      • Connected
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                py: "24px",
                pr: "48px",
              }}
            >
              <Stack spacing={3}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Stack spacing={1}>
                    <Typography variant="h4">Blog</Typography>
                    <Typography variant="caption" sx={{ fontWeight: "500" }}>
                      Add your domain(s) below. <Link>Need Help?</Link>
                    </Typography>
                  </Stack>
                  <Button
                    sx={{
                      color: (theme) => theme.palette.color.bg3,
                      borderRadius: "8px",
                      fontWeight: "500",
                      px: "24px",
                    }}
                    variant="contained"
                  >
                    Add custom domain
                  </Button>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LanguageIcon
                    sx={{
                      color: (theme) => theme.palette.color.green,
                      fontSize: "20px",
                    }}
                  />
                  <Typography variant="caption" sx={{ fontWeight: "500" }}>
                    www.vuetra.com
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Stack spacing={1} direction="row" alignItems="center">
                    <Done
                      sx={{
                        color: (theme) => theme.palette.color.green,
                        fontSize: "18px",
                      }}
                    />{" "}
                    <Typography variant="subtitle1">
                      dashboard.vuetra.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1.5}>
                    <Typography variant="caption" sx={{ fontWeight: "500" }}>
                      Published
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: "500",
                        color: (theme) => theme.palette.color.green,
                      }}
                    >
                      • Connected
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Domains;
