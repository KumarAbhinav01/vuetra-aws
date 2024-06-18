import { Visibility } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";

export const tickets = [
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "open",
    online: true,
    image: "/images/person.avif",
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Sign in",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "Jens",
    status: "open",
    online: true,
    image: "/images/person.avif",
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "AI",
    date: "05 Apr, 11:00 PM",
    solvedBy: "Shae",
    status: "closed",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "General question",
    assignedto: "Shae",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "ongoing",
    online: true,
    image: "/images/person.avif",
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Vuetra",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "ongoing",
    online: true,
    image: "/images/person.avif",
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Tradelocker",
    assignedto: "Shae",
    date: "05 Apr, 11:00 PM",
    solvedBy: "Shae",
    status: "closed",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Shae",
    date: "05 Apr, 11:00 PM",
    solvedBy: "Shae",
    status: "open",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Account rules",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "closed",
    online: true,
    image: "/images/person.avif",
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "ongoing",
    online: true,
    image: "/images/person.avif",
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "ongoing",
    online: true,
    image: "/images/person.avif",
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "Jens",
    status: "open",
    online: true,
    image: "/images/person.avif",
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Shae",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "open",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "closed",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "open",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "open",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "AI",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "closed",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Shae",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "ongoing",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "ongoing",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Shae",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "closed",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Shae",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "open",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "AI",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "closed",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "ongoing",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "ongoing",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Jens",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "open",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Refund",
    assignedto: "Shae",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "open",
    online: true,
  },
  {
    id: "#1050400",
    subject: "Account issue Tradelocker",
    from: "Client Dashboard",
    category: "Vuetra",
    assignedto: "AI",
    date: "05 Apr, 11:00 PM",
    solvedBy: "AI",
    status: "closed",
    online: true,
  },
];

export const statutes = [
  { value: "open", label: "Open", color: "blue" },
  { value: "ongoing", label: "Ongoing", color: "yellow" },
  { value: "closed", label: "Closed", color: "green" },
];

const StatusDot = styled(Box)(({ theme, status }) => ({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  backgroundColor: status === true ? "#2EE0A1" : "yellow",
  position: "absolute",
  bottom: 0,
  right: 0,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export const headcells = [
  {
    id: "id",
    label: "ID",
    getCell: (row) => {
      const status = statutes.find((statute) => statute.value === row.status);
      return (
        <Stack direction="row" alignItems="center">
          <Box
            sx={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: (theme) => theme.palette.color[status.color],
              my: "14px",
              mx: "12px",
            }}
          ></Box>
          {row.id}
        </Stack>
      );
    },
  },
  {
    id: "solvedBy",
    label: "Solved by",
    getCell: (row) => {
      const avatarSrc = row.image;
      const firstName = row.solvedBy.charAt(0);
      const isOnline = row.online;
      const colors = ["#F45F82", "#5EEDF8"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const isAI = row.solvedBy === "AI";

      return (
        <Stack direction="row" alignItems="center">
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Avatar src={avatarSrc} sx={{ width: 32, height: 32, backgroundColor: randomColor, color: "#FFFFFF" }}>{!avatarSrc && firstName}</Avatar>
            {!isAI && <StatusDot status={isOnline} />}
          </Box>
          <Typography ml={1}>{row.solvedBy}</Typography>
        </Stack>
      );
    },
  },
  {
    id: "assignedto",
    label: "Assigned",
    getCell: (row) => {
      const avatarSrc = row.image;
      const firstName = row.assignedto.charAt(0);
      const isOnline = row.online;
      const colors = ["#F45F82", "#5EEDF8"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      return (
        <Stack direction="row" alignItems="center">
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Avatar src={avatarSrc} sx={{ width: 32, height: 32, backgroundColor: randomColor, color: "#FFFFFF" }}>{!avatarSrc && firstName}</Avatar>
            <StatusDot status={isOnline} />
          </Box>
          <Typography ml={1}>{row.assignedto}</Typography>
        </Stack>
      );
    },
  },
  {
    id: "subject",
    label: "Subject",
    getCell: (row) => row.subject,
  },

  {
    id: "from",
    label: "From",
    getCell: (row) => row.from,
  },
  // {
  //   id: "category",
  //   label: "Category",
  //   getCell: (row) => row.category,
  // },
  // {
  //   id: "solvedBy",
  //   label: "Solved by",
  //   getCell: (row) => (
  //     <Typography
  //       sx={{
  //         fontSize: "inherit",
  //         color: (theme) =>
  //           row.solvedBy === "AI" ? theme.palette.color.green : "inherit",
  //       }}
  //     >
  //       {row.solvedBy}
  //     </Typography>
  //   ),
  // },

  {
    id: "date",
    label: "Creation date",
    getCell: (row) => row.date,
  },
  {
    id: "closeDate",
    label: "Close date",
    getCell: (row) => row.date,
  },
  {
    id: "action",
    label: "",
    getCell: (row) => {
      return (
        <IconButton>
          <Visibility
            sx={{
              fontSize: "18px",
              color: (theme) => theme.palette.color.secondary,
            }}
          />
        </IconButton>
      );
    },
  },
];
