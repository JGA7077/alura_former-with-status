import React, {useState} from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function FormularioCadastro() {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(false)

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      console.log({nome, sobrenome, cpf, promocoes, novidades})
    }}>
      <TextField 
        value={nome}
        onChange={(event) => {
          setNome(event.target.value)
        }}

        id="nome" 
        label="Nome" 
        variant="outlined" 
        margin="normal" 
        fullWidth
      />

      <TextField 
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value)
        }}
        id="sobrenome" 
        label="Sobrenome" 
        variant="outlined" 
        margin="normal" 
        fullWidth 
      />

      <TextField 
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value)
        }}
        id="CPF" 
        label="CPF" 
        variant="outlined" 
        margin="normal" 
        fullWidth 
      />

      <FormControlLabel 
        label="Promoções" 
        control={<Switch onChange={(event) => {
          setPromocoes(event.target.checked)
        }} name="promocoes" checked={promocoes} color="primary" />}
      />

      <FormControlLabel 
        label="Novidades" 
        control={<Switch onChange={(event) => {
          setNovidades(event.target.checked)
        }} name="promocoes" checked={novidades} color="primary" />} 
      />
      

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
