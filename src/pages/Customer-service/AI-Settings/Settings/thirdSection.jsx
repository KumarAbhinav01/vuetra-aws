import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React from "react";
import FormInput from "../../../../components/ui/FormInput";
import FormSwitch from "../../../../components/ui/FormSwitch";
import CustomCheckbox from "../../../../components/ui/CustomCheckbox";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ThirdSection = () => {
  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(false);
  return (
    <Box>
      <Stack
        spacing={1}
        sx={{
          padding: "12px",
          paddingBottom: "24px",
        }}
      >
        <Stack direction="row" spacing={3} sx={{ pr: "12px" }}>
          <FormSwitch
            checked={checked}
            onChange={() => setChecked(!checked)}
            fullWidth={false}
          />
          <Typography
            sx={{
              fontSize: "13px",
              lineHeight: "18.9px",
              fontWeight: "500",
            }}
          >
            Automatically assign conversations to a separate bot inbox while a
            workflow or Fin Al Agent is active. When the bot ends, any relevant
            assignment rules are applied, and otherwise the conversation moves
            into Unassigned.
          </Typography>
        </Stack>
        <Box sx={{ pl: "36px" }}>
          <CustomCheckbox
            checked={checked1}
            onChange={() => setChecked1(!checked1)}
            label="Exclude the time conversations spend in the bot inbox from SLA targets."
            textVariant="caption_500"
            variant="contained"
          />
        </Box>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="flex-end"
        sx={{
          p: "12px",
          background: (theme) => alpha(theme.palette.color.secondary, 0.03),
          borderTop: (theme) => `1px solid ${theme.palette.color.border}`,
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: (theme) => alpha(theme.palette.color.secondary, 0.15),
            color: (theme) => theme.palette.color.primary,
            boxShadow: "none",
            ":hover": {
              background: (theme) => alpha(theme.palette.color.secondary, 0.15),
              boxShadow: "none",
            },
            borderRadius: "8px",
          }}
        >
          Cancel
        </Button>
        <Button variant="contained">Save</Button>
      </Stack>
    </Box>
  );
};

export default ThirdSection;
