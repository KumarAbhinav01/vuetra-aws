import { InputBase, MenuItem, Select, alpha, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid #ced4da",
    paddingLeft: "8px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontSize: "11.5px",
  },
}));

const FormSelect = ({ options, sx = {}, ...rest }) => {
  return (
    <Select
      sx={{
        width: "fit-content",
        borderRadius: "4px",
        border: `0`,
        color: (theme) => theme.palette.color.secondary,
        outline: "none",
        fontSize: "11.5px",

        "& .MuiInputBase-input": {
          border: (theme) =>
            `1px solid ${alpha(
              theme.palette.color.secondary,
              0.15
            )} !important`,
        },
        ...sx,
      }}
      IconComponent={() => (
        <ExpandMoreIcon
          sx={{
            color: (theme) => theme.palette.color.secondary,
            fontSize: "15px",
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      )}
      input={<BootstrapInput />}
      {...rest}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          sx={{ fontSize: "11.5px", fontWeight: "500" }}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default FormSelect;
