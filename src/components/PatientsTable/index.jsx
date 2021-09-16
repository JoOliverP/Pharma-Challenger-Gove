import { Container, StyledTableRow,StyledTableCell, useStyles} from "./styles";
import React,{useContext,useState,useEffect} from 'react';
import {PatientsContext} from '../../PatientsContext'
import {
   Table,
   TableBody,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
   Button
} from '@material-ui/core';
import { api } from "../../services/api";
import { format, parseISO } from "date-fns";

function createData(name, gender, birth) {
  return { name, gender, birth};
}

export function PatientsTable() {
  const classes = useStyles();
  const [patients,setPatients] = useState([]); 
//   const data = useContext(PatientsContext);

  useEffect(()=> {
     api.get('?results=50')
         .then(response => setPatients(response.data.results))
  },[]);


  return (
  <Container>
     {console.log(patients)}
    <TableContainer component={Paper} className={classes.TableContainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Birth</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => {
             return (
            <StyledTableRow key={patient.cell}>
              <StyledTableCell component="th" scope="row" > 
                {patient.name.first + ' ' + patient.name.last}
              </StyledTableCell >
              <StyledTableCell align="center">{patient.gender}</StyledTableCell>
              <StyledTableCell align="center">{format(parseISO(patient.dob.date), "dd/MM/yyyy")}
               </StyledTableCell>
              <StyledTableCell align="center">
                 <Button variant="contained" color="primary">
                  View
                 </Button>
               </StyledTableCell>
            </StyledTableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>     
  );
}