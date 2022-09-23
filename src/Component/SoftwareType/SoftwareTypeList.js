import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Typography,
  TableHead,
  Avatar,
  TablePagination,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { UserActions } from "../../Utils/Helper";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Edit from "../Dialog/Edit";

function SoftwareTypeList(props) {
  const navigate = useNavigate()
  const { softTypeList, handleUserAction } = props;
  const list = Object.keys(softTypeList).map((key) => softTypeList[key]);
  const theme = useTheme();
  
   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          pt: 5,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 25,
            py: theme.spacing(2),
            color: "black",
            marginLeft: '0px'
          }}
        >
          Software Type List
        </Typography>
        
      </Box>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: "100%",
          }}
          aria-label="Software List"
        >
          <TableHead sx={{ color: "black", fontWeight: 150 }}>
            <TableRow>
              <TableCell sx={{ color: "black" }} align="center">
                Name
              </TableCell>
              <TableCell sx={{ color: "black" }} align="center">
                Discription
              </TableCell>
              <TableCell sx={{ color: "black" }} align="center">
                Created_by
              </TableCell>
              <TableCell sx={{ color: "black" }} align="center">
                Updated_by
              </TableCell>
              <TableCell sx={{ color: "black" }} align="center">
                Is_active
              </TableCell>
              <TableCell sx={{ color: "black" }} align="center">
                Update
              </TableCell>
              <TableCell sx={{ color: "black" }} align="center">
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {list.map((obj) => (
              <TableRow
                key={obj.id}
                sx={{
                  borderTop: 7,
                  borderBottom: 7,
                  borderRadius: 10,
                  borderColor: theme.palette.secondary.main,
                  cursor: "pointer",
                  height: "60px",
                  border: "1px solid black",
                }}
              >
                
                <TableCell
                  sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                  align="center"
                >
                  {obj.name}
                </TableCell>
                <TableCell
                  sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                  align="center"
                >
                  {obj.discription}
                </TableCell>
                <TableCell
                  sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                  align="center"
                >
                  {obj.created_by}
                </TableCell>
                <TableCell
                  sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                  align="center"
                >
                  {obj.updated_by}
                </TableCell>
                <TableCell
                  sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                  align="center"
                >
                  {obj.is_active.toString() === "true"
                    ? "Active"
                    : obj.is_active.toString() === "false"
                    ? "DisActive"
                    : null}
                </TableCell>
                <TableCell
                  sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                  align="center"
                >
                  <Button
                    sx={{
                      backgroundColor: "#1f3d7a",
                      border: "1px solid green",
                      color: "white",
                      fontSize: "13px",
                      height: "40px",
                      width: "100px",
                    }}
                    onClick={()=>handleClickOpen()}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell
                  sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                  align="center"
                >
                  <Button
                    onClick={() => handleUserAction(obj, UserActions.DELETE)}
                    sx={{
                      backgroundColor: "#1f3d7a",
                      border: "1px solid green",
                      color: "white",
                      fontSize: "13px",
                      height: "40px",
                      width: "100px",
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Edit 
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
}

export default SoftwareTypeList;
