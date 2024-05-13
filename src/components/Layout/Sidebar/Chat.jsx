import { Box, Tooltip } from "@mui/material";
import { MdChatBubble } from "react-icons/md";

export default function Chat() {
  return (
    <Tooltip title="AI Assistant" placement="right">
      <Box
        sx={{
          display: "flex",
          color: (theme) => theme.palette.color.secondary,
          p: "12px",
        }}
      >
        <MdChatBubble size={18} />
      </Box>
    </Tooltip>
  );
}
