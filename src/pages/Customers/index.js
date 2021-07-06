
import { useState } from 'react/cjs/react.development';

import Title from '../../component/Title';
import Header from '../../component/Header';

import './styles.css';

import { FiUser } from 'react-icons/fi';


export default function Customers() {
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        alert('CLICOU')
    }

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Clientes">
                    <FiUser size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile customers" onSubmit={handleSubmit}>
                        <label>Nome Fantasia</label>
                        <input type="text" placeholder="Nome da sua empresa" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} ></input>

                        <label>CNPJ</label>
                        <input type="text" placeholder="Seu CNPJ" value={cnpj} onChange={(e) => setCnpj(e.target.value)} ></input>


                        <label>Endereço</label>
                        <input type="text" placeholder="Endereço da empresa" value={endereco} onChange={(e) => setEndereco(e.target.value)} ></input>

                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}