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
            navigate("/pocket_track/admin");
        } else if (role === "CLIENT") {
            navigate("/pocket_track/client");
        } else {
            navigate("/pocket_track/auth");
        }
    }, [role, navigate]);

    return null; // Este componente no renderiza nada
};