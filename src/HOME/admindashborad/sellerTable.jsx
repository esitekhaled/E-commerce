import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));




const Seller=(props)=>{

  const role='seller'
const [data,setData]=useState([])

useEffect( () => {
    const fetch=async()=>{
        const response = await axios.get(`http://localhost:3000/api/user/useRole/${role}`);
      setData(response.data);
    }
      
  fetch()
    }
  , []);
  
  
return(
    <div style={{width:'60%',marginLeft:530,height:'100%'}}>

    <TableContainer component={Paper}>
    <Table sx={{ maxWidth: '100%' }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>user_id</StyledTableCell>
          <StyledTableCell align="right">User Name</StyledTableCell>
          <StyledTableCell align="right">Email</StyledTableCell>
          <StyledTableCell align="right">password</StyledTableCell>
          <StyledTableCell align="right">role</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.user_id}
            </StyledTableCell>
            <StyledTableCell align="right">{row.username}</StyledTableCell>
            <StyledTableCell align="right">{row.email}</StyledTableCell>
            <StyledTableCell align="right">{row.paswword}</StyledTableCell>
            <StyledTableCell align="right">{row.role}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>

)

}
export default Seller