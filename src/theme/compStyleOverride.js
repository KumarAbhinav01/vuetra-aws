export default function componentStyleOverrides(theme) {
  return {
    MuiSlider: {
      styleOverrides: {
        root: {
          "& .MuiSlider-rail": {
            background: "rgba(0, 149, 255, 0.5)",
          },
          "& .MuiSlider-track": {
            background: theme.colors.blue,
            border: "none",
          },
          "& .MuiSlider-thumb": {
            width: "12px",
            height: "12px",

            backgroundColor: theme.colors.blue,
            border: `1px solid ${theme.colors.border}`,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "& .MuiTypography-root ": {
            fontSize: "14px",
            fontWeight: "500",
            color: theme.colors.primary,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontWeight: "600",
          "&.Mui-focused": {
            color: theme.colors.primary,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiIconButton-root": {
            padding: "8px",
          },
          padding: "8px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          "& .MuiDrawer-paper": {
            borderRadius: "20px 0 0 20px ",
            background: theme.colors.bg,
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          background: "transparent",
          "& .MuiTableRow-root": {
            background: "transparent !important",
          },
          "& .MuiTableCell-root": {
            borderBottom: `1px solid ${theme.colors.border}`,
            paddingTop: "12px",
            paddingBottom: "12px",
            paddingLeft: "22px",
            paddingRight: "22px",
            fontSize: "11.5px",
            fontWeight: 400,
          },

          "& .MuiTableCell-head": {
            color: theme.colors.secondary,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTab-root": {
            minHeight: "40px !important",
            minWidth: "auto",
            padding: "0px 16px",
            fontSize: "13px",
            fontWeight: "500",
            color: theme.colors.secondary,
            textTransform: "none",
            transition: "all 500ms ease-in-out",
            ":hover": {
              opacity: 0.35,
            },
          },
          "& .Mui-selected": {
            color: theme.colors.primary + "!important",
            fontSize: "13px",
            ":hover": {
              opacity: 1,
            },
          },
          borderBottom: "0",
          minHeight: "40px !important",
        },

        indicator: {
          backgroundColor: theme.colors.active,
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        root: {
          "& .MuiPaper-root": {
            background: theme.colors.bg2,
            border: "1px solid rgba(49, 50, 54, 0.25)",
            borderRadius: "18px",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: "4px",
          background: theme.colors.buttonbg,

          color: theme.colors.button,
          textTransform: "none",
          padding: "8px 16px",
          "&:hover": {
            background: theme.colors.buttonbg,
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
          background: theme.colors.bg3,
          "&:focus-visible": {
            outline: "none",
          },
        },
        rounded: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          color: theme.colors?.primary,
          padding: "24px",
          borderRadius: "20px",
          boxShadow: "none",
          border: `1px solid ${theme.colors?.lightgray}`,

          background: theme.colors?.bg3,
          transition: "all 0.5s ease-in-out",
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          opacity: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors?.primaryDark,
          background: theme.colors?.primary200,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-deletable .MuiChip-deleteIcon": {
            color: "inherit",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.colors.secondary,
          background: theme.colors.bg2,
          border: `1px solid ${theme.colors.border}`,
          padding: "12px",
          borderRadius: "8px",
        },
      },
    },
    MuiAccordian: {
      styleOverrides: {
        root: {
          "&.MuiPaper-elevation0::before": {
            content: "none",
          },
        },
      },
    },
  };
}
