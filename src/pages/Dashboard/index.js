import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

export default function Dashboard() {

    const { signOut } = useContext(AuthContext);

    return (
        <div>
            <h1>Página Dashboard</h1>
            <br /><br />
            <button onClick={() => signOut()}>Fazer Logout</button>
        </div>
    )
}