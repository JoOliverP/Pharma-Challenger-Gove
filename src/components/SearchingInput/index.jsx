import React, { useContext, useState } from "react";
import { PatientsContext } from "../../PatientsContext";
import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

export function SearchingInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const { handleSearchPatient } = useContext(PatientsContext);

  return (
    <FormControl
      style={{ width: "100%" }}
      //  margin= 'dense'
      variant="outlined"
    >
      <InputLabel>Search</InputLabel>
      <OutlinedInput
        type="text"
        // value={}
        onChange={(event) => setSearchTerm(event.target.value)}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                handleSearchPatient(searchTerm);
              }}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
    </FormControl>
  );
}
