import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Suponiendo que tienes un hook para obtener los detalles del usuario y su rol
import { useUserDetails } from "../hooks/useUserDetails";

export const RoleBasedRedirect = () => {
    const navigate = useNavigate();
    const userDetails = localStorage.getItem('user');
    const role = userDetails ? JSON.parse(userDetails).role : null;

    useEffect(() => {
        if (role === "ADMIN") {
            navigate("/worwise/admin");
        } else if (role === "CLIENT") {
            navigate("/worwise/client");
        } else {
            navigate("/worwise/auth");
        }
    }, [role, navigate]);

    return null; // Este componente no renderiza nada
};