import React, { useContext, useState } from "react";
// import Loader from "react-loader-spinner";
import { PatientsContext } from "../../PatientsContext";
import {
  Container,
  ButtonMore,
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
import FilterList from "@material-ui/icons/FilterList";

import { format, parseISO } from "date-fns";

export function PatientsTable(props) {
  const { patients, handleLoadingMore, handleFilterGenderPatient, loading } = useContext(PatientsContext);
  const [patientGender, setPatientGender] = useState("");

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(gender) {
    setAnchorEl(null);

    handleFilterGenderPatient(gender);
    setPatientGender(gender);
  }

  return (
    <Container>
      <Paper className={"paper-content"}>
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
                    <MenuItem onClick={() => handleClose("male")}>
                      Male
                    </MenuItem>
                    <MenuItem onClick={() => handleClose("female")}>
                      Female
                    </MenuItem>
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
                      {patient.gender.toUpperCase()}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {format(parseISO(patient.dob.date), "dd/MM/yyyy")}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => props.onOpenPatientModal(patient)}
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
        {loading ? (
          <>
            <ButtonMore onClick={() => handleLoadingMore(patientGender)}>
              Loading More ...
              {/* <Loader
                type="Oval"
                color="#222"
                height={20}
                width={20}
                timeout={4000} //3 secs
              /> */}
            </ButtonMore>
          </>
        ) : (
          <ButtonMore onClick={() => handleLoadingMore(patientGender)}>
            Loading More
          </ButtonMore>
        )}
      </Paper>
    </Container>
  );
}
