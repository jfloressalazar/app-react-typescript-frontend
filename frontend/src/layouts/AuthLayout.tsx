import { Outlet } from 'react-router-dom';


export default function AuthLayout() {
    return (
        <>

            <div className="bg-slate-800 min-h-screen">
                <div className="max-w-md mx-auto pt-10 px-5">
                    <img src="/REGISTRO-GRIS.png" alt="registro" />
                    <div className="py-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}