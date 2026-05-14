import React, { useState } from 'react';
import { Layout } from '../../components'; 
import { Input } from '../../components/common';
//import { Aluno } from '../../types/Aluno';

export const CadastroUsuario: React.FC = () => {
  const [nome, setNome] = useState('');
  const [nacimento, setNacimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [erros, setErros] = useState<{ nome?: string; email?: string }>({});

  const submit = () => {
    const novosErros: { nome?: string; email?: string } = {};
    if (!nome) novosErros.nome = "O nome é obrigatório";
    if (!email.includes('@')) novosErros.email = "E-mail inválido";

    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      alert("Sucesso!");
    }
  };

  return (
    <Layout titulo="Cadastro de Aluno">
      <div className="form-card">
        <h2 className="form-title">Informações Pessoais</h2>
        
        <div className="form-grid">
          <Input 
            label="Nome Completo *" 
            placeholder="Digite seu nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            error={erros.nome}
          />
          
          <Input 
            label="E-mail *" 
            type="email"
            placeholder="exemplo@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={erros.email}
          />
        </div>

        <div className="form-actions">
          <button className="btn-primary" onClick={submit}>
            Salvar
          </button>
          <button className="btn-secondary" type="button">
            Voltar
          </button>
        </div>
      </div>
    </Layout>
  );
};