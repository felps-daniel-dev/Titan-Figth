import { useState } from "react";
import "./App.css"; 
import HomePage from './pages/HomePage/HomePage';
import AdminPage from './pages/AdminPage/AdminPage'

function App() {
  const [telaAtiva, setTelaAtiva] = useState("HOME");


  const mudarTela = (nomeDaTela: string) => {
    setTelaAtiva(nomeDaTela);
  };

  return (
    <div className="app-main">
      {telaAtiva === "HOME" && (
        <HomePage acesso={mudarTela} />
      )}
      
      {telaAtiva === "ADMIN" && (
        <AdminPage voltar={() => mudarTela("HOME")} />
      )}
    </div>
  );
}

export default App;