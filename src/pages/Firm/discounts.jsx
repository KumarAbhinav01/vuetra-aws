import {
  Paper,
  Stack,
  Typography,
  alpha,
  IconButton,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import CustomTable from "../../components/Firm/Orders/Table";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FormSelect from "../../components/ui/FormSelect";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { RiFileList2Line } from "react-icons/ri";
import { LuCalendar } from "react-icons/lu";
import { discounts } from "../../static/firmItems";
import AddDiscount from "../../components/Firm/addDiscount";

const statutes = [
  { value: "expired", label: "Expired", color: "red" },
  { value: "active", label: "Active", color: "green" },
  { value: "pending", label: "Pending", color: "yellow" },
  { value: "canceled", label: "Canceled", color: "orange" },
];

const headcells = [
  {
    id: "name",
    label: "Name",
    getCell: (row) => row.name,
  },
  {
    id: "code",
    label: "Code",
    getCell: (row) => (
      <Typography
        sx={{
          background: (theme) => theme.palette.color.bg4,
          p: 1,
          border: (theme) => `1px solid ${theme.palette.color.border}`,
          width: "fit-content",
          borderRadius: "7px",
        }}
      >
        {row.code}
      </Typography>
    ),
  },
  {
    id: "status",
    label: "Status",
    getCell: (row) => {
      const status = statutes.find((statute) => statute.value === row.status);
      return (
        <Typography
          sx={{
            background: (theme) =>
              alpha(theme.palette.color[status.color], 0.15),
            lineHeight: "28px",
            textAlign: "center",
            borderRadius: "7px",
            width: "104px",

            color: (theme) => theme.palette.color[status.color],
          }}
        >
          {status.label}
        </Typography>
      );
    },
  },
  {
    id: "products",
    label: "Products",
    getCell: (row) => row.products,
  },

  {
    id: "amount",
    label: "Amount",
    getCell: (row) => row.amount,
  },
  {
    id: "redemptions",
    label: "Redemptions",
    getCell: (row) => "-",
  },
];

const data = [
  {
    name: "Easter sale",
    code: "IWNTEXNQ",
    status: "expired",
    products: "All products",
    amount: "22%",
  },
];

const Discounts = () => {
  const [type, setType] = useState("table");
  const navigate = useNavigate();
  const startDate = new Date(2024, 3, 1);
  const endDate = new Date(2024, 3, 16);

  const getDates = () => {
    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      const dayOfWeek = currentDate
        .toLocaleString("default", { weekday: "short" })
        .charAt(0);
      const date = currentDate.getDate().toString();
      dates.push({ day: dayOfWeek.toLowerCase(), date });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const dates = getDates();
  return (
    <Paper
      sx={{
        px: "12px",
        py: "24px",
        width: "100%",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          mb: "24px",
          fontSize: "11.5px",
          pr: "24px",
          color: (theme) => theme.palette.color.secondary,
        }}
      >
        <Search sx={{ fontSize: "16px" }} />

        <FormSelect
          options={[{ value: "all", label: "All Discounts" }]}
          defaultValue="all"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: (theme) => theme.palette.color.bg2,
            padding: "3px",
            gap: "10px",
          }}
        >
          <IconButton
            onClick={() => setType("table")}
            sx={{
              p: "4px",
              borderRadius: "4px",
              background:
                type === "table"
                  ? (theme) => theme.palette.color.bg3
                  : "transparent",
              color: (theme) => theme.palette.color.secondary,
              cursor: type === "table" ? "default" : "pointer",
            }}
          >
            <FormatListBulletedIcon sx={{ fontSize: "13px" }} />
          </IconButton>
          <IconButton
            onClick={() => setType("list")}
            sx={{
              p: "4px",
              borderRadius: "4px",
              background:
                type === "list"
                  ? (theme) => theme.palette.color.bg3
                  : "transparent",
              color: (theme) => theme.palette.color.secondary,
              cursor: type === "list" ? "default" : "pointer",
            }}
          >
            <RiFileList2Line size={12} />
          </IconButton>
        </Box>
      </Stack>

      {type === "list" && <Divider />}

      {type === "list" && (
        <Paper sx={{ maxWidth: "1100px", mx: "auto" }}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                borderRight: (theme) =>
                  `1px solid ${theme.palette.color.border}`,
              }}
            >
              <Box>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="flex-end"
                  justifyContent={"space-between"}
                  sx={{
                    px: "12px",
                    pb: "10px",
                    height: "60px",
                    borderBottom: (theme) =>
                      `1px solid ${theme.palette.color.border}`,
                  }}
                >
                  <Typography variant="subtitle1">Discount</Typography>
                  <Typography variant="caption" sx={{ fontWeight: "500" }}>
                    Duration
                  </Typography>
                </Stack>
              </Box>
              <Stack spacing={6} sx={{ p: "12px" }}>
                {discounts.map((discount, index) => (
                  <Stack spacing={2.3} key={index}>
                    <Typography variant="caption" sx={{ fontWeight: "500" }}>
                      {discount.month}
                    </Typography>
                    {discount.discounts.map((d, i) => (
                      <Stack spacing={2} pb={1}>
                        <Stack direction="row" justifyContent="space-between">
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: "500",
                              "& span": {
                                color: (theme) => theme.palette.color.green,
                                ml: "10px",
                              },
                            }}
                          >
                            {d.name} <span>25%</span>
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: "500",
                            }}
                          >
                            {d.duration}
                          </Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{
                            color: (theme) => theme.palette.color.secondary,
                          }}
                        >
                          <LuCalendar size={18} />
                          <Typography variant="caption">
                            {d.startDate} - {d.endDate}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                ))}
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                maxWidth: "100%",
                overflowX: "auto",
              }}
            >
              <Stack
                justifyContent={"space-around"}
                sx={{
                  px: "12px",
                  // pb: "10px",

                  height: "60px",
                  borderBottom: (theme) =>
                    `1px solid ${theme.palette.color.border}`,
                }}
              >
                <Typography variant="subtitle1">April 2024</Typography>
                <Stack direction="row" spacing={4}>
                  {dates.map((date) => (
                    <Stack direction="row" spacing={1} key={date.date}>
                      <Typography variant="caption" sx={{ fontWeight: "500" }}>
                        {date.day}
                      </Typography>
                      <Typography variant="subtitle1">{date.date}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              <Typography
                sx={{
                  fontSize: "13px",
                  mt: "50px",
                  mx: "12px",
                  height: "48px",
                  px: "24px",
                  borderRadius: "24px",
                  background: (theme) => theme.palette.color.green,
                  color: (theme) => theme.palette.color.bg3,
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                Discount name
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
      <AddDiscount />
      {type === "table" && (
        <CustomTable
          headcells={headcells}
          rows={data}
          onRowClick={(row) => {
            navigate(`/firm/customers/${row.name}`);
          }}
          fontSize="13px"
        />
      )}
    </Paper>
  );
};

export default Discounts;
