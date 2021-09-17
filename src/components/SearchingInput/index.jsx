import React from "react";
import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

export function SearchingInput() {
  const onSearch = (value) => console.log(value);

  return (
    <FormControl
      style={{ width: "100%" }}
      //  margin= 'dense'
      variant="outlined"
    >
      <InputLabel>Searching</InputLabel>
      <OutlinedInput
        type="text"
        // value={}
        onChange={() => {}}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={() => {}} onMouseDown={() => {}} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
    </FormControl>
  );
}
