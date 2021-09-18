import styled from "styled-components";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Container = styled.div`
  margin-top: 2rem;

  .paper-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonMore = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 200px;
  margin: 10px;
  padding: 15px;
  background: var(--blue-100);
  border-radius: 10px;
  font-size: 1rem;
  /* font-weight: 400; */

  transition: 1s;

  &:hover {
    background: var(--blue-200);
  }
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
