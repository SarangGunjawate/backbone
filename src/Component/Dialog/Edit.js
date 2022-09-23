import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import TextField from "@mui/material/TextField";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  TextareaAutosize,
  FormHelperText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>;
//   },
//   ref: React.Ref<unknown>,
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export default function Edit(props) {

  const {open, handleClose} = props;
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

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
          return "discription is required";
        } else {
          return "";
        }
      case "created_by":
        if (!value || value.trim() === "") {
          return "created_by is required";
        } else {
          return "";
        }
      case "updated_by":
        if (!value || value.trim() === "") {
          return "updated_by is required";
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };

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
    // props.handleUpdateUserFrm({ ...inputValues });
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setErrors({ ...errors, [name]: validateForm(name, value) });
    setInputValue({ ...inputValues, [name]: value });
  };

  // const { open, handleModalClose } = props;

  //close popup............
  // const handleClose = () => {
  //   handleModalClose(false);
  // };

  return (
    <Box>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        // TransitionComponent={Transition}
      >
        <Box
          sx={{
            display: "flex",
            // textAlign: 'center',
            // margin: 'auto'
          }}
        >
          <DialogTitle
            sx={{ "&.MuiDialogTitle-root": { px: 2 }, marginLeft: "20px" }}
          >
            Update Software Type
          </DialogTitle>
          <Button
            sx={{
              color: "black",
              marginLeft: "250px",
              height: "30px",
              width: "30px",
              marginTop: "10px",
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Button>
        </Box>
        <DialogContent sx={{ "&.MuiDialogTitle-root": { px: 2 } }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={1}
            spacing={1}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              m: 0,
            }}
          >
            <Grid
              item
              align="center"
              xs={12}
              sm={8}
              md={12}
              sx={{ width: "100%", pr: 1 }}
            >
              <TextField
                autoComplete="off"
                name="name"
                fullWidth
                placeholder="Name"
                id="name"
                required
                onChange={handleOnChange}
                helperText={errors.name}
                value={inputValues.name.value}
                error={errors.name ? true : false}
              />
            </Grid>
            <Grid
              item
              align="center"
              xs={12}
              sm={8}
              md={12}
              sx={{ width: "100%" }}
            >
              <TextareaAutosize
                id={"card-content"}
                maxRows={4}
                aria-label="maximum height"
                placeholder="Discription"
                defaultValue=""
                name="discription"
                value={inputValues.discription.value}
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
            </Grid>
            <Grid
              item
              align="center"
              xs={12}
              sm={8}
              md={12}
              sx={{ width: "100%", pl: 1 }}
            >
              <TextField
                autoComplete="off"
                name="created_by"
                fullWidth
                placeholder="Created by"
                id="created_by"
                required
                onChange={handleOnChange}
                helperText={errors.created_by}
                value={inputValues.created_by.value}
                error={errors.created_by ? true : false}
              />
            </Grid>
            <Grid
              item
              align="center"
              xs={12}
              sm={12}
              md={12}
              sx={{ width: "100%" }}
            >
              <TextField
                placeholder="Updated by"
                id="updatedby"
                name="updated_by"
                sx={{ width: "100%", textAlign: "left" }}
                onChange={handleOnChange}
                helperText={errors.updated_by}
                value={inputValues.updated_by}
                error={errors.updated_by ? true : false}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            margin: "auto",
          }}
        >
          <Button
            sx={{
              width: "200px",
            }}
            variant="contained"
            color={"primary"}
            onClick={handleOnSubmit}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
