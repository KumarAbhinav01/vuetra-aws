import { Box, Card, Grid, Stack, Tooltip, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { overviewItems } from "../../../../static/customers";
import TicketSection from "./TicketSection";

export default function Overview() {
  return (
    <Box>
      <Grid container sx={{ mb: 2 }}>
        {overviewItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                width: "100%",
                border: "none !important",
                overflow: "hidden",
                padding: "24px",
                borderRadius: "0",
              }}
            >
              <Stack spacing={3}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="subtitle2">{item.title}</Typography>
                  <Tooltip title={item.tooltip}>
                    <HelpIcon
                      sx={{
                        fontSize: "15px",
                        cursor: "pointer",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </Tooltip>
                </Stack>
                <Typography variant="h5">{item.value}</Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1">Active Points</Typography>
      <TicketSection />
    </Box>
  );
}
