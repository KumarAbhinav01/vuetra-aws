import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Grid, IconButton, Stack, Tooltip, alpha } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { PiWarningDiamond, PiWarningDiamondBold } from "react-icons/pi";
import { MdDone } from "react-icons/md";
import Searchbar from "../../../components/ui/Searchbar";
import ExportSection from "../../../components/ui/ExportSection";
import CalendarPopup from "../../../components/ui/CalendarPopup";
import DisplayColumns from "../../../components/ui/DisplayColumns";
import dayjs from "dayjs";
import FilterPopup from "../../../components/ui/FilterPopup";

const items = [
  {
    title: "Total Scanned",
    value: "1841",
    tooltip: "Active accounts that are doing a evaluation, funded are on trial",
  },
  {
    title: "Total copy traders",
    value: "32",
    tooltip: "All inactive accounts",
    icon: PiWarningDiamondBold,
    color: "red",
  },
  {
    title: "Total passed",
    value: "1799",
    tooltip: "All inactive accounts",
    icon: MdDone,
    color: "green",
  },
];

const data = [
  {
    match: "100%",
    rows: [
      {
        customer: "918742",
        account: "467328649",
        name: "John Doe",
        balance: "$100.000",
        equity: "$100.000",
      },
      {
        customer: "918742",
        account: "467328649",
        name: "John Doe",
        balance: "$100.000",
        equity: "$100.000",
      },
    ],
  },
  {
    match: "100%",
    rows: [
      {
        customer: "918742",
        account: "467328649",
        name: "John Doe",
        balance: "$100.000",
        equity: "$100.000",
      },
      {
        customer: "918742",
        account: "467328649",
        name: "John Doe",
        balance: "$100.000",
        equity: "$100.000",
      },
    ],
  },
  {
    match: "100%",
    rows: [
      {
        customer: "218742",
        account: "217328649",
        name: "Harry Woods",
        balance: "$100.000",
        equity: "$100.000",
      },
      {
        customer: "218742",
        account: "217328649",
        name: "Harry Woods",
        balance: "$100.000",
        equity: "$100.000",
      },
    ],
  },
  {
    match: "100%",
    rows: [
      {
        customer: "108742",
        account: "107328649",
        name: "John Doe",
        balance: "$100.000",
        equity: "$100.000",
      },
      {
        customer: "108742",
        account: "107328649",
        name: "John Doe",
        balance: "$100.000",
        equity: "$100.000",
      },
    ],
  },
];

const headcells = [
  {
    id: "customer",
    label: "Customer",
    default: true,
    cell: (row) => (
      <Typography
        variant="body1"
        sx={{
          padding: "2px 7px",
          border: (theme) => `1px solid ${theme.palette.color.border}`,
          width: "fit-content",
        }}
      >
        {"#" + row.customer}
      </Typography>
    ),
  },
  {
    id: "account",
    label: "Account",
    default: true,
    cell: (row) => (
      <Typography
        variant="body1"
        sx={{
          padding: "2px 7px",
          border: (theme) => `1px solid ${theme.palette.color.border}`,
          width: "fit-content",
        }}
      >
        {row.account}
      </Typography>
    ),
  },
  { id: "name", label: "Name", default: true, cell: (row) => row.name },
  {
    id: "balance",
    label: "Balance",
    default: true,
    cell: (row) => row.balance,
  },
  {
    id: "equity",
    label: "Equity",
    default: true,
    cell: (row) => row.equity,
  },
];

const CopyTraders = () => {
  const [heads, setHeads] = React.useState(
    headcells.filter((cell) => cell.default).map((cell) => cell.id)
  );
  const [columns, setColumns] = useState(headcells);
  const [startDate, setStartDate] = useState(dayjs().startOf("week"));
  const [endDate, setEndDate] = useState(dayjs().endOf("week"));
  const [selectedCustomerids, setSelectedCustomerids] = useState([]);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [name, setName] = useState("");
  const filteredHeadcells = columns.filter((cell) => heads.includes(cell.id));

  const parseRange = (rangeStr) => {
    const [min, max] = rangeStr.split(" - ");
    return { min, max };
  };

  const filterData = () => {
    return data.filter((d) => {
      const rows = d.rows.filter((row) => {
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
            return row.customer >= min && row.customer <= max;
          });
          if (!customerIds) return false;
        }

        if (name && !row.name.toLowerCase().includes(name.toLowerCase()))
          return false;

        return true;
      });
      return rows.length > 0;
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
          <Grid item xs={12} md={4}>
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
                        color: (theme) => theme.palette.color[item.color],
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
      <Stack spacing={1} sx={{ py: "16px", width: "100%" }}>
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
        {filterData().map((item) => (
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
      </Stack>
    </div>
  );
};

export default CopyTraders;
