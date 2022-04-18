import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import './App.css';
import '@fontsource/roboto';

import { Container, Typography } from '@mui/material';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm" >
        <Typography variant="h3" component="h3" align='center'>Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log('ao enviar', dados)
}

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return {valido: false, texto: "CPF deve ter 11 dígitos"}
  } else {
    return {valido: true, texto: ""}
  }
}

export default App;
