import { Box, IconButton, Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";

import React from "react";
import { RxCaretSort } from "react-icons/rx";

function Row(props) {
  const { row, headcells, handleClick, isItemSelected, fontSize, headcells2 } =
    props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        hover
        onClick={(event) => {
          handleClick(event, row.id, row);
        }}
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row.id}
        selected={isItemSelected}
        sx={{
          cursor: "pointer",
          ...(open && {
            background: (theme) => theme.palette.color.borderpure,
          }),
        }}
      >
        {headcells.map((headcell, index) => (
          <TableCell
            key={headcell.id}
            align={headcell.align || "left"}
            sx={{
              ...(fontSize && { fontSize: fontSize + " !important" }),
              color: (theme) => theme.palette.color.secondary,
              transition: "all 0.5s ease-in-out",
              ...(open && {
                background: (theme) => theme.palette.color.borderpure,
              }),
            }}
          >
            {index === 0 ? (
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                  sx={{
                    color: (theme) => theme.palette.color.secondary,
                    my: "auto",
                  }}
                >
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: open ? "rotate(0deg)" : "rotate(-90deg)",
                      transition: "all 0.3s ease",
                      color: (theme) => theme.palette.color.secondary,
                      fontSize: "18px",
                    }}
                  />
                  {/* {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
                </IconButton>
                {headcell.getCell(row)}
              </Stack>
            ) : (
              headcell.getCell(row)
            )}
          </TableCell>
        ))}
      </TableRow>
      {row.children.map((childrenRow) => (
        <TableRow
          sx={{
            visibility: open ? "visible" : "collapse",
            opacity: open ? 1 : 0,
            transition: "all 0.5s ease-in-out",
          }}
          key={childrenRow.date}
        >
          {(headcells2 || headcells).map((headcell, index) => (
            <TableCell
              key={headcell.id}
              align={headcell.align || "left"}
              sx={{
                ...(fontSize && {
                  fontSize: fontSize + " !important",
                }),
                position: "relative",
                ...(!open && {
                  borderBottom: "0 !important",
                }),
                color: (theme) => theme.palette.color.secondary,
                // transition: "all 0.5s ease-in-out",
                background: (theme) => theme.palette.color.borderpure,
                // ...(open && {
                // }),
              }}
            >
              {index === 0 ? (
                <Box
                  sx={{
                    pl: "48px",
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 25,
                      borderLeft: (theme) =>
                        `2px solid ${theme.palette.color.border}`,
                      borderBottom: (theme) =>
                        `2px solid ${theme.palette.color.border}`,
                      position: "absolute",
                      top: 0,
                      // left: 0,
                      left: "48px",
                    }}
                  ></Box>
                  {headcell.getCell(childrenRow)}
                </Box>
              ) : (
                headcell.getCell(childrenRow)
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </React.Fragment>
  );
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
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell /> */}
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

const CollapsibleTable = ({
  headcells,
  rows,
  onRowClick,
  fontSize,
  headcells2,
}) => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id, row) => {
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
    if (onRowClick) onRowClick(row);
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
        />
        <TableBody>
          {rows.map((row, index) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <Row
                key={index}
                row={row}
                headcells={headcells}
                isItemSelected={isItemSelected}
                labelId={labelId}
                fontSize={fontSize}
                handleClick={handleClick}
                headcells2={headcells2}
              />
              //   <TableRow
              //     hover
              //     onClick={(event) => {
              //       handleClick(event, row.id);
              //       if (onRowClick) onRowClick(row);
              //     }}
              //     aria-checked={isItemSelected}
              //     tabIndex={-1}
              //     key={row.id}
              //     selected={isItemSelected}
              //     sx={{ cursor: "pointer" }}
              //   >
              //     {headcells.map((headcell) => (
              //       <TableCell
              //         key={headcell.id}
              //         align={headcell.align || "left"}
              //         sx={{
              //           ...(fontSize && { fontSize: fontSize + " !important" }),
              //         }}
              //       >
              //         {headcell.getCell(row)}
              //       </TableCell>
              //     ))}
              //   </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
