import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { BiBarChartSquare, BiTargetLock } from "react-icons/bi";
import { FaCodeBranch, FaRegChartBar, FaRobot } from "react-icons/fa6";
import { GiInvertedDice4, GiSandsOfTime } from "react-icons/gi";
import { IoWifiSharp } from "react-icons/io5";
import { LiaStopCircleSolid } from "react-icons/lia";
import { LuCalendarCheck2, LuCalendarClock } from "react-icons/lu";

const items = [
  { title: "Profit target", value: "10%", icon: <BiTargetLock size={14} /> },
  {
    title: "Start Date",
    value: "2024 11:05 AM",
    icon: <LuCalendarClock size={14} />,
  },
  { title: "Phase", value: "Phase 1", icon: <FaCodeBranch size={14} /> },
  { title: "State", value: "passed", icon: <LiaStopCircleSolid size={14} /> },
  {
    title: "Plan",
    value: "100K - 1 Step",
    icon: <GiInvertedDice4 size={14} />,
  },
  {
    title: "Trading Platform",
    value: "Tradelocker",
    icon: <BiBarChartSquare size={14} />,
  },
  { title: "EA Allowed", value: "No", icon: <FaRobot size={14} /> },
  { title: "Min. Days", value: "5/5", icon: <GiSandsOfTime size={14} /> },
  { title: "Due date", value: "-", icon: <LuCalendarCheck2 size={14} /> },
  { title: "Daily Drawdown", value: "5%", icon: <FaRegChartBar size={14} /> },
  { title: "Overall Drawdown", value: "5%", icon: <FaRegChartBar size={14} /> },
  { title: "News allowed", value: "Yes", icon: <IoWifiSharp size={14} /> },
];

const GeneralTab = () => {
  return (
    <Grid container spacing={3}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Stack direction="row" justifyContent="space-between">
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ color: (theme) => theme.palette.color.secondary }}
            >
              {item.icon}
              <Typography variant="body3">{item.title}</Typography>
            </Stack>
            <Typography variant="body1">{item.value}</Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default GeneralTab;
