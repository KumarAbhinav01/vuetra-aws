import {
  FormControl,
  FormLabel,
  InputBase,
  MenuItem,
  Select,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpIcon from "@mui/icons-material/Help";
import CustomSwitch from "./Switch";

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    // borderRadius: 4,
    // backgroundColor: theme.palette.color.bg2,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontSize: "inherit",
    padding: "11px",
    color:
      theme.palette.mode === "dark"
        ? theme.palette.color.secondary
        : theme.palette.color.primary,
    border: (theme) => `1px solid ${theme.palette.color.inputborder}`,
  },
  borderRadius: "7px",
  // background: theme.palette.color.bg2,
}));

const FormSelect = ({
  options,
  label,
  helperTexts,
  fullWidth = false,
  label2,
  checkbox,
  sx = {},
  ...rest
}) => {
  return (
    <FormControl fullWidth={fullWidth}>
      {label && (
        <FormLabel
          sx={{
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          {label}
        </FormLabel>
      )}
      {label2 && (
        <Stack
          direction="row"
          justifyContent={"space-between"}
          sx={{ mb: "12px", width: "100%" }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
              color: (theme) => theme.palette.color.secondary,
            }}
          >
            <Typography variant="caption">{label2}</Typography>
            <HelpIcon sx={{ fontSize: "15px" }} />
          </Stack>
          {checkbox && <CustomSwitch />}
        </Stack>
      )}

      <Select
        fullWidth
        sx={{
          transition: "all 300ms ease-in-out",
          ":focus-within": {
            border: (theme) =>
              `1px solid ${alpha(theme.palette.color.secondary, 0.5)}`,
          },
          fontSize: "14px",
          background: (theme) => theme.palette.color.bg2,

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
        input={<StyledInput />}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            sx={{
              fontSize: "13px",
              fontWeight: "500",
              color: (theme) => theme.palette.color.secondary,
            }}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperTexts && helperTexts.length > 0 && (
        <Stack spacing={2} sx={{ mt: "14px" }}>
          {helperTexts.map((text, index) => (
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.color.secondary,
                fontWeight: "400",
              }}
              key={index}
            >
              {text}
            </Typography>
          ))}
        </Stack>
      )}
    </FormControl>
  );
};

export default FormSelect;
