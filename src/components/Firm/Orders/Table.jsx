import { Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import React from "react";
import { RxCaretSort } from "react-icons/rx";
import CustomCheckbox from "../../ui/CustomCheckbox";

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headcells,
    fontSize,
    checkbox,
    allSelected,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {checkbox && (
          <TableCell>
            <CustomCheckbox
              variant="contained"
              checked={allSelected}
              onChange={() => {
                onSelectAllClick();
              }}
              background="bg2"
            />
          </TableCell>
        )}
        {headcells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <Stack direction="row" alignItems="center">
              <Typography
                variant="subtitle2"
                sx={{
                  whiteSpace: "nowrap",
                  fontWeight: "500",
                  ...(fontSize && { fontSize: fontSize + " !important" }),
                }}
              >
                {headCell.label}
              </Typography>
              {headCell.label && <RxCaretSort size={15} />}
            </Stack>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const CustomTable = ({
  headcells,
  rows,
  onRowClick,
  fontSize,
  checkbox,
  selected = [],
  setSelected,
}) => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  // const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (selected.length !== rows.length) {
      const newSelected = rows.map((n, index) => index);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const visibleRows = React.useMemo(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, rows]
  );
  return (
    <TableContainer
      sx={{
        // maxWidth: "60%",
        my: 3,
      }}
    >
      <Table
        sx={{ minWidth: 750, maxWidth: "100%", overflowX: "auto" }}
        aria-labelledby="tableTitle"
        size="medium"
      >
        <EnhancedTableHead
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={rows.length}
          headcells={headcells}
          fontSize={fontSize}
          checkbox={checkbox}
          allSelected={selected.length === rows.length}
        />
        <TableBody>
          {rows.map((row, index) => {
            const isItemSelected = isSelected(index);
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <TableRow
                hover
                onClick={(event) => {
                  if (onRowClick) onRowClick(row);
                }}
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.id}
                selected={isItemSelected}
                sx={{ cursor: "pointer" }}
              >
                {checkbox && (
                  <TableCell>
                    <CustomCheckbox
                      variant="contained"
                      checked={isItemSelected}
                      onChange={() => {
                        handleClick(index);
                      }}
                      background="bg2"
                    />
                  </TableCell>
                )}
                {headcells.map((headcell) => (
                  <TableCell
                    key={headcell.id}
                    align={headcell.align || "left"}
                    sx={{
                      ...(fontSize && { fontSize: fontSize + " !important" }),
                    }}
                  >
                    {headcell.getCell(row, index)}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
