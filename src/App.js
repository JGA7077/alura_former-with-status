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
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
