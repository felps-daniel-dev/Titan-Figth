import Lutador from '../../assets/images/AndersonSilva01.jpeg'
import Logo from '../../assets/images/LogoOrigi.png'

import '../../App.css'
import "./HomePage.css";

interface HomeProps {
    acesso: (tela: string) => void;
}

function HomePage({ acesso }: HomeProps) {
    return (
        <div className="home-container">
            <div className="container-lutador">
                <img src={Lutador} className="lutador-img" alt="Anderson Silva" />
            </div>

            <div className="content-side">
                <img src={Logo} className="logo-imagem" alt="Titan Fight" />
                <div className="menu-acesso">
                    <p className="frase-acesso">ACESSAR COMO: </p>
                    <div className="botoes-grupo">
                        <button className="btn-titan" onClick={() => acesso("ADMIN")}>
                            Administrador
                        </button>

                        <button className="btn-titan" onClick={() => acesso("PROFESSOR")}>
                            Professor
                        </button>

                        <button className="btn-titan" onClick={() => acesso("ALUNO")}>
                            Aluno
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage 