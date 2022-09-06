import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  FormControl,
  FormGroup,
} from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function SignupForm() {
  const navigate = useNavigate();

  const paperStyle = {
    padding: "10px",
    height: "85vh",
    width: "450px",
    margin: "40px auto",
  };
  const avtarStyle = {
    backgroundColor: "#1e8097",
  };
  const forgotStyle = {
    textDecoration: "none",
    color: "blue",
    cursor: "pointer",
  };
  const btnStyle = {
    margin: "6px 0",
  };
  return (
    <Box>
      <Box component={"form"}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avtarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign in</h2>
          </Grid>
          <TextField
            fullWidth
            id="standard-basic"
            label="first name"
            placeholder="Enter First Name"
            type="text"
            variant="standard"
            style={btnStyle}
          />
          <TextField
            fullWidth
            label="last name"
            placeholder="Enter Last Name"
            variant="standard"
            type="text"
            style={btnStyle}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="email"
            placeholder="Enter Email"
            type="text"
            variant="standard"
            style={btnStyle}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="username"
            placeholder="Enter UserName"
            type="text"
            variant="standard"
            style={btnStyle}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="password"
            placeholder="Enter Password"
            type="Password"
            variant="standard"
            style={btnStyle}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="confirm password"
            placeholder="Enter Confirm Password"
            type="text"
            variant="standard"
            style={btnStyle}
          />

          <Box component="div">
            <FormControl style={{ width: "100%" }} variant="standard">
              <FormGroup>
                <FormControlLabel
                  sx={{ marginRight: 0 }}
                  control={
                    <Checkbox
                      // checked={inputValues.agree}
                      // onChange={handleOnChange}
                      name="agree"
                    />
                  }
                  label={
                    <Box style={{ fontSize: "1rem" }}>
                      By creating an account you agree to the
                      <Box
                        component="span"
                        style={{
                          marginLeft: "5px",
                          marginRight: "5px",
                          color: "blue",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigate("");
                        }}
                      >
                        terms of use
                      </Box>
                      and our
                      <Box
                        component="span"
                        style={{
                          marginLeft: "5px",
                          color: "blue",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigate("");
                        }}
                      >
                        privacy policy
                      </Box>
                    </Box>
                  }
                />
              </FormGroup>
            </FormControl>
            {/* <FormHelperText error={errors.agree ? true : false}>
                {errors.agree}
              </FormHelperText> */}
          </Box>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Create Account
          </Button>

          <Typography>
            Already have an account?
            <Box
              component="span"
              style={forgotStyle}
              onClick={() => {
                navigate("/signin");
              }}
            >
              Login
            </Box>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default SignupForm;
