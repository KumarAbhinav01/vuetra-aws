import { Box, Button, Stack, Typography, alpha } from "@mui/material";
import React from "react";

import CustomCheckbox from "../../../../components/ui/CustomCheckbox";
import { HiMiniExclamationCircle } from "react-icons/hi2";
import FormSelect from "../../../../components/ui/FormSelect1";

const FourthSection = () => {
  const [selected, setSelected] = React.useState([]);
  return (
    <Box>
      <Stack
        spacing={2}
        sx={{
          padding: "12px",
          paddingBottom: "24px",
        }}
      >
        <Stack spacing={1.5}>
          {[
            "User visits your website",
            "Visitor visits a page",
            "Customer clicks a website element",
            "User opens a new conversation in the Messenger",
            "User opens a new conversation in the Messenger",
            "Visitor opens a new conversation in the Messenger",
            "Customer sends their first message",
            "Customer sends any message",
            "Teammate has been unresponsive",
            "Teammate changes the conversation state",
          ].map((item) => (
            <CustomCheckbox
              checked={selected.includes(item)}
              onChange={() =>
                setSelected((prev) =>
                  prev.includes(item)
                    ? prev.filter((i) => i !== item)
                    : [...prev, item]
                )
              }
              label={item}
              variant="contained"
              textVariant="caption_500"
              spacing="12px"
              background="bg2"
            />
          ))}
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            pr: "12px",
            color: (theme) => theme.palette.color.primary,
            background: (theme) => theme.palette.color.border3,
            px: "16px",
            py: "12px",
            borderRadius: "6px",
          }}
        >
          <HiMiniExclamationCircle size={18} />
          <Typography variant="heading">
            Reusable Workflows will use the settings of the Workflow that
            triggers them.
          </Typography>
        </Stack>
        <FormSelect
          label="How long should the Workflow wait before closing the conversation?"
          options={[
            { value: "3", label: "3 months" },
            { value: "6", label: "6 months" },
            { value: "12", label: "12 months" },
            { value: "24", label: "24 months" },
          ]}
          defaultValue="3"
          spacing="8px"
        />
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

export default FourthSection;
