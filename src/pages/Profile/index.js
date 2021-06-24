import Header from '../../component/Header';
import Title from '../../component/Title';

import { FiSettings } from 'react-icons/fi';

import './styles.css';

export default function Profile() {
    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Meu perfil">
                    <FiSettings size={25} />
                </Title>
            </div>
        </div>
    )
}