import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../shared/hooks/useLogin";

export const Login = () => {
    const { login, isLoading } = useLogin();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const { username, password } = formData;

        if (username.trim() && password.trim()) {
            const result = await login(username, password);
            if (!result.success) {
                setError("Error al intentar logearse");
            } else {
                setError(null);
            }
        } else {
            setError("Todos los campos son obligatorios");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div style={{
            background: `url('/src/assets/fondo.gif') no-repeat center center fixed`,
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '60%',
                    backgroundColor: '#3498db',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
                }}>
                    <form onSubmit={handleLogin} className="login-form" style={{ width: '50%', marginRight: '20px' }}>
                        <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '20px' }}>Login</h2>
                        <p style={{ color: '#fff', textAlign: 'center' }}>¡Inicia sesión!</p>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label" style={{ color: '#fff' }}>Username</label>
                            <input value={formData.username} onChange={handleChange} name="username" type="text" className="form-control" id="username" autoComplete="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" style={{ color: '#fff' }}>Password</label>
                            <input value={formData.password} onChange={handleChange} name="password" type="password" className="form-control" id="password" autoComplete="current-password" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1" style={{ color: '#fff' }}>¡Recuérdame!</label>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <button type="submit" className="btn btn-primary" disabled={isLoading}>Login</button>
                            <a href="#" style={{ color: '#fff' }}>¿Olvidaste tu contraseña?</a>
                        </div>
                        {error && <div className="alert alert-danger mt-3">{error}</div>}
                    </form>
                    <div style={{ width: '50%' }}>
                        <img src="/src/assets/logo.jpeg" alt="Login Illustration" style={{ width: '100%', borderRadius: '10px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};
