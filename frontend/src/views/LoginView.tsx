import { Link } from "react-router-dom";


export default function LoginView() {
    return (
        <>
            <h1>LoginView</h1>
            <nav>

                <Link to="/auth/register">Register</Link>

            </nav>
        </>
    );
}