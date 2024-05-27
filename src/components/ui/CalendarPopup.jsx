import { Done, TrendingFlat } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { BiChevronDown } from "react-icons/bi";
import dayjs from "dayjs";
import Calendar from "./Calendar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "806px",
  border: (theme) => `1px solid ${theme.palette.color.border}`,
  borderRadius: "16px",
  background: (theme) =>
    theme.palette.mode === "dark"
      ? theme.palette.color.bg2
      : theme.palette.color.bg,
};

const items = [
  "Today",
  "Yesterday",
  "This week",
  "Last week",
  "This month",
  "Last month",
  "This year",
  "Last year",
  "All time",
];

export default function CalendarPopup({
  mainStartDate,
  setMainStartDate,
  mainEndDate,
  setMainEndDate,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const [startDate, setStartDate] = useState(mainStartDate);
  const [endDate, setEndDate] = useState(mainEndDate);

  const [value, setValue] = useState("This week");

  const setDateRange = (item) => {
    const today = dayjs();
    let newStartDate, newEndDate;

    switch (item) {
      case "Today":
        newStartDate = today;
        newEndDate = today;
        break;
      case "Yesterday":
        newStartDate = today.subtract(1, "day");
        newEndDate = today.subtract(1, "day");
        break;
      case "This week":
        newStartDate = today.startOf("week");
        newEndDate = today.endOf("week");
        break;
      case "Last week":
        newStartDate = today.subtract(1, "week").startOf("week");
        newEndDate = today.subtract(1, "week").endOf("week");
        break;
      case "This month":
        newStartDate = today.startOf("month");
        newEndDate = today.endOf("month");
        break;
      case "Last month":
        newStartDate = today.subtract(1, "month").startOf("month");
        newEndDate = today.subtract(1, "month").endOf("month");
        break;
      case "This year":
        newStartDate = today.startOf("year");
        newEndDate = today.endOf("year");
        break;
      case "Last year":
        newStartDate = today.subtract(1, "year").startOf("year");
        newEndDate = today.subtract(1, "year").endOf("year");
        break;
      case "All time":
        newStartDate = dayjs("2000-01-01");
        newEndDate = today;
        break;
      default:
        newStartDate = today;
        newEndDate = today;
        break;
    }

    setStartDate(newStartDate);
    setEndDate(newEndDate);
    setValue(item);
  };

  const handleApply = () => {
    setMainStartDate(startDate);
    setMainEndDate(endDate);
    handleClose();
  };

  const handleCancel = () => {
    setStartDate(mainStartDate);
    setEndDate(mainEndDate);
    handleClose();
  };

  const determineSidebarItem = (start, end) => {
    if (!start || !end) return "Custom Range";
    const today = dayjs();

    if (start.isSame(today, "day") && end.isSame(today, "day")) return "Today";
    if (
      start.isSame(today.subtract(1, "day"), "day") &&
      end.isSame(today.subtract(1, "day"), "day")
    )
      return "Yesterday";
    if (
      start.isSame(today.startOf("week"), "day") &&
      end.isSame(today.endOf("week"), "day")
    )
      return "This week";
    if (
      start.isSame(today.subtract(1, "week").startOf("week"), "day") &&
      end.isSame(today.subtract(1, "week").endOf("week"), "day")
    )
      return "Last week";
    if (
      start.isSame(today.startOf("month"), "day") &&
      end.isSame(today.endOf("month"), "day")
    )
      return "This month";
    if (
      start.isSame(today.subtract(1, "month").startOf("month"), "day") &&
      end.isSame(today.subtract(1, "month").endOf("month"), "day")
    )
      return "Last month";
    if (
      start.isSame(today.startOf("year"), "day") &&
      end.isSame(today.endOf("year"), "day")
    )
      return "This year";
    if (
      start.isSame(today.subtract(1, "year").startOf("year"), "day") &&
      end.isSame(today.subtract(1, "year").endOf("year"), "day")
    )
      return "Last year";
    if (start.isSame(dayjs("1900-01-01"), "day") && end.isSame(today, "day"))
      return "All time";

    return "Custom Range";
  };

  useEffect(() => {
    const newSidebarItem = determineSidebarItem(startDate, endDate);
    if (newSidebarItem) setValue(newSidebarItem);
  }, [startDate, endDate]);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          background: "transparent",
          color: (theme) => theme.palette.color.secondary,
          border: (theme) =>
            `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
          ":hover": {
            border: (theme) =>
              `1px solid ${alpha(theme.palette.color.secondary, 0.45)}`,
            background: "transparent",
          },
          fontSize: "11.5px",
          height: "26px",
        }}
      >
        {value} <BiChevronDown size={18} style={{ ml: "3px" }} />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={style}>
          <Stack
            direction={"row"}
            sx={{
              background: (theme) => theme.palette.color.bg3,
            }}
          >
            <Stack
              sx={{
                height: "430px",
                width: "150px",
                padding: "12px",
                borderRight: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
              }}
              justifyContent="space-between"
            >
              {items.map((item) => (
                <Box
                  key={item}
                  sx={{
                    width: "100%",
                    padding: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: "8px",
                    cursor: "pointer",
                    ...(item === value && {
                      background: (theme) => theme.palette.color.bgblue,
                    }),
                  }}
                  onClick={() => setDateRange(item)}
                >
                  <Typography
                    sx={{
                      ...(item === value && {
                        color: (theme) => theme.palette.color.primary,
                      }),
                    }}
                    variant="caption_500"
                  >
                    {item}
                  </Typography>
                  {item === value && (
                    <Done
                      sx={{
                        fontSize: "18px",
                        color: (theme) => theme.palette.color.lightText,
                      }}
                    />
                  )}
                </Box>
              ))}
            </Stack>
            <Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateField", "DateField"]}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                      p: "12px",
                      color: (theme) => theme.palette.color.secondary,
                    }}
                    spacing={6}
                  >
                    <DateField
                      sx={{
                        "& .InputBase": {
                          borderRadius: "8px",
                        },
                        "& input": {
                          padding: "12px 16px",
                          fontSize: "14px",
                          color: (theme) => theme.palette.color.secondary,
                        },
                      }}
                      format="MMMM DD, YYYY"
                      value={startDate}
                      onChange={(newValue) => setStartDate(newValue)}
                    />
                    <TrendingFlat />
                    <DateField
                      sx={{
                        "& .InputBase": {
                          borderRadius: "8px",
                        },
                        "& input": {
                          padding: "12px 16px",
                          fontSize: "14px",
                          color: (theme) => theme.palette.color.secondary,
                        },
                      }}
                      format="MMMM DD, YYYY"
                      value={endDate}
                      onChange={(newValue) => setEndDate(newValue)}
                    />
                  </Stack>
                </DemoContainer>
              </LocalizationProvider>
              <Divider />
              <Calendar
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
              />
            </Box>
          </Stack>
          <Divider />
          <Stack
            direction="row"
            sx={{
              p: "12px",
              width: "50%",
              float: "right",
            }}
            spacing={2}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: (theme) =>
                  alpha(theme.palette.color.secondary, 0.15),
                color: (theme) => theme.palette.color.primary,
                boxShadow: "none",
                ":hover": {
                  background: (theme) =>
                    alpha(theme.palette.color.secondary, 0.15),
                  boxShadow: "none",
                },
              }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button onClick={handleApply} variant="contained" fullWidth>
              Apply
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </div>
  );
}
