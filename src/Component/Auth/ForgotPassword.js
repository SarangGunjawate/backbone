import {
  Box,
  Typography,
  Grid,
  FormControl,
  TextField,
  TextareaAutosize,
  Button,
  InputLabel,
} from "@mui/material";

import React from "react";

function ForgotPassword() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "secondary.main",
      }}
    >
      <Box
        component={"form"}
        sx={{
          position: "absolute",
          width: "65vh",
          height: "65vh",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
          backgroundColor: "",
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid gray",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          py: 10,
          px: 5,
        }}
      >
        <Typography
          component="div"
          sx={{
            textAlign: "center",
            width: "100%",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "33px",
            color: "black",
          }}
        >
          Forgot Password
        </Typography>
        <Grid container sx={{ width: "100%", alignSelf: "center" }}>
          <Grid item align="center" md={12} sx={{ width: "100%" }}>
            <FormControl sx={{ width: "100%" }} variant="standard">
              <TextField
                id="outlined-basic"
                sx={{ border: "1px solid green", borderRadius: 1 }}
              />

              <Button
                aria-label="reset password"
                variant="contained"
                sx={{
                  width: "100%",
                  height: "50px",
                  mt: 3,
                }}
                //   onClick={handleResetPassword}
              >
                Reset Your Password
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
