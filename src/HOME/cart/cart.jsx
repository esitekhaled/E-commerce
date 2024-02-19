import React, { useContext, useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import AuthContext from "../auth";
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
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  



const Cart = (props) => {
  const [data, setData] = useState([]);
  const {token}=useContext(AuthContext)

  const id = token.user_id;

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/api/carts/cart/:${id}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(id);
  }, [id]);

 

  return (
    <div style={{ width: '100%', height: '100vh', borderTop: '1px solid black', boxShadow: 4 }}>
      <div style={{ width: '100%', display: 'flex' }}>
        <h1 style={{ marginTop: 60, marginLeft: 200, borderBottom: '1px solid black' }}>Cart</h1>
      </div>

      <div style={{ width: '100%', margin: 'auto', marginTop: 10, display: 'flex', flexWrap: 'wrap' }}>
      <div style={{width:'60%',marginLeft:530,height:'100%'}}>

<TableContainer component={Paper}>
<Table aria-label="customized table" >
  <TableHead>
    <TableRow>
      <StyledTableCell style={{ width:20 }} align="right">prodcut_id</StyledTableCell>
      <StyledTableCell align="right">Product Name</StyledTableCell>
      <StyledTableCell align="right">Price</StyledTableCell>
      <StyledTableCell align="right">product category</StyledTableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {data.map((row) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell >
          {row.user_id}
        </StyledTableCell>
        <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 150 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>total</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              0
              
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
</div>




      </div>

      
    </div>
  );
};

export default Cart;
