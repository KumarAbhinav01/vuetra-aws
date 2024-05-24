import {
  Button,
  InputAdornment,
  InputBase,
  Menu,
  Stack,
  alpha,
  styled,
} from "@mui/material";
import React, { useState, useCallback } from "react";
import { BiChevronDown } from "react-icons/bi";
import SearchIcon from "@mui/icons-material/Search";
import CustomCheckbox from "./CustomCheckbox";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    backgroundColor: theme.palette.color.bg3,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontSize: "11.5px",
    paddingTop: "3px",
    paddingBottom: "3px",
  },
  background: theme.palette.color.bg3,
}));

const ItemType = "COLUMN";

const DraggableColumn = ({ column, index, moveColumn }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveColumn(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { type: ItemType, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      ref={ref}
      sx={{
        cursor: "pointer",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <DragIndicatorIcon
        sx={{
          color: (theme) => theme.palette.color.secondary,
          cursor: "grab",
        }}
      />
      <CustomCheckbox
        label={column.label}
        checked={column.checked}
        onChange={column.onChange}
        variant="body1"
      />
    </Stack>
  );
};

export default function DisplayColumns({
  columns,
  setColumns,
  selectedColumns,
  setSelectedColumns,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState("");

  const moveColumn = useCallback(
    (dragIndex, hoverIndex) => {
      const dragColumn = columns[dragIndex];
      const updatedColumns = [...columns];
      updatedColumns.splice(dragIndex, 1);
      updatedColumns.splice(hoverIndex, 0, dragColumn);
      setColumns(updatedColumns);
    },
    [columns, setColumns]
  );

  return (
    <>
      <Button
        variant="outlined"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{
          background: "transparent",
          color: (theme) => theme.palette.color.secondary,
          border: (theme) =>
            `1px solid ${alpha(theme.palette.color.secondary, 0.15)}`,
          ":hover": {
            border: (theme) =>
              `1px solid ${alpha(theme.palette.color.secondary, 0.45)}`,
            background: "transparent",
          },
          fontSize: "11.5px",
          height: "26px",
        }}
      >
        Display <BiChevronDown />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <Stack
          sx={{
            borderRadius: "10px",
            p: "10px",
            background: (theme) => theme.palette.color.bg2,
            width: "300px",
            mr: "10px",
            maxHeight: "400px",
            overflowY: "auto",
          }}
          spacing={1}
        >
          <StyledInput
            sx={{
              border: (theme) => `1px solid ${theme.palette.color.border}`,
              px: 1,
              width: "100%",
            }}
            placeholder="Search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: "13px" }} />
              </InputAdornment>
            }
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Stack spacing={2} sx={{ px: 1 }}>
            <DndProvider backend={HTML5Backend}>
              {columns
                .filter((column) =>
                  column.label.toLowerCase().includes(value.toLowerCase())
                )
                .map((column, index) => (
                  <DraggableColumn
                    key={column.id}
                    column={{
                      ...column,
                      checked: selectedColumns.includes(column.id),
                      onChange: () => {
                        if (selectedColumns.includes(column.id)) {
                          setSelectedColumns(
                            selectedColumns.filter((col) => col !== column.id)
                          );
                        } else {
                          setSelectedColumns([...selectedColumns, column.id]);
                        }
                      },
                    }}
                    index={index}
                    moveColumn={moveColumn}
                  />
                ))}
            </DndProvider>
          </Stack>
        </Stack>
      </Menu>
    </>
  );
}
