import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

import Header from "../../component/Header";

export default function Dashboard() {

    const { signOut } = useContext(AuthContext);

    return (
        <div>
            <Header />

            <h1>Página Dashboard</h1>
            <br /><br />
            <button onClick={() => signOut()}>Fazer Logout</button>
        </div>
    )
}