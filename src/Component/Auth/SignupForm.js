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
  FormHelperText,
} from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../../Utils/Helper";

import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function SignupForm(props) {
  const navigate = useNavigate();

  const paperStyle = {
    padding: "10px",
    // height: "85vh",
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

  const [inputValues, setInputValue] = useState({
    // firstName: "",
    // lastName: "",
    // email: "",
    username: "",
    password: "",
    // confirmPassword: "",
    // agree: false,
  });

  const [errors, setError] = useState({
    // firstName: "",
    // lastName: "",
    // email: "",
    username: "",
    password: "",
    // confirmPassword: "",
    // agree: "",
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};
    Object.keys(inputValues).forEach((name) => {
      const error = validateForm(name, inputValues[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setError({ ...errors, ...validationErrors });
      return;
    }

    // Submit form
    props.handleFormSubmit(inputValues);
  };

  const validateForm = (name, value) => {
    switch (name) {
      // case "firstName":
      //   if (!value || value.trim() === "") {
      //     return "firstname is required";
      //   } else {
      //     return "";
      //   }

      // case "lastName":
      //   if (!value || value.trim() === "") {
      //     return "lastname is required";
      //   } else {
      //     return "";
      //   }

      // case "email":
      //   if (!value) {
      //     return "email is required";
      //   } else if (!isValidEmail(value)) {
      //     return "please enter valid email address";
      //   } else {
      //     return "";
      //   }
      case "username":
        if (!value || value.trim() === "") {
          return "username is required";
        } else {
          return "";
        }

      case "password":
        if (!value || value.trim() === "") {
          return "password is required";
        } else {
          return "";
        }

      // case "confirmPassword":
      //   if (inputValues.password && value !== inputValues.password) {
      //     return "Confirm password is not matched";
      //   } else if (!value || value.trim() === "") {
      //     return "please enter confirm password";
      //   } else {
      //     return "";
      //   }

      // case "agree":
      //   if (!value) {
      //     return "Please accept terms and conditions";
      //   } else {
      //     return "";
      //   }

      default: {
        return "";
      }
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
  }

  const handleOnChange = (event) => {
    const { name } = event.target;

    const value =
      event.target.name === "agree" ? event.target.checked : event.target.value;

    setError({ ...errors, [name]: validateForm(name, value) });
    setInputValue({ ...inputValues, [name]: value });
  };

  return (
    <Box>
      <Box component={"form"}
        method='POST'
      >
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avtarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign up</h2>
          </Grid>
          {/* <TextField
            fullWidth
            id="standard-basic"
            label="first name"
            placeholder="Enter First Name"
            type="text"
            name="firstName"
            variant="standard"
            style={btnStyle}
            onChange={handleOnChange}
            helperText={errors.firstName}
            value={inputValues.firstName.value}
            error={errors.firstName ? true : false}
          />
          <TextField
            fullWidth
            label="last name"
            placeholder="Enter Last Name"
            variant="standard"
            type="text"
            style={btnStyle}
            name="lastName"
            onChange={handleOnChange}
            helperText={errors.lastName}
            value={inputValues.lastName.value}
            error={errors.lastName ? true : false}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="email"
            placeholder="Enter Email"
            type="text"
            variant="standard"
            style={btnStyle}
            name="email"
            onChange={handleOnChange}
            helperText={errors.email}
            value={inputValues.email.value}
            error={errors.email ? true : false}
          /> */}
          <TextField
            fullWidth
            id="standard-basic"
            label="username"
            placeholder="Enter UserName"
            type="text"
            variant="standard"
            style={btnStyle}
            name="username"
            onChange={handleOnChange}
            helperText={errors.username}
            value={inputValues.username.value}
            error={errors.username ? true : false}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="password"
            placeholder="Enter Password"
            type="Password"
            variant="standard"
            style={btnStyle}
            name="password"
            onChange={handleOnChange}
            helperText={errors.password}
            value={inputValues.password.value}
            error={errors.password ? true : false}
          />
          {/* <TextField
            fullWidth
            id="standard-basic"
            label="confirm password"
            placeholder="Enter Confirm Password"
            type="text"
            variant="standard"
            style={btnStyle}
            name="confirmPassword"
            onChange={handleOnChange}
            helperText={errors.confirmPassword}
            value={inputValues.confirmPassword.value}
            error={errors.confirmPassword ? true : false}
          /> */}

          <Box component="div">
            <FormControl style={{ width: "100%" }} variant="standard">
              <FormGroup>
                <FormControlLabel
                  sx={{ marginRight: 0 }}
                  control={
                    <Checkbox
                      checked={inputValues.agree}
                      onChange={handleOnChange}
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
            <FormHelperText error={errors.agree ? true : false}>
              {errors.agree}
            </FormHelperText>
          </Box>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
            onClick={handleOnSubmit}
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
