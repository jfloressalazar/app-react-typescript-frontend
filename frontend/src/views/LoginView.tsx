import { Link } from "react-router-dom";


export default function LoginView() {
    return (
        <>
            <h1 className="text-4xl text-white">
                Logear
            </h1>
            <nav className="mt-10">

                <Link className="text-center text-white text-lg block"
                    to="/auth/register">Register</Link>

            </nav>
        </>
    );
}