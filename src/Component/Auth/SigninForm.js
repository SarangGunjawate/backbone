import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../../Utils/Helper";

import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SigninForm = (props) => {
  console.log("props", props);
  const { submitDetails } = props;
  const navigate = useNavigate();

  const paperStyle = {
    padding: "20px",
    height: "74vh",
    width: "400px",
    margin: "70px auto",
    backgroundColor: "#e6e6e6",
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
    margin: "10px 0",
  };

  const textfieldStyle = {
    margin: "10px 0",
  };

  const ObjInitial = {
    Username: {
      value: "",
      error: false,
    },
    Password: {
      value: "",
      error: false,
    },
  };

  const [inputValues, setInputValue] = useState(ObjInitial);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const isValidForm = validateForm();

    if (!isValidForm) {
      //  error
      submitDetails({
        username: inputValues.Username.value,
        password: inputValues.Password.value,
      });
    }

    // Call API
  };

  const validateForm = () => {
    let isError = false;
    const currrentValues = { ...inputValues };

    if (!inputValues.Username.value) {
      isError = true;
      currrentValues.Username.error = true;
    }
    if (!inputValues.Password.value) {
      isError = true;
      currrentValues.Password.error = true;
    }

    setInputValue({
      ...currrentValues,
    });
    return isError;
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    let currentValues = inputValues[name];
    console.log("event", currentValues);

    if (!value) {
      currentValues = {
        error: true,
        value: "",
      };
      setInputValue({ ...inputValues, [name]: currentValues });
    } else if (name === "username") {
      setInputValue({ ...inputValues, [name]: { value: value, error: true } });
    } else {
      currentValues.value = value;
      currentValues.error = false;
      setInputValue({ ...inputValues, [name]: currentValues });
    }
  };

  return (
    <Box>
      <Box component={"form"} noValidate autoComplete="off" method="post">
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avtarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign in</h2>
          </Grid>
          <TextField
            fullWidth
            name="Username"
            id="standard-basic"
            label="username"
            placeholder="Enter UserName"
            type="text"
            variant="standard"
            style={textfieldStyle}
            onChange={handleOnChange}
            helperText={
              inputValues.Username.error ? "username is requird" : ""
            }
            value={inputValues.Username.value}
            error={inputValues.Username.error}
          />
          <TextField
            name="Password"
            fullWidth
            label="password"
            placeholder="Enter Password"
            variant="standard"
            type="password"
            style={textfieldStyle}
            required
            onChange={handleOnChange}
            helperText={inputValues.Password.error ? "Password is requird" : ""}
            error={inputValues.Password.error}
            value={inputValues.Password.value}
          />

          <FormControlLabel
            control={<Checkbox color="primary" name="checked" defaultChecked />}
            label="Remember me"
          />
          <Button
            onClick={handleOnSubmit}
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Sign in
          </Button>
          <Typography>
            <Box
              component="span"
              style={forgotStyle}
              // onClick={() => {
              //   navigate("/forgotpass");
              // }}
            >
              Forgot Password ?
            </Box>
          </Typography>

          <Typography>
            Do you have an account ?
            <Box
              component="span"
              style={forgotStyle}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </Box>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default SigninForm;
