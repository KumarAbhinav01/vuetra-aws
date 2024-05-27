import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { generateDate, months } from "../../utils/calendar";
import { useState } from "react";
import { Box, Typography, IconButton, Grid, alpha } from "@mui/material";
import { styled } from "@mui/system";
import dayjs from "dayjs";

// Custom styled component for the calendar day cells
const DayCell = styled(Box)(
  ({ theme, isCurrentMonth, isToday, isSelected }) => ({
    textAlign: "center",
    height: "42px",
    // width: "40px",
    display: "grid",
    placeContent: "center",
    cursor: "pointer",
    borderRadius: "50%",
    transition: "all 0.3s",
    backgroundColor: isSelected
      ? theme.palette.color.blue
      : isToday
      ? theme.palette.color.border
      : "transparent",
    color: isSelected
      ? theme.palette.common.white
      : isToday
      ? theme.palette.color.primary
      : isCurrentMonth
      ? theme.palette.text.primary
      : theme.palette.text.disabled,
    "&:hover": {
      opacity: 0.35,
    },
  })
);

export default function Calendar({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  const altToday = today.month(today.month() + 1);

  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate && date.isAfter(startDate)) {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const isInRange = (date) => {
    if (startDate && endDate) {
      return (
        (date.isAfter(startDate) && date.isBefore(endDate)) ||
        date.isSame(startDate) ||
        date.isSame(endDate)
      );
    }
    return false;
  };

  return (
    <Box
      maxWidth="lg"
      sx={{
        display: "flex",
        // gap: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
      }}
    >
      {[today, altToday].map((date, idx) => (
        <Box
          key={idx}
          sx={{
            width: 328,
            // height: 384,
            padding: "12px",
            borderRight: (theme) => `1px solid ${theme.palette.color.border}`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component="h1" sx={{ pl: "6px" }}>
              {months[date.month()]} {date.year()}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                color: (theme) => theme.palette.color.primary,
              }}
            >
              <IconButton
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
                sx={{
                  color: (theme) => theme.palette.color.primary,
                }}
              >
                <GrFormPrevious />
              </IconButton>

              <IconButton
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
                sx={{
                  color: (theme) => theme.palette.color.primary,
                }}
              >
                <GrFormNext />
              </IconButton>
            </Box>
          </Box>
          <Grid container columns={7}>
            {days.map((day, index) => (
              <Grid item xs={1} key={index}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                >
                  {day}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid container columns={7}>
            {generateDate(date.month(), date.year()).map(
              ({ date, currentMonth, today }, index) => (
                <Grid
                  item
                  xs={1}
                  key={index}
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    ...(isInRange(date) && {
                      ":before": {
                        content: '""',
                        position: "absolute",
                        // width: "20px",
                        top: "4px",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "34px",
                        background: (theme) => theme.palette.color.bgblue,
                        // borderRadius: "50%",
                        ...(date.isSame(startDate) && {
                          borderRadius: "50%  0   0 50%",
                        }),
                        ...(date.isSame(endDate) && {
                          borderRadius: "0 50% 50% 0",
                        }),
                        zIndex: -1,
                      },
                    }),
                  }}
                >
                  <DayCell
                    isCurrentMonth={currentMonth}
                    isToday={today}
                    isSelected={
                      (startDate && startDate.isSame(date, "day")) ||
                      (endDate && endDate.isSame(date, "day"))
                    }
                    isInRange={isInRange(date)}
                    onClick={() => handleDateClick(date)}
                  >
                    {date.date()}
                  </DayCell>
                </Grid>
              )
            )}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
