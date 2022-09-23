import React, { useEffect, useState } from "react";
import SoftwareTypeList from "../SoftwareType/SoftwareTypeList";
import {
  getSoftwareTypeList,
  fetchSoftwareTypeListDetails,
  editSoftwareType,
} from "../../Redux/Reducers/SoftwaretypeReducer";
import { useDispatch, useSelector } from "react-redux";
import { deleteSoftwareType } from "../../Services/SoftwaretypeListService";
import { UserActions } from "../../Utils/Helper";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Button,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import WithLoader from "../HOC/WithLoader";
import { useNavigate } from "react-router-dom";

function SoftwaretypeListManager(props, event) {
  const { setLoading } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getSoftTypeList = useSelector(getSoftwareTypeList);
  console.log("getSoftTypeList", getSoftTypeList);
  const [selectedUser, setSelectedUser] = useState(null);
  console.log("selectedUser", selectedUser);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchSoftwareTypeListDetails());
  }, []);

  useEffect(() => {
    setList(getSoftTypeList);
  }, [getSoftTypeList]);

  const handleUserAction = (user, action) => {
    console.log("User", user);
    console.log("action", action);

    switch (action) {
      case UserActions.DELETE:
        handleSoftwareTypeDeletion(user);
        break;
    }
  };

  const handleSoftwareTypeDeletion = async (obj) => {
    setLoading(true);
    console.log("selectes user", obj);
    setSelectedUser(obj);
    try {
      const response = await deleteSoftwareType(obj.id);
      setLoading(false);
      console.log("res", response);
      if (response.status === 200) {
        dispatch(fetchSoftwareTypeListDetails());
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [searchText, setSearchText] = useState("");

  const [List, setList] = useState(getSoftTypeList);

  const onChangeSearchText = (event) => {
    let searchText = event.target.value;

    setSearchText(searchText);
    if (!searchText) {
      setList(getSoftTypeList);
      return;
    } else {
      searchText = searchText.toLowerCase();
      const filteredUsers = Object.values(getSoftTypeList).filter((user) => {
        return (
          user.discription.toLocaleLowerCase().includes(searchText) ||
          user.name.toLocaleLowerCase().includes(searchText)
        );
      });
      if (filteredUsers.length > 0) {
        setList(filteredUsers);
      } else {
        setOpen(true);
      }
      setList(filteredUsers);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "secondary.main",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "secondary.main",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              pt: 5,
            }}
          >
            <FormControl sx={{ mr: 10, width: 200, align: "center" }}>
              <OutlinedInput
                sx={{
                  paddingRight: 0,
                  backgroundColor: "#336699",
                }}
                name="searchStore"
                size="small"
                autoComplete="off"
                varient="outlined"
                id="search-Store"
                placeholder="Search"
                value={searchText}
                onChange={onChangeSearchText}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="">
                      <SearchIcon sx={{ opacity: "0.5" }} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              onClick={() => navigate("/softwaretype")}
              sx={{
                textAlign: "center",
                justifyContent: "center",
                px: 3,
              }}
              variant="contained"
              startIcon={<AddIcon />}
            >
              Add Software Type
            </Button>
          </Box>
          <SoftwareTypeList
            softTypeList={List}
            handleUserAction={handleUserAction}
            selectedUser={selectedUser}
          />
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            data not found....!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
    // <div>
    //   <SoftwareTypeList
    //     softTypeList={getSoftTypeList}
    //     handleUserAction={handleUserAction}
    //     selectedUser={selectedUser}
    //   />
    // </div>
  );
}

export default WithLoader(SoftwaretypeListManager);
