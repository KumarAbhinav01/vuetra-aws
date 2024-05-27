import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  InputAdornment,
  InputBase,
  Menu,
  Slider,
  Stack,
  TextField,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { BiChevronDown } from "react-icons/bi";
import SearchIcon from "@mui/icons-material/Search";
import CustomCheckbox from "../ui/CustomCheckbox";

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

function valuetext(value) {
  return `${value}°C`;
}

export default function FilterPopup({ rangeFilter, accordions }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchValue, onSearchChange] = useState("");

  const handleRangeChange = (event, newValue) => {
    rangeFilter.onChange(newValue);
  };

  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleCheckboxChange = (accordionTitle, selectedItem) => {
    const accordion = accordions.find((acc) => acc.title === accordionTitle);
    const selectedItems = accordion.selectedItems.includes(selectedItem)
      ? accordion.selectedItems.filter((item) => item !== selectedItem)
      : [...accordion.selectedItems, selectedItem];
    accordion.onChange(selectedItems);
  };

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
          px: "4px",
        }}
      >
        All <BiChevronDown size={18} style={{ marginLeft: "4px" }} />
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
            maxHeight: "500px",
            overflowY: "auto",
          }}
        >
          <Stack spacing={2}>
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
              value={searchValue}
              onChange={handleSearchChange}
            />

            <Stack spacing={1} sx={{ px: 1 }}>
              <Typography variant="body3">{rangeFilter.label}</Typography>

              <Slider
                getAriaLabel={() => rangeFilter.ariaLabel}
                value={rangeFilter.value}
                onChange={handleRangeChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems={"center"}
              >
                <TextField
                  sx={{
                    mr: 1,
                    "& input": {
                      p: "8px",
                    },
                  }}
                  value={rangeFilter.value[0]}
                  onChange={(e) =>
                    handleRangeChange(null, [
                      Number(e.target.value),
                      rangeFilter.value[1],
                    ])
                  }
                  type="number"
                />
                -
                <TextField
                  sx={{
                    ml: 1,
                    "& input": {
                      p: "8px",
                    },
                    "& .MuiInputBase-input": {
                      borderRadius: "8px",
                    },
                  }}
                  value={rangeFilter.value[1]}
                  onChange={(e) =>
                    handleRangeChange(null, [
                      rangeFilter.value[0],
                      Number(e.target.value),
                    ])
                  }
                />
              </Stack>
            </Stack>
            <Divider />
          </Stack>
          {accordions
            .filter((a) =>
              a.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((accordion, index) => (
              <Accordion
                key={index}
                defaultExpanded={accordion.defaultExpanded}
                sx={{
                  ":before": { display: "none" },
                  "& .Mui-expanded": {
                    margin: "0px !important",
                    minHeight: "0 !important",
                  },
                  "& .MuiPaper-root": {},
                  "& .MuiTypography-root": {
                    fontSize: "11.5px",
                    fontWeight: "500",
                    color: (theme) => theme.palette.color.secondary,
                  },
                  marginBottom: "0px !important",
                  background: "transparent",
                }}
              >
                <AccordionSummary
                  expandIcon={<BiChevronDown size={18} />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography>{accordion.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={1}>
                    {accordion.items.map((item, idx) => (
                      <CustomCheckbox
                        key={idx}
                        spacing={1}
                        label={item}
                        checked={accordion.selectedItems.includes(item)}
                        onChange={() =>
                          handleCheckboxChange(accordion.title, item)
                        }
                      />
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            ))}
        </Stack>
      </Menu>
    </>
  );
}
