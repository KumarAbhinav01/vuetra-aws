export default function themeTypography(theme) {
  return {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontWeight: 600,
      color: theme.colors.primary,
      fontSize: "26px",
    },
    h2: {
      fontSize: "22px",
      color: theme.colors.primary,
      fontWeight: 700,
    },
    h3: {
      fontSize: "20px",
      color: theme.colors.primary,
      fontWeight: 700,
    },
    h4: {
      fontSize: "18px",
      color: theme.colors.primary,
      fontWeight: 600,
    },
    h5: {
      fontSize: "16px",
      color: theme.colors.primary,
      fontWeight: 600,
    },
    h6: {
      fontSize: "15px",
      color: theme.colors.primary,
      fontWeight: 600,
    },
    heading: {
      fontSize: "14px",
      color: theme.colors.primary,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "13px",
      fontWeight: 600,
      color: theme.colors.primary,
    },
    subtitle2: {
      fontSize: "12px",
      fontWeight: 600,
      color: theme.colors.secondary,
    },
    caption: {
      fontSize: "13px",
      color: theme.colors.secondary,
      fontWeight: 600,
    },
    body1: {
      fontSize: "11.5px",
      fontWeight: 500,
      lineHeight: "1.334em",
      color: theme.colors.primary,
    },
    body2: {
      fontSize: "11px",
      fontWeight: 400,
      color: theme.colors.secondary,
    },
    body3: {
      fontSize: "11.5px",
      fontWeight: 500,
      color: theme.colors.secondary,
    },
  };
}
