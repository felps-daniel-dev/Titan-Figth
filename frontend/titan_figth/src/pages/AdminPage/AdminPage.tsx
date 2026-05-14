import "./AdminPage.css";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { type AlunoData } from "../../componets/AlunoData";
import ManutencaoAluno from "../ManutencaoAluno/ManutencaoAluno";

interface AdminProps {
    voltar: () => void;
}

function AdminPage({ voltar }: AdminProps) {
    const [telaAtiva, setTelaAtiva] = useState<string | null>(null);
    const [itemSelecionado, setItemSelecionado] = useState<number | null>(null);
    const [data, setData] = useState<AlunoData[]>([]);
    const [modoManutencao, setModoManutencao] = useState(false);
    const [alunoParaEdicao, setAlunoParaEdicao] = useState<AlunoData | null>(null);

    const carregarAlunos = () => {
        api.get<AlunoData[]>('/aluno')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Erro ao carregar alunos:", error);
            });
    };

    useEffect(() => {
        if (telaAtiva === 'alunos') {
            carregarAlunos();
        }
    }, [telaAtiva]);

    const handleAdicionar = () => {
        setAlunoParaEdicao(null);
        setModoManutencao(true);
    };

    const handleEditar = () => {
        const aluno = data.find(a => a.id === itemSelecionado);
        if (aluno) {
            setAlunoParaEdicao(aluno);
            setModoManutencao(true);
        }
    };

    const finalizarManutencao = () => {
        setModoManutencao(false);
        setAlunoParaEdicao(null);
        carregarAlunos();
    };

    return (
        <div className="admin-container">
            <aside className="menu-lateral">
                <h1 className="label-menu">Menu</h1>
                <div className="grupo-menu">
                    <button className={`btn-menu ${!telaAtiva ? 'active' : ''}`} onClick={() => { setTelaAtiva(null); setModoManutencao(false); }}>
                        Início
                    </button>

                    <button
                        className={`btn-menu ${telaAtiva === 'alunos' ? 'active' : ''}`}
                        onClick={() => { setTelaAtiva('alunos'); setItemSelecionado(null); setModoManutencao(false); }}
                    >
                        Alunos
                    </button>

                    <button className="btn-menu" onClick={() => setTelaAtiva('professor')}>Professor</button>
                    <button className="btn-menu" onClick={() => setTelaAtiva('turma')}>Turma</button>
                    <button className="btn-menu" onClick={() => setTelaAtiva('modalidade')}>Modalidade</button>
                    <button className="btn-menu" onClick={() => setTelaAtiva('matricula')}>Matricula</button>
                    <button className="btn-menu" onClick={() => setTelaAtiva('relatorio')}>Relatório</button>
                </div>
                <button className="btn-menu" onClick={voltar}>Sair</button>
            </aside>

            <main className="container-principal">
                <div className="container-dinamico">
                    {!telaAtiva && (
                        <div className="painel-inicio">
                            <div className="inicio-texto">
                                <h1 className="label-menu">TITAN FIGHT</h1>
                            </div>
                            <div className="lutador-img">
                                <img src="/src/assets/images/Poatan.jfif" alt="Poatan" />
                            </div>
                        </div>
                    )}

                    {telaAtiva === 'alunos' && (
                        modoManutencao ? (
                            <ManutencaoAluno 
                                alunoParaEditar={alunoParaEdicao} 
                                aoSalvar={finalizarManutencao} 
                                aoCancelar={() => setModoManutencao(false)} 
                            />
                        ) : (
                            <div className="container-dinamico">
                                <div className="topo-pesquisa-externa">
                                    <input type="text" className="input-pesquisa" placeholder="Pesquisar..." />
                                    <button className="btn-buscar">Buscar</button>
                                </div>

                                <div className="quadrado-listagem">
                                    <div className="tabela-scroll">
                                        <table className="tabela-titan">
                                            <thead>
                                                <tr>
                                                    <th>CÓDIGO</th>
                                                    <th className="col-nome">NOME</th>
                                                    <th>STATUS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map(aluno => (
                                                    <tr
                                                        key={aluno.id}
                                                        className={`btn-submenu ${itemSelecionado === aluno.id ? 'active' : ''}`}
                                                        onClick={() => setItemSelecionado(aluno.id)}
                                                    >
                                                        <td>{String(aluno.id).padStart(3, '0')}</td>
                                                        <td className="col-nome">{aluno.nome}</td>
                                                        <td className={aluno.status === 1 ? 'status-ativo' : 'status-inativo'}>
                                                            {aluno.status === 1 ? 'Ativo' : 'Inativo'}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="rodape-acoes">
                                    <button className="btn-menu btn-crud-padrao btn-adicionar" onClick={handleAdicionar}>
                                        + ADICIONAR ALUNO
                                    </button>
                                    <div className="grupo-acoes-direita">
                                        {itemSelecionado && (
                                            <>
                                                <button className="btn-menu btn-crud-padrao btn-editar" onClick={handleEditar}>
                                                    EDITAR
                                                </button>
                                                <button className="btn-menu btn-crud-padrao btn-excluir">
                                                    EXCLUIR
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </main>
        </div>
    );
}

export default AdminPage;