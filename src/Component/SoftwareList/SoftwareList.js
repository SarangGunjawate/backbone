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
  Button
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";

function SoftwareList(props) {
  const { softList } = props;

  const list = Object.keys(softList).map((key) => softList[key]);

  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        p: 2
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: 25,
          py: theme.spacing(2),
          color: "black",
        }}
      >
        Software List
      </Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: "100%",
            
          }}
          aria-label="Software List"
        >
          <TableHead sx={{color: 'black', fontWeight: 150}}>
            <TableRow >
              <TableCell sx={{color: 'black'}} align="center">computer_software_type</TableCell>
              <TableCell sx={{color: 'black'}} align="center">created_by</TableCell>
              <TableCell sx={{color: 'black'}} align="center">discription</TableCell>
              <TableCell sx={{color: 'black'}} align="center">name</TableCell>
              <TableCell sx={{color: 'black'}} align="center">port_numbers</TableCell>
              <TableCell sx={{color: 'black'}} align="center">version</TableCell>
              <TableCell sx={{color: 'black'}} align="center">Update</TableCell>
              <TableCell sx={{color: 'black'}} align="center">Delete</TableCell>
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
                  border: '1px solid black'
                }}
              >
                <TableCell
                  sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                  align="center"
                >
                  {obj.computer_software_type}
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
                  {obj.discription}
                </TableCell>
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
                  {obj.port_numbers}
                </TableCell>
                <TableCell
                  sx={{ borderRadius: 15, px: 0.3, py: 0.3 }}
                  align="center"
                >
                  {obj.version}
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
                  >
                    Update
                  </Button>
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
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default SoftwareList;
