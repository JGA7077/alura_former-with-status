import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "./App.css";
import "@fontsource/roboto";
import { Container, Typography } from "@mui/material";

import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h3" align="center">
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log("ao enviar", dados);
}

export default App;
