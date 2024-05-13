import { Grid } from "@mui/material";
import React from "react";
import { dashboardItems3 } from "../../../static/dashboardItem";
import InfoBox from "../../ui/InfoBox";

const SecondSection = () => {
  return (
    <>
      {dashboardItems3.map((item, index) => (
        <Grid item xs={12} lg={6} sx={{}}>
          <InfoBox item={item} index={index} />
        </Grid>
      ))}
    </>
  );
};

export default SecondSection;
