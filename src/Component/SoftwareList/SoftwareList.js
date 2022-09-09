import React from 'react'
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  TablePagination,
} from "@mui/material";

function SoftwareList(props) {
    const { softwareList } = props;
    console.log('softwareList', softwareList)
  return (
    <>
      {/* {SoftwareList.length > 0 ? ( 
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "100%" }} aria-label="user-list">
            <TableBody>
              {props.SoftwareList?.map((software) => (
                <TableRow
                  key={software.id}
                  sx={{
                    borderTop: 7,
                    borderBottom: 7,
                    borderRadius: 10,
                    // borderColor: theme.palette.secondary.main,
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                  }}
                  // onClick={() => {
                  //   handleStoreSelection(store);
                  // }}
                >
                  
                  <TableCell sx={{ borderRadius: 15, px: 1, py: 1 }}>
                    {software.name}
                  </TableCell>
                  <TableCell sx={{ borderRadius: 15, px: 1, py: 1 }}>
                    {software.port_numbers}
                  </TableCell>
                </TableRow>
               ))} 
            </TableBody>
          </Table>
        </TableContainer>
       // ) : null}  */}
    </>
  )
}

export default SoftwareList
