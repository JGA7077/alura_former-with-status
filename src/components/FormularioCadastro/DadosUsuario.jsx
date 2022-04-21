import React from "react";
import { TextField, Button } from "@mui/material";

function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      aoEnviar()
    }}>
      <TextField 
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal" 
        fullWidth 
      />
      <TextField 
        id="senha" 
        label="senha" 
        required
        type="password" 
        variant="outlined" 
        margin="normal" 
        fullWidth 
      />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
