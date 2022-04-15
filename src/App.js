import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import './App.css';

import { Container } from '@mui/material';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm" >
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
