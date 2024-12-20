import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Busqueda() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 0.1, width: '15ch' } }}
      noValidate
      autoComplete="off"
    >
     
      <TextField id="standard-basic" label="Busqueda" variant="standard" sx={{
          "& .MuiInputLabel-root": {
            color: "black", // Color inicial del label
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "darkgray", // Color cuando el campo está enfocado
          },
          "& .MuiInputLabel-root:hover": {
            color: "gray", // Color al hacer hover sobre el label
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "black", // Color inicial del borde
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: "gray", // Color del borde en hover
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "darkgray", // Color del borde al enfocar
          },
  }} />
    </Box>
  );
}