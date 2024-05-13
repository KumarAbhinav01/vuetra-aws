import { Box, Card, Paper, Stack, Tooltip, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import React from "react";
import { firmItems, products } from "../../static/firmItems";
import ProductCard from "../../components/Firm/Products/ProductCard";
import Add from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../../slices/openModalSlice";
import AddProduct from "../../components/Firm/Products/AddProduct";

const Firm = () => {
  const dispatch = useDispatch();
  return (
    <Paper sx={{ padding: "24px" }}>
      <Stack direction="row" spacing={3}>
        {firmItems.map((item) => (
          <Card
            sx={{
              width: "100%",
              border: (theme) => `1px solid ${theme.palette.color.border}`,
              background: (theme) => theme.palette.color.bg2,
              borderRadius: "12px",
              overflow: "hidden",
              padding: "24px",
            }}
          >
            <Stack spacing={3}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="caption">{item.title}</Typography>
                <Tooltip title={item.tooltip}>
                  <HelpIcon
                    sx={{
                      fontSize: "15px",
                      cursor: "pointer",
                      color: (theme) => theme.palette.color.secondary,
                    }}
                  />
                </Tooltip>
              </Stack>
              <Typography variant="h4">{item.value}</Typography>
            </Stack>
          </Card>
        ))}
      </Stack>

      <Stack direction="row" spacing={3} mt={3}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            id={product.id}
            sales={product.sales}
            value={product.value}
          />
        ))}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            border: (theme) => `1px solid ${theme.palette.color.border}`,
            borderRadius: "18px",
            width: "250px",
            cursor: "pointer",
            transition: "all 300ms ease-in-out",
            color: (theme) => theme.palette.color.secondary,
            ":hover": {
              color: (theme) => theme.palette.color.green,
            },
          }}
          onClick={() => dispatch(toggleOpen())}
        >
          <Add />
          <Typography
            mt={2}
            sx={{
              color: "inherit",
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Add New
          </Typography>
        </Box>
      </Stack>
      <AddProduct />
    </Paper>
  );
};

export default Firm;
