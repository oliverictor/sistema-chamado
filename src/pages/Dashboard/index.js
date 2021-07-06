import { useState } from "react"
import { FiMessageSquare, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import Header from "../../component/Header";
import Title from "../../component/Title";

import './styles.css';

export default function Dashboard() {
    const [chamados, setChamados] = useState([]);

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Atendimento">
                    <FiMessageSquare size={25} />
                </Title>

                {chamados.length === 0 ? (
                    <div className="container dashboard">
                        <span>Nenhum registrado...</span>

                        <Link to="/new" className="new">
                            <FiPlus size={25} color="#FFF" />
                            Novo chamado
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link to="/new" className="new">
                            <FiPlus size={25} color="#FFF" />
                            Novo chamado
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}