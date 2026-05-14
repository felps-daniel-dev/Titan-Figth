//import { useState } from 'react';
import './App.css';
import { CadastroUsuario } from './pages/alunos/CadastroAlunos'; 
import { Layout } from './components/layout/Layout';

export function App() {
  //const [count, setCount] = useState(0)

  return (
    <Layout titulo="Home">
      <div>
        <h2 style={{ color: 'white' }}>Bem-vindo ao Dashboard</h2>
        <p style={{ color: '#94a3b8' }}>Seu conteúdo aparecerá aqui.</p>
      </div>
    </Layout>
  );
}

