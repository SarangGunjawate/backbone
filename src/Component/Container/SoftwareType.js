import React from "react";
import {
  Box,
  Grid,
} from "@mui/material";
import SoftwaretypForm from "../Auth/SoftwaretypForm";

function SoftwareType() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Box
        sx={{
          height: "100vh",
          width: '550px',
          margin: 'auto'
        }}
      >
        <SoftwaretypForm />
      </Box>
    </Grid>
  );
}

export default SoftwareType;
