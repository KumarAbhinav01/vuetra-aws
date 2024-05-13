import { Card, Grid, Paper, Stack, Typography, alpha } from "@mui/material";
import React from "react";
import FormSelect from "../../ui/FormSelect";
import { Edit } from "@mui/icons-material";

const Product = () => {
  return (
    <Paper sx={{ p: "24px" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">Account sizes</Typography>
        <Stack direction={"row"} spacing={1}>
          <FormSelect
            options={[{ value: "all", label: "Display" }]}
            defaultValue="all"
          />
          <Stack
            direction="row"
            sx={{
              border: (theme) =>
                `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
              borderRadius: "4px",
              px: "8px",
              py: "4px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Edit
              sx={{
                fontSize: "11px",
                color: (theme) => theme.palette.color.secondary,
                mr: "4px",
              }}
            />
            <Typography variant="body2">Edit</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Grid container spacing={3} sx={{ pt: "12px" }}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid item xs={12} md={4} lg={3}>
            <Card sx={{ p: "24px" }}>
              <Stack spacing={2.5}>
                <Typography variant="caption">#ID105043</Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h4">500K</Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: (theme) => theme.palette.color.green,
                      fontWeight: "500",
                    }}
                  >
                    $1000
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Product;
