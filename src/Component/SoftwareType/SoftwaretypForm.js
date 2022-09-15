import {
  Box,
  Typography,
  Grid,
  FormControl,
  TextField,
  TextareaAutosize,
  Button,
  FormHelperText,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";

function SoftwaretypForm(props) {
  const { handleFormSubmit } = props;

  // Form fields
  const [inputValues, setInputValue] = useState({
    name: "",
    discription: "",
    created_by: "",
    updated_by: "",
  });

  // Form errors
  const [errors, setErrors] = useState({
    name: "",
    discription: "",
    created_by: "",
    updated_by: "",
  });

  const handleOnSubmit = () => {
    let validationErrors = {};
    Object.keys(inputValues).forEach((name) => {
      const error = validateForm(name, inputValues[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors({ ...errors, ...validationErrors });
      return;
    }

    // Submit form
    handleFormSubmit(inputValues);
    console.log("inputValues", inputValues);
  };

  const validateForm = (name, value) => {
    switch (name) {
      case "name":
        if (!value || value.trim() === "") {
          return "name is required";
        } else {
          return "";
        }

      case "discription":
        if (!value || value.trim() === "") {
          return "description is required";
        } else {
          return "";
        }

      case "created_by":
        if (!value || value.trim() === "") {
          return "please fill created by name";
        } else {
          return "";
        }

      case "updated_by":
        if (!value || value.trim() === "") {
          return "please fill updated by name";
        } else {
          return "";
        }

      default: {
        return "";
      }
    }
  };

  const handleOnChange = (event) => {
    const { name } = event.target;

    const value =
      event.target.name === "agree" ? event.target.checked : event.target.value;

    setErrors({ ...errors, [name]: validateForm(name, value) });
    setInputValue({ ...inputValues, [name]: value });
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        component={"form"}
        sx={{
          width: "100%",
          height: "100%",
          //   backgroundColor: "gray",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          py: 10,
          px: 5,
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          component="div"
          sx={{
            textAlign: "center",
            width: "100%",
            fontWeight: 700,
            fontSize: "1.2rem",
            lineHeight: "33px",
            color: "red",
          }}
        >
          Add Computer Software Type
        </Typography>
        <Grid
          container
          sx={{ width: "100%", alignSelf: "center", paddingBottom: 5 }}
          spacing={2}
        >
          <Grid item align="center" md={12} sx={{ width: "100%" }}>
            <FormControl
              sx={{
                width: "100%",
                "& .css-1mbbtyd-MuiFormHelperText-root": { marginLeft: 0 },
              }}
            >
              <TextField
                name="name"
                id="outlined-basic"
                label="name"
                variant="outlined"
                onChange={handleOnChange}
                helperText={errors.name}
                value={inputValues.name.value}
                error={errors.name ? true : false}
              />
            </FormControl>
          </Grid>
          <Grid item align="center" md={12} sx={{ width: "100%" }}>
            <FormControl
              sx={{
                width: "100%",
                "& .css-dogy4y-MuiFormHelperText-root.Mui-error": {
                  marginLeft: 0,
                },
              }}
              variant="standard"
            >
              <InputLabel shrink htmlFor="discription">
                discription
              </InputLabel>
              <TextareaAutosize
                id={"discription"}
                maxRows={4}
                type="Text"
                aria-label="maximum height"
                placeholder="discription"
                defaultValue=""
                name="discription"
                // value={inputValues.discription.value}
                onChange={handleOnChange}
                style={{
                  width: "100%",
                  height: 100,
                  backgroundColor: "#1A202C",
                  resize: "vertical",
                  color: "#fff",
                  border: errors.discription ? "1px solid red" : "none",
                }}
              />
              <FormHelperText error={errors.discription ? true : false}>
                {errors.discription}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item align="center" md={12} sx={{ width: "100%" }}>
            <FormControl
              sx={{
                width: "100%",
                "& .css-1mbbtyd-MuiFormHelperText-root": { marginLeft: 0 },
              }}
            >
              <TextField
                id="outlined-select-currency"
                // select
                label="Created by"
                name="created_by"
                onChange={handleOnChange}
                helperText={errors.created_by}
                value={inputValues.created_by}
                error={errors.created_by ? true : false}
              />
            </FormControl>
          </Grid>
          <Grid item align="center" md={12} sx={{ width: "100%" }}>
            <FormControl
              sx={{
                width: "100%",
                "& .css-1mbbtyd-MuiFormHelperText-root": { marginLeft: 0 },
              }}
            >
              <TextField
                id="outlined-select-currency"
                // select
                label="Updated by"
                name="updated_by"
                onChange={handleOnChange}
                helperText={errors.updated_by}
                value={inputValues.updated_by}
                error={errors.updated_by ? true : false}
              />
            </FormControl>
          </Grid>
          <Grid item align="center" md={12} sx={{ width: "100%" }}>
            <Button
              onClick={handleOnSubmit}
              aria-label="login"
              variant="contained"
              sx={{
                width: "100%",
                height: "50px",
                mt: 4,
              }}
            >
              save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SoftwaretypForm;
