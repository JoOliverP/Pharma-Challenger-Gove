import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import SearchIcon from '@material-ui/icons/Search';


export function SearchingInput() {
  const onSearch = value => console.log(value);
   return (
    <FormControl 
            style={{width: '100%'}}
            //  margin= 'dense'
            variant="outlined">
            <InputLabel >Searching</InputLabel>
            <OutlinedInput
               type= 'text'
               // value={}
               onChange={()=>{}}
               fullWidth
               endAdornment={
               <InputAdornment position="end">
                  <IconButton
                     onClick={()=>{}}
                     onMouseDown={()=>{}}
                     edge="end"
                  >
                     <SearchIcon />
                  </IconButton>
               </InputAdornment>
               }
               
               labelWidth={70}
            />
        </FormControl>
   ) 
}