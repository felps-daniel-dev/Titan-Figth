import React, { useState, useEffect } from 'react';
import api from '../../services/api'; 
import type { AlunoData } from '../../componets/AlunoData.tsx'; 

interface Props {
    alunoParaEditar?: AlunoData | null;
    aoSalvar: () => void;
    aoCancelar: () => void;
}

const ManutencaoAluno: React.FC<Props> = ({ alunoParaEditar, aoSalvar, aoCancelar }) => {
    
    // Inicializa o estado. Se for edição, carrega os dados. Se for novo, zera tudo.
    const [aluno, setAluno] = useState<AlunoData>({
        id: 0,
        nome: '',
        dt_nascimento: '',
        cpf: '',
        telefone: '',
        email: '',
        uf: '',
        cidade: '',
        status: 1
    });

    useEffect(() => {
        if (alunoParaEditar) {
            setAluno(alunoParaEditar);
        }
    }, [alunoParaEditar]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setAluno({ ...aluno, [name]: value });
    };

    const handleConfirmar = async () => {
        try {
            if (aluno.id && aluno.id > 0) {
                await api.put(`/aluno/${aluno.id}`, aluno);
                alert('Registro atualizado com sucesso!');
            } else {
                const { id, ...novoAluno } = aluno; 
                await api.post('/aluno', novoAluno);
                alert('Novo aluno cadastrado com sucesso!');
            }
            aoSalvar(); 
        } catch (error) {
            console.error("Erro ao processar requisição:", error);
            alert('Erro ao salvar os dados. Verifique o console do servidor.');
        }
    };

    return (
        <div className="manutencao-container">
            <h2 className="label-menu">
                {aluno.id && aluno.id > 0 ? 'EDITAR ALUNO' : 'CADASTRAR ALUNO'}
            </h2>
            
            <div className="form-grid">
                <div className="campo">
                    <label>Código</label>
                    <input 
                        name="id" 
                        value={aluno.id === 0 ? 'NOVO' : aluno.id} 
                        readOnly 
                        className="input-id" 
                    />
                </div>

                <div className="campo">
                    <label>Nome Completo</label>
                    <input name="nome" value={aluno.nome} onChange={handleChange} />
                </div>

                <div className="campo">
                    <label>CPF</label>
                    <input type='resenha' name="cpf" value={aluno.cpf} onChange={handleChange} />
                </div>

                <div className="campo">
                    <label>Data Nascimento</label>
                    <input typeof='data' name="dt_nascimento" type="date" value={aluno.dt_nascimento} onChange={handleChange} />
                </div>

                <div className="campo">
                    <label>Telefone</label>
                    <input name="telefone" value={aluno.telefone} onChange={handleChange} />
                </div>

                <div className="campo">
                    <label>E-mail</label>
                    <input type='email' name="email" value={aluno.email} onChange={handleChange} />
                </div>

                <div className="campo">
                    <label>Cidade</label>
                    <input name="cidade" value={aluno.cidade} onChange={handleChange} />
                </div>

                <div className="campo">
                    <label>UF</label>
                    <input name="uf" value={aluno.uf} onChange={handleChange} maxLength={2} />
                </div>

                <div className="campo">
                    <label>Status</label>
                    <select name="status" value={aluno.status} onChange={handleChange as any}>
                        <option value={1}>Ativo</option>
                        <option value={2}>Inativo</option>
                        <option value={3}>Pausado</option>
                    </select>
                </div>
            </div>

            <div className="botoes-acao">
                <button onClick={handleConfirmar} className="btn-confirmar">CONFIRMAR</button>
                <button onClick={aoCancelar} className="btn-cancelar">SAIR</button>
            </div>
        </div>
    );
};

export default ManutencaoAluno;