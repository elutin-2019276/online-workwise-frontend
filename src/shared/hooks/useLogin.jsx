import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../services/api";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (username, password) => {
    setIsLoading(true);
    const user = { username, password };

    try {
      const response = await loginRequest(user);
      setIsLoading(false);

      if (response.error) {
        toast.error(response.message);
        return { success: false };
      }

      const { loggedUser, token, message } = response;

      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);

      toast.success(message);

      if (loggedUser.role === "Admin") {
        navigate("/worwise/admin");
      } else if (loggedUser.role === "Solicitante de empleo") {
        navigate("/worwise/client");
      } else {
        navigate("/worwise");
      }

      return { success: true };
    } catch (error) {
      setIsLoading(false);
      toast.error("Error al logearse");
      return { success: false };
    }
  };

  return { login, isLoading };
};
