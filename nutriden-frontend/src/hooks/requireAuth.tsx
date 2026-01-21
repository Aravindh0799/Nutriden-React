import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/authProvider";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return auth?.accessToken ? (
        <Outlet />
    ) : (
        <Navigate
            to="/login"
            state={{ from: location }}
            replace
        />
    );
};

export default RequireAuth;
