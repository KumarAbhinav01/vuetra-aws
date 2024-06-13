import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  alpha,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import { PiWarningDiamond, PiWarningDiamondBold } from "react-icons/pi";
import { MdDone } from "react-icons/md";
import Searchbar from "../../../components/ui/Searchbar";
import ExportSection from "../../../components/ui/ExportSection";
import CalendarPopup from "../../../components/ui/CalendarPopup";
import DisplayColumns from "../../../components/ui/DisplayColumns";
import dayjs from "dayjs";
import { IoMdTime } from "react-icons/io";
import { FiDownloadCloud } from "react-icons/fi";
import FilterPopup from "../../../components/ui/FilterPopup";

const items = [
  {
    title: "Total Scanned",
    value: "489",
    tooltip: "Active accounts that are doing a evaluation, funded are on trial",
  },
  {
    title: "Total hedge traders",
    value: "69",
    tooltip: "All inactive accounts",
    icon: PiWarningDiamondBold,
    color: "red",
  },
  {
    title: "Total passed",
    value: "420",
    tooltip: "All inactive accounts",
    icon: MdDone,
    color: "green",
  },
  {
    title: "Last Scan",
    value: "3 min ago",
    tooltip: "All inactive accounts",
    icon: IoMdTime,
    color: "secondary",
  },
];

const data = [
  {
    match: "100%",
    title: "Title1",
    rows: [
      [
        {
          customer: "918742",
          account: "467328649",
          name: "John Doe",
          balance: "$100.000",
          equity: "$100.000",
        },
      ],
      [
        {
          customer: "918742",
          account: "467328649",
          name: "John Doe",
          balance: "$1,500.50",
          equity: "$20,000.00",
        },
      ],
    ],
  },
  {
    match: "100%",
    title: "Title2",
    rows: [
      [
        {
          customer: "918742",
          account: "467328649",
          name: "John Doe",
          balance: "$100.000",
          equity: "$100.000",
        },
      ],
      [
        {
          customer: "918742",
          account: "467328649",
          name: "John Doe",
          balance: "$1,500.50",
          equity: "$20,000.00",
        },
      ],
    ],
  },
  {
    match: "100%",
    title: "Title3",
    rows: [
      [
        {
          customer: "918742",
          account: "467328649",
          name: "John Doe",
          balance: "$100.000",
          equity: "$100.000",
        },
      ],
      [
        {
          customer: "918742",
          account: "467328649",
          name: "John Doe",
          balance: "$1,500.50",
          equity: "$20,000.00",
        },
      ],
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

const Hedge = () => {
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

  const filterData = data.filter((d) => {
    const rows = d.rows.filter((row) => {
      if (selectedAccounts.length > 0) {
        const accountMatch = selectedAccounts.some((range) => {
          const { min, max } = parseRange(range);
          return row[0].account >= min && row[0].account <= max;
        });
        if (!accountMatch) return false;
      }

      if (selectedCustomerids.length > 0) {
        const customerIds = selectedCustomerids.some((range) => {
          const { min, max } = parseRange(range);
          console.log(min, max, row[0].customer);
          return row[0].customer >= min && row[0].customer <= max;
        });
        if (!customerIds) return false;
      }

      if (name && !row[0].name.toLowerCase().includes(name.toLowerCase()))
        return false;

      return true;
    });
    return rows.length > 0;
  });

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
      <Stack spacing={2} sx={{ py: "16px", width: "100%" }}>
        {filterData.map((item) => (
          <Box
            sx={{
              border: (theme) => `1px solid ${theme.palette.color.border3}`,
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                mb: 1,
              }}
            >
              <Typography variant="heading">{item.title}</Typography>
              <Stack direction="row" spacing={1} alignItems="center">
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
                      fontSize: "12px",
                    }}
                  >
                    {item.match} Match
                  </Typography>
                </Box>
                <Button
                  sx={{
                    padding: "3px 14px",
                    fontSize: "12px",
                  }}
                  variant="contained"
                  startIcon={<FiDownloadCloud size={18} />}
                >
                  Export
                </Button>
              </Stack>
            </Stack>
            <Grid container>
              {/* {item.rows} */}
              {item.rows.map((row, index) => (
                <Grid
                  item
                  xs={6}
                  sx={{
                    ...(index === 0 && {
                      borderRight: (theme) =>
                        `1px solid ${theme.palette.color.border3}`,
                    }),
                  }}
                >
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          {filteredHeadcells.map((head) => (
                            // <Typography variant="body1">{head.label}</Typography>
                            <TableCell
                              sx={{
                                fontWeight: "500",
                                background: (theme) => theme.palette.color.bg3,
                                py: "4px !important",
                                px: "12px !important",
                                borderBottom: "none !important",
                              }}
                            >
                              {head.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row.map((cell) => (
                          <TableRow>
                            {filteredHeadcells.map((head) => (
                              <TableCell
                                sx={{
                                  py: "8px !important",
                                  px: "12px !important",
                                  borderBottom: "none !important",
                                }}
                              >
                                {head.cell(cell)}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default Hedge;
