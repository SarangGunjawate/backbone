import React from "react";
import { Box, Grid } from "@mui/material";
import SoftwaretypForm from "../Auth/SoftwaretypForm";
import { Softwaretyp } from "../../Services/AuthService";

function SoftwareType() {
  // const handleFormSubmit = async (formValues) => {
  //   console.log("formvaluesssss", formValues);

  //   const parameters = {
  //     name: formValues.name,
  //     discription: formValues.discription,
  //     created_by: formValues.created_by,
  //     updated_by: formValues.updated_by
  //   };

  //   console.log("parametersss", parameters);

  //   try {
  //     const response = await Softwaretyp(parameters);

  //     console.log("signupResponse", response);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Box
        sx={{
          height: "100vh",
          width: "550px",
          margin: "auto",
        }}
      >
        <SoftwaretypForm />
      </Box>
    </Grid>
  );
}

export default SoftwareType;
