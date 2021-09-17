import styled from "styled-components";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const Container = styled.div`
  margin-top: 2rem;
`;

export const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 600,
  },
  table: {
    minWidth: 700,
  },
});

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "var(--blue-100)",
    color: "var(--text-title)",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    width: "100%",
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
