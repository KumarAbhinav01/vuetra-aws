import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Grid, IconButton, Stack, Tooltip, alpha } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { PiWarningDiamondBold } from "react-icons/pi";
import { MdDone } from "react-icons/md";
import Searchbar from "../../../components/ui/Searchbar";
import ExportSection from "../../../components/ui/ExportSection";
import CalendarPopup from "../../../components/ui/CalendarPopup";
import DisplayColumns from "../../../components/ui/DisplayColumns";
import CustomTable from "../../../components/Firm/Orders/Table";
import dayjs from "dayjs";
import FilterPopup from "../../../components/ui/FilterPopup";
import { IoMdTime } from "react-icons/io";
import { FiDownloadCloud } from "react-icons/fi";
import { ipaddressdata } from "../../../static/flaggedaccounts";

const items = [
  {
    title: "Accounts Scanned",
    value: "523",
    tooltip: "Active accounts that are doing a evaluation, funded are on trial",
  },
  {
    title: "Flagged Customers",
    value: "21",
    tooltip: "All inactive accounts",
    icon: PiWarningDiamondBold,
    color: "red",
  },
  {
    title: "Passed Risk Scan",
    value: "301",
    tooltip: "All inactive accounts",
    icon: MdDone,
    color: "green",
  },
  {
    title: "Last Scan",
    value: "10 min ago",
    tooltip: "All inactive accounts",
    icon: IoMdTime,
    color: "secondary",
    textColor: "primary",
  },
];

const headcells = [
  {
    id: "ipaddress",
    label: "IP-Address",
    default: true,
    getCell: (row) => row.ipaddress,
  },
  {
    id: "customer",
    label: "Customer",
    default: true,
    getCell: (row) => row.customer,
  },
  {
    id: "countries",
    label: "Countries",
    default: true,
    getCell: (row) => row.countries,
  },
  {
    id: "accounts",
    label: "Accounts",
    default: true,
    getCell: (row) => row.accounts,
  },
  {
    id: "purchase",
    label: "Purchase",
    default: true,
    getCell: (row) => row.purchase,
  },
  {
    id: "active",
    label: "Active",
    default: true,
    getCell: (row) => row.active,
  },
  {
    id: "action",
    label: "Action",
    default: true,
    getCell: (row) => (
      <Box
        sx={{
          color: (theme) => theme.palette.color.secondary,
        }}
      >
        <FiDownloadCloud size={18} />
      </Box>
    ),
  },
];

const IpAddress = () => {
  const [heads, setHeads] = React.useState(
    headcells.filter((cell) => cell.default).map((cell) => cell.id)
  );
  const [startDate, setStartDate] = useState(dayjs().startOf("week"));
  const [endDate, setEndDate] = useState(dayjs().endOf("week"));
  const [rangeValue, setRangeValue] = useState([20, 37]);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [selectedPurchase, setSelectedPurchase] = useState([]);
  const [cols, setCols] = useState(headcells);

  const parseRange = (rangeStr) => {
    const [min, max] = rangeStr.split(" - ").map(Number);
    return { min, max };
  };

  const filterData = () => {
    return ipaddressdata.filter((d) => {
      if (d.countries < rangeValue[0] || d.countries > rangeValue[1])
        return false;

      if (selectedAccounts.length > 0) {
        const accountMatch = selectedAccounts.some((range) => {
          const { min, max } = parseRange(range);
          return d.accounts >= min && d.accounts <= max;
        });
        if (!accountMatch) return false;
      }

      if (selectedPurchase.length > 0) {
        const purchaseMatch = selectedPurchase.some((range) => {
          const { min, max } = parseRange(range);
          return d.purchase >= min && d.purchase <= max;
        });
        if (!purchaseMatch) return false;
      }

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
        <Searchbar />
        <ExportSection />
        <CalendarPopup
          mainStartDate={startDate}
          mainEndDate={endDate}
          setMainStartDate={setStartDate}
          setMainEndDate={setEndDate}
        />
        <DisplayColumns
          columns={cols}
          setColumns={setCols}
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
              title: "Accounts",
              defaultExpanded: true,
              items: ["0 - 10", "10 - 30", "30 - 50"],
              selectedItems: selectedAccounts,
              onChange: setSelectedAccounts,
            },
            {
              title: "Purchase",
              defaultExpanded: true,
              items: ["0 - 10", "10 - 30", "30 - 50"],
              selectedItems: selectedPurchase,
              onChange: setSelectedPurchase,
            },
          ]}
        />
      </Stack>

      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} md={3}>
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

                <Stack direction="row" spacing={1} alignItems="center">
                  {item.icon && (
                    <IconButton
                      sx={{
                        color: (theme) => theme.palette.color[item.color],
                        background: (theme) =>
                          alpha(theme.palette.color[item.color], 0.15),
                        ":hover": {
                          background: (theme) =>
                            alpha(theme.palette.color[item.color], 0.25),
                        },
                      }}
                    >
                      <item.icon size={20} />
                    </IconButton>
                  )}

                  <Typography
                    variant="h1"
                    sx={{
                      ...(item.color && {
                        color: (theme) =>
                          theme.palette.color[item.textColor || item.color],
                      }),
                      fontWeight: "600",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CustomTable headcells={cols} rows={filterData()} />
    </div>
  );
};

export default IpAddress;
