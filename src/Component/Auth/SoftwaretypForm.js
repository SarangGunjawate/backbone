import {
  Box,
  Typography,
  Grid,
  FormControl,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import React, { useState } from "react";

function SoftwaretypForm(props) {
  const { submitDetails } = props;

  const ObjInitial = {
    Name: {
      value: "",
      error: false,
    },
    Description: {
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
        name: inputValues.Name.value,
        description: inputValues.Description.value,
      });
    }

    // Call API
  };

  const validateForm = () => {
    let isError = false;
    const currrentValues = { ...inputValues };

    if (!inputValues.Name.value) {
      isError = true;
      currrentValues.Name.error = true;
    }
    if (!inputValues.Description.value) {
      isError = true;
      currrentValues.Description.error = true;
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
    } else if (name === "name") {
      setInputValue({ ...inputValues, [name]: { value: value, error: true } });
    } else {
      currentValues.value = value;
      currentValues.error = false;
      setInputValue({ ...inputValues, [name]: currentValues });
    }
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
                label="Name"
                variant="outlined"
              />
            </FormControl>
          </Grid>
          <Grid
            item
            align="center"
            xs={12}
            sm={12}
            md={12}
            sx={{ width: "100%" }}
          >
            <TextareaAutosize
              id={"card-content"}
              maxRows={4}
              aria-label="maximum height"
              placeholder="Card Message Maximum 500 Characters"
              defaultValue=""
              name="cardContent"
              style={{
                width: "100%",
                height: 100,
                backgroundColor: "#1A202C",
                resize: "vertical",
                color: "#fff",
                // border: errors.cardContent ? '1px solid red' : 'none',
              }}
            />
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
                select
                label="Created by"
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
                select
                label="Updated by"
              />
            </FormControl>
          </Grid>
          <Grid item align="center" md={12} sx={{ width: "100%" }}>
            <Button
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
