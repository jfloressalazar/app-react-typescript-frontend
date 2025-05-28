import { Link } from "react-router-dom";

export default function RegisterView() {
    return (
        <>
            <h1>RegisterView</h1>
            <nav>

                <Link to="/auth/login">Login</Link>

            </nav>
        </>
    );
}