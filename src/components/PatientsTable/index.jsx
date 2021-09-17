import React, { useContext, useState } from "react";
import { PatientsContext } from "../../PatientsContext";
import {
  Container,
  useStyles,
  StyledTableRow,
  StyledTableCell,
} from "./styles";

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import Loop from "@material-ui/icons/Loop";
import FilterList from "@material-ui/icons/FilterList";

import { format, parseISO } from "date-fns";

export function PatientsTable(props) {
  const { patients, handleLoadingMore } = useContext(PatientsContext);
  const { patientGender, setPatientGender } = useState("");

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Container>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            className={classes.table}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">
                  Gender
                  <IconButton
                    aria-label="filter"
                    id="filter-button"
                    aria-controls="long-menu"
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <FilterList />
                  </IconButton>
                  <Menu
                    id="filter-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Male</MenuItem>
                    <MenuItem onClick={handleClose}>Female</MenuItem>
                  </Menu>
                </StyledTableCell>
                <StyledTableCell align="center">Birth</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient) => {
                return (
                  <StyledTableRow key={patient.cell}>
                    <StyledTableCell component="th" scope="row">
                      {patient.name.first + " " + patient.name.last}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {patient.gender}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {format(parseISO(patient.dob.date), "dd/MM/yyyy")}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={props.onOpenPatientModal}
                      >
                        View
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <IconButton color="secondary" onClick={handleLoadingMore}>
          <Loop />
          test
        </IconButton>
      </Paper>
    </Container>
  );
}
