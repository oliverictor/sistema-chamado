import { useState, useContext } from 'react';

import { FiSettings, FiUpload } from 'react-icons/fi';

import firebase from '../../services/firebaseConnection';

import { AuthContext } from '../../contexts/auth';

import Header from '../../component/Header';
import Title from '../../component/Title';

import avatar from '../../assets/avatar.png'

import './styles.css';

export default function Profile() {

    const { user, signOut, setUser, storageUser } = useContext(AuthContext);

    const [name, setName] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null);

    function handleFile(e) {

        if (e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            } else {
                alert('Envie uma imagem do tipo PNG ou JPEG');
                setImageAvatar(null);
                return null;
            }
        }
    }


    async function handleUpload() {
        const currentUid = user.uid;

        const uploadTask = await firebase.storage()
            .ref(`image/${currentUid}/${imageAvatar.name}`)
            .put(imageAvatar)
            .then(async () => {

                await firebase.storage().ref(`image/${currentUid}`)
                    .child(imageAvatar.name).getDownloadURL()
                    .then(async (url) => {
                        let urlFoto = url

                        await firebase.firestore().collection('users')
                            .doc(user.uid)
                            .update({
                                avatarUrl: urlFoto,
                                name: name
                            })
                            .then(() => {
                                let data = {
                                    ...user,
                                    avatarUrl: urlFoto,
                                    name: name
                                };
                                setUser(data);
                                storageUser(data);
                            })
                    })
            })
    }




    async function handleSubmit(e) {

        e.preventDefault();

        if (imageAvatar === null && name !== '') {
            await firebase.firestore().collection('users')
                .doc(user.uid)
                .update({
                    name: name
                })
                .then(() => {
                    let data = {
                        ...user,
                        name: name
                    };
                    setUser(data);
                    storageUser(data);
                })
        } else if (name !== '' && imageAvatar !== null) {
            handleUpload();
        }
    }

    return (

        <div>

            <Header />

            <div className="content">

                <Title name="Meu perfil">
                    <FiSettings size={25} />
                </Title>

                <div className="container">

                    <form className="form-profile" onSubmit={handleSubmit}>

                        <label className="label-avatar">
                            <span>
                                <FiUpload color="#FFF" size={25} />
                            </span>

                            <input type="file" accept="image/*" onChange={handleFile} /><br />
                            {
                                avatarUrl === null
                                    ?
                                    <img src={avatar} width="250" height="250" alt="Foto de perfil do usuário" />
                                    :
                                    <img src={avatarUrl} width="250" height="250" alt="Foto de perfil do usuário" />
                            }
                        </label>

                        <label>Nome</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                        <label>Email</label>
                        <input type="text" value={email} disabled={true} />

                        <button type="submit">Salvar</button>

                    </form>

                </div>

                <div className="container">
                    <button className="logout-btn" onClick={() => signOut()}>Sair</button>
                </div>

            </div>

        </div>
    )
}