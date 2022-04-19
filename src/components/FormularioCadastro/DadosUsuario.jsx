import React from "react";
import { TextField, Button } from "@mui/material";

function DadosUsuario(props) {
  return (
    <form>
      <TextField id="email" label="email" type="email" variant="outlined" margin="normal" fullWidth />
      <TextField id="senha" label="senha" type="password" variant="outlined" margin="normal" fullWidth />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
