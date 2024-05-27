import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Card, Grid, Stack, Tooltip } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import Searchbar from "../../../components/ui/Searchbar";
import ExportSection from "../../../components/ui/ExportSection";
import CalendarPopup from "../../../components/ui/CalendarPopup";
import DisplayColumns from "../../../components/ui/DisplayColumns";
import { RemoveRedEyeOutlined } from "@mui/icons-material";
import CustomTable from "../../../components/Firm/Orders/Table";
import dayjs from "dayjs";
import FilterPopup from "../../../components/ui/FilterPopup";

const items = [
  {
    title: "Total Breaches",
    value: "89",
    tooltip: "Active accounts that are doing a evaluation, funded are on trial",
    colspan: 6,
  },
  {
    title: "24 Hours",
    value: "19",
    tooltip: "All inactive accounts",
    colspan: 3,
  },
  {
    title: "Last 7 Days",
    value: "32",
    tooltip: "All inactive accounts",
    colspan: 3,
  },
];

const data = [
  {
    name: "Kristin Watson",
    customerId: "123456",
    email: "danghoang87hl@gmail.com",
    voilationDate: "11:05 5 Apr, 2024",
  },
  {
    name: "Marvin McKinney",
    customerId: "69548215",
    email: "thuhang.nute@gmail.com",
    voilationDate: "11:05 5 Apr, 2024",
  },
  {
    name: "Darlene Robertson",
    customerId: "32654817",
    email: "manhhachkt08@gmail.com",
    voilationDate: "11:05 5 Apr, 2024",
  },
  {
    name: "Leslie Alexander",
    customerId: "65986412",
    email: "binhan628@gmail.com",
    voilationDate: "11:05 5 Apr, 2024",
  },
  {
    name: "Kristin Watson",
    customerId: "123456",
    email: "danghoang87hl@gmail.com",
    voilationDate: "11:05 25 May, 2024",
  },
  {
    name: "Marvin McKinney",
    customerId: "69548215",
    email: "thuhang.nute@gmail.com",
    voilationDate: "11:05 25 May, 2024",
  },
  {
    name: "Darlene Robertson",
    customerId: "32654817",
    email: "manhhachkt08@gmail.com",
    voilationDate: "11:05 25 May, 2024",
  },
  {
    name: "Leslie Alexander",
    customerId: "65986412",
    email: "binhan628@gmail.com",
    voilationDate: "11:05 25 May, 2024",
  },
];

const headcells = [
  {
    id: "name",
    label: "Name",
    default: true,
    getCell: (row) => row.name,
  },
  {
    id: "customerId",
    label: "Customer ID",
    default: true,
    getCell: (row) => row.customerId,
  },
  { id: "email", label: "Email", default: true, getCell: (row) => row.email },
  {
    id: "voilationDate",
    label: "Voilation Date",
    default: true,
    getCell: (row) => row.voilationDate,
  },

  {
    id: "action",
    label: "Action",
    default: true,
    getCell: (row) => (
      <RemoveRedEyeOutlined
        sx={{
          color: (theme) => theme.palette.color.secondary,
          cursor: "pointer",
        }}
      />
    ),
  },
];

const HFT = () => {
  const [heads, setHeads] = React.useState(
    headcells.filter((cell) => cell.default).map((cell) => cell.id)
  );
  const [startDate, setStartDate] = useState(dayjs().startOf("week"));
  const [endDate, setEndDate] = useState(dayjs().endOf("week"));
  const [columns, setColumns] = useState(headcells);
  const filteredHeadcells = headcells.filter((cell) => heads.includes(cell.id));
  const [rangeValue, setRangeValue] = useState([20, 37]);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState([]);
  return (
    <div>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          mb: "24px",
          fontSize: "11.5px",
          color: (theme) => theme.palette.color.secondary,
          position: "absolute",
          top: "24px",
          right: "48px",
        }}
      >
        <Searchbar />
        <ExportSection />
        <CalendarPopup
          mainEndDate={endDate}
          mainStartDate={startDate}
          setMainEndDate={setEndDate}
          setMainStartDate={setStartDate}
        />
        <DisplayColumns
          columns={columns}
          setColumns={setColumns}
          selectedColumns={heads}
          setSelectedColumns={setHeads}
        />
        <FilterPopup
          rangeFilter={{
            label: "Countries",
            ariaLabel: "Countries",
            value: rangeValue,
            onChange: setRangeValue,
          }}
          accordions={[
            {
              title: "Customer Id",
              defaultExpanded: true,
              items: ["111110 - 000001", "111110 - 000002", "111110 - 000003"],
              selectedItems: selectedCustomerIds,
              onChange: setSelectedCustomerIds,
            },
            {
              title: "Voilation Date",
              defaultExpanded: true,
              items: ["0 - 10", "10 - 20", "20 - 30"],
              selectedItems: selectedOrderStatus,
              onChange: setSelectedOrderStatus,
            },
          ]}
        />
      </Stack>

      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} md={item.colspan}>
            <Card
              sx={{
                width: "100%",
                border: (theme) => `1px solid ${theme.palette.color.border}`,
                background: "transparent",
                borderRadius: "16px",
                overflow: "hidden",
                padding: "24px",
                cursor: "pointer",
              }}
            >
              <Stack spacing={3}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="caption_500">{item.title}</Typography>
                  <Tooltip title={item.tooltip} placement="top">
                    <HelpIcon
                      sx={{
                        fontSize: "15px",
                        cursor: "pointer",
                        color: (theme) => theme.palette.color.secondary,
                      }}
                    />
                  </Tooltip>
                </Stack>

                <Typography
                  variant="h1"
                  sx={{
                    ...(item.color && {
                      color: (theme) => theme.palette.color[item.color],
                    }),
                    fontWeight: "600",
                  }}
                >
                  {item.value}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* <Stack spacing={1} sx={{ py: "16px", width: "100%" }}>
        <Grid
          container
          columns={{ xs: heads.length }}
          sx={{
            border: (theme) => `1px solid ${theme.palette.color.border}`,
            padding: "4px 12px",
          }}
          columnSpacing={1}
        >
          {filteredHeadcells.map((head) => (
            <Grid item xs={1}>
              <Typography variant="body1">{head.label}</Typography>
            </Grid>
          ))}
        </Grid>
        {data.map((item) => (
          <Grid
            container
            columns={{ xs: heads.length }}
            sx={{
              border: (theme) => `1px solid ${theme.palette.color.border}`,
              padding: "6px",
            }}
            spacing={1}
          >
            <Grid
              item
              xs={heads.length}
              sx={{
                pb: "16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px 16px",
                  borderRadius: "4px",
                  gap: "4px",
                  background: (theme) => alpha(theme.palette.color.red, 0.2),
                  color: (theme) => theme.palette.color.red,
                  width: "fit-content",
                }}
              >
                <PiWarningDiamond />
                <Typography
                  sx={{
                    color: "inherit",
                    fontSize: "8px",
                  }}
                >
                  {item.match} Match
                </Typography>
              </Box>
            </Grid>
            {item.rows.map((row) =>
              filteredHeadcells.map((head) => (
                <Grid item xs={1} sx={{ pb: "3px" }}>
                  {head.cell(row)}
                </Grid>
              ))
            )}
          </Grid>
        ))}
      </Stack> */}
      <CustomTable headcells={filteredHeadcells} rows={data} />
    </div>
  );
};

export default HFT;
