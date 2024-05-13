import {
  Box,
  Card,
  Paper,
  Stack,
  Tooltip,
  Typography,
  Grid,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import React from "react";

const Orders = () => {
  return (
    <Paper sx={{ padding: "24px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              width: "100%",
              border: (theme) => `1px solid ${theme.palette.color.border}`,
              background: (theme) => theme.palette.color.bg2,
              borderRadius: "12px",
              overflow: "hidden",
              padding: "24px",
            }}
          >
            <Stack spacing={3}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="caption">Total Rev.</Typography>
                <Tooltip title="Amount of unresolved open tickets">
                  <HelpIcon
                    sx={{
                      fontSize: "15px",
                      cursor: "pointer",
                      color: (theme) => theme.palette.color.secondary,
                    }}
                  />
                </Tooltip>
              </Stack>
              <Typography variant="h4">$15,505.10</Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Orders;
