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
    validationDate: "11:05 5 June, 2024",
    account: "467328649",
  },
  {
    name: "Marvin McKinney",
    customerId: "69548215",
    email: "thuhang.nute@gmail.com",
    validationDate: "11:05 5 Apr, 2024",
    account: "467328649",
  },
  {
    name: "Darlene Robertson",
    customerId: "32654817",
    email: "manhhachkt08@gmail.com",
    validationDate: "11:05 5 Apr, 2024",
    account: "217328649",
  },
  {
    name: "Leslie Alexander",
    customerId: "65986412",
    email: "binhan628@gmail.com",
    validationDate: "11:05 5 Apr, 2024",
    account: "107328649",
  },
  {
    name: "Kristin Watson",
    customerId: "123456",
    email: "danghoang87hl@gmail.com",
    validationDate: "11:05 25 May, 2024",
    account: "107328649",
  },
  {
    name: "Marvin McKinney",
    customerId: "69548215",
    email: "thuhang.nute@gmail.com",
    validationDate: "11:05 25 May, 2024",
    account: "107328649",
  },
  {
    name: "Darlene Robertson",
    customerId: "32654817",
    email: "manhhachkt08@gmail.com",
    validationDate: "11:05 31 May, 2024",
    account: "217328649",
  },
  {
    name: "Leslie Alexander",
    customerId: "65986412",
    email: "binhan628@gmail.com",
    validationDate: "11:05 1 June, 2024",
    account: "107328649",
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
  {
    id: "account",
    label: "Account",
    default: true,
    getCell: (row) => row.account,
  },
  { id: "email", label: "Email", default: true, getCell: (row) => row.email },
  {
    id: "validationDate",
    label: "Validation Date",
    default: true,
    getCell: (row) => row.validationDate,
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
  const [selectedCustomerids, setSelectedCustomerids] = useState([]);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [name, setName] = useState("");
  const filteredHeadcells = columns.filter((cell) => heads.includes(cell.id));

  const parseRange = (rangeStr) => {
    const [min, max] = rangeStr.split(" - ");
    return { min, max };
  };

  const filterData = () => {
    return data.filter((row) => {
      if (startDate && dayjs(row.validationDate).isBefore(startDate))
        return false;
      if (endDate && dayjs(row.validationDate).isAfter(endDate)) return false;
      if (selectedAccounts.length > 0) {
        const accountMatch = selectedAccounts.some((range) => {
          const { min, max } = parseRange(range);
          return row.account >= min && row.account <= max;
        });
        if (!accountMatch) return false;
      }

      if (selectedCustomerids.length > 0) {
        const customerIds = selectedCustomerids.some((range) => {
          const { min, max } = parseRange(range);
          return row.customerId >= min && row.customerId <= max;
        });
        if (!customerIds) return false;
      }

      if (name && !row.name.toLowerCase().includes(name.toLowerCase()))
        return false;

      return true;
    });
  };
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
        <Searchbar value={name} setValue={setName} />
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
          accordions={[
            {
              title: "Account",
              defaultExpanded: true,
              items: [
                "000000000 - 111111111",
                "111111111 - 222222222",
                "222222222 - 999999999",
              ],
              selectedItems: selectedAccounts,
              onChange: setSelectedAccounts,
            },
            {
              title: "Customer Id",
              defaultExpanded: true,
              items: ["000000 - 111111", "111111 - 222222", "222222 - 999999"],
              selectedItems: selectedCustomerids,
              onChange: setSelectedCustomerids,
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
      <CustomTable headcells={filteredHeadcells} rows={filterData()} />
    </div>
  );
};

export default HFT;
