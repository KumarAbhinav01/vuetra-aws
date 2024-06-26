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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

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
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {checkbox && (
          <TableCell>
            <CustomCheckbox
              variant="contained"
              checked={allSelected}
              onChange={onSelectAllClick}
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
              <RxCaretSort
                size={15}
                onClick={createSortHandler(headCell.id)}
                style={{
                  cursor: "pointer",
                  color: orderBy === headCell.id ? "blue" : "inherit",
                }}
              />
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
  onRequestSort,
  order,
  orderBy,
  onRowClick,
  fontSize,
  checkbox,
  selected = [],
  setSelected,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    if (onRequestSort) onRequestSort(isAsc ? "desc" : "asc", property);
  };

  const handleSelectAllClick = () => {
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
    () =>
      orderBy
        ? stableSort(rows, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )
        : rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows]
  );

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <>
      <TableContainer
        sx={{
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
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(index);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  onClick={() => onRowClick && onRowClick(row)}
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
                        onChange={() => handleClick(index)}
                        background="bg2"
                      />
                    </TableCell>
                  )}
                  {headcells.map((headcell) => (
                    <TableCell
                      key={headcell.id}
                      align={headcell.align || "left"}
                      sx={{
                        ...(fontSize && {
                          fontSize: fontSize + " !important",
                          color: (theme) => theme.palette.color.secondary,
                        }),
                      }}
                    >
                      {headcell.getCell(row, index)}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
            {rows.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={headcells.length}
                  align="left"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: (theme) => theme.palette.color.primary,
                  }}
                >
                  <Typography variant="caption_500">
                    No data available
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </>
  );
};

export default CustomTable;
